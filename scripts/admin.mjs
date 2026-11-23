#!/usr/bin/env node
// Manage the people who can sign in to /admin. Run on the server as the site's user, in the site folder,
// with the same DATA_DIR the site uses:
//   node scripts/admin.mjs list
//   node scripts/admin.mjs add <username> "<Display name>"     (asks for the password, hidden)
//   node scripts/admin.mjs reset <username>                     (asks for a new password, hidden)
//   node scripts/admin.mjs remove <username>
// Passwords are never taken on the command line, so they stay out of shell history.
import { addAdmin, AdminError, DATA_DIR, readAdmins, removeAdmin, setPassword, findAdmin, checkPasswordRules } from "../src/lib/adminStore.mjs";

function askHidden(question) {
  return new Promise((resolve, reject) => {
    const input = process.stdin;
    if (!input.isTTY) {
      reject(new AdminError("Run this in a terminal (the password is typed at a hidden prompt)"));
      return;
    }
    process.stdout.write(question);
    let value = "";
    input.setRawMode(true);
    input.resume();
    input.setEncoding("utf8");
    const onData = (chunk) => {
      for (const ch of chunk) {
        if (ch === "\r" || ch === "\n") {
          input.setRawMode(false);
          input.pause();
          input.off("data", onData);
          process.stdout.write("\n");
          resolve(value);
          return;
        }
        if (ch === "\u0003") {
          process.stdout.write("\n");
          process.exit(130);
        }
        if (ch === "\u007f" || ch === "\b") value = value.slice(0, -1);
        else value += ch;
      }
    };
    input.on("data", onData);
  });
}

async function askNewPassword() {
  const first = await askHidden("New password: ");
  checkPasswordRules(first);
  const second = await askHidden("Same password again: ");
  if (first !== second) throw new AdminError("The two passwords differ; nothing changed");
  return first;
}

async function main() {
  const [command, username, displayName] = process.argv.slice(2);
  console.log(`Admin users in ${DATA_DIR}`);
  switch (command) {
    case "list": {
      const users = await readAdmins();
      if (!users.length) console.log("(none yet: add one with 'add')");
      for (const user of users) console.log(`- ${user.username}  ${user.name || ""}  (password set ${user.passwordChangedAt || user.createdAt})`);
      return;
    }
    case "add": {
      if (!username) throw new AdminError('Usage: add <username> "<Display name>"');
      if (await findAdmin(username)) throw new AdminError(`${username} already exists (use reset)`);
      await addAdmin(username, displayName, await askNewPassword());
      console.log(`Added ${username}. They sign in at /admin/login.`);
      return;
    }
    case "reset": {
      if (!username) throw new AdminError("Usage: reset <username>");
      if (!(await findAdmin(username))) throw new AdminError("No such user");
      await setPassword(username, await askNewPassword());
      console.log(`Password changed for ${username}; their open sessions are signed out.`);
      return;
    }
    case "remove": {
      if (!username) throw new AdminError("Usage: remove <username>");
      await removeAdmin(username);
      console.log(`Removed ${username}; their open sessions are signed out.`);
      return;
    }
    default:
      console.log("Commands: list | add <username> \"<Display name>\" | reset <username> | remove <username>");
  }
}

main().catch((error) => {
  console.error(error instanceof AdminError ? error.message : error);
  process.exit(1);
});
