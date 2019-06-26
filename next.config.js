const withPlugins = require("next-compose-plugins");
const withTypescript = require("@zeit/next-typescript");

const nextConfig = {};
module.exports = withPlugins([[withTypescript]], nextConfig);
