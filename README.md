[![npm](https://img.shields.io/npm/v/@benrobertson/gatsby-theme-seo)](https://www.npmjs.com/package/@benrobertson/gatsby-theme-seo)

<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  gatsby-theme-seo
</h1>

```shell
npm install @benrobertson/gatsby-theme-seo
```

In your `gatsby-config.js`:

```js
module.exports = {
  plugins: [{
    resolve: 'gatsby-theme-seo',
    options: {
      // Adding variables in here will fail a build quickly and output
      // an error message. Useful for catching env errors quickly.
      requiredEnvVars: [
       'URL'
      ],

      // The Google Tag Manager ID you want to add.
      // Will only add in production by default.
      gtmId: 'TEST-ID',

      // Optional configuration for robots.txt
      // See: https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt
      // Example:
      robotsOptions: {
        host: 'https://www.example-override.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      },

      // Optional configuration for sitemaps.
      // For all available options, see:
      // https://www.gatsbyjs.org/packages/gatsby-plugin-advanced-sitemap/?=gatsby-plugin-advan#options
      // Example:
      sitemapOptions: {
       exclude: [
        '/404.html',
        '/404',
        '/dev-404-page',
        '/maintenance'
      }
    }
  }],
}
```
