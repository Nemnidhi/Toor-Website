/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pages that show properties read the content store on every request (see src/lib/content.js),
  // so an edit in /admin shows on the site at once. Cache Components stays off for that reason.
  cacheComponents: false,
  poweredByHeader: false,
  // Tailwind 4 through its Turbopack loader, on the global stylesheet only: on "*.css" it would also
  // take the home page's CSS module and turn it into plain CSS (its class names come out undefined).
  turbopack: {
    rules: {
      "globals.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    // Same sizes as the original site; uploaded photos are served from /media by this app.
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536],
    imageSizes: [64, 96, 128, 160, 192, 256, 320, 384],
    qualities: [75, 90, 95],
    localPatterns: [{ pathname: "/assets/**" }, { pathname: "/media/**" }],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      { source: "/admin/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }, { key: "Cache-Control", value: "no-store" }] },
    ];
  },
};

export default nextConfig;
