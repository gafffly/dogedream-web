/**
 * use Windi CSS with next.js
 * @see {@link https://windicss.org/integrations/webpack.html#next-js}
 */
const WindiCSSWebpackPlugin = require("windicss-webpack-plugin")

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Support i18n for our web
   * @see {@link https://nextjs.org/docs/advanced-features/i18n-routing}
   */
  i18n: {
    locales: ["en", "cn"],
    defaultLocale: "en",
  },

  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
}

module.exports = nextConfig
