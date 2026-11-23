// The enquiry form's choices, and which CRM team each workspace choice goes to.
//
// `department` is the CRM lead type. Coworking, hostel and hotel choices are left untyped ("") until
// the owner decides (PENDING, see docs/DECISIONS.md): the CRM sends a COWORKING lead only to coworking
// executives with no fallback, while an untyped lead is assigned like a commercial one, so nobody's
// enquiry is left unassigned. The customer's exact choice still goes to the CRM with the lead.
export const WORKSPACE_TYPES = [
  { label: "Flex Desk", department: "" },
  { label: "Dedicated Desk", department: "" },
  { label: "Private Cabin", department: "" },
  { label: "Meeting Room", department: "" },
  { label: "Virtual Office", department: "" },
  { label: "Ready to Move Offices", department: "COMMERCIAL" },
  { label: "New Commercial Building", department: "COMMERCIAL" },
  { label: "Retail Shops / Showrooms", department: "COMMERCIAL" },
  { label: "Hostels", department: "" },
  { label: "Hotels", department: "" },
];

export const TEAM_SIZES = ["1", "2-4", "5-10", "11-25", "25+"];
export const TIMELINES = ["Immediately", "This Week", "This Month", "Next Month", "Just Exploring"];

export function departmentFor(workspaceType) {
  return WORKSPACE_TYPES.find((option) => option.label === workspaceType)?.department ?? "";
}
