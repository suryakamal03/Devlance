/** @type {import('next-sitemap').IConfig} */
module.exports = {
  generateRobotsTxt: true,
  sitemapSize: 7000,
    siteUrl: "https://devlance1.vercel.app",
  exclude: ["/api/*", "/_next/*"],
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
  },
}
