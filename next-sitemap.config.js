/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://karamteam.fr",
  generateRobotsTxt: true,
  exclude: ["/payment/**"], // pour ne pas indexer ces pages
};
