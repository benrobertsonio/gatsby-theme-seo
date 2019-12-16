const assert = require('assert');

module.exports = ({
  gtmId = false,
  robotsOptions = false,
  sitemapOptions = false,
  requiredEnvVars = [],
  forceTrailingSlash = false,
}) => {
  // Fail fast if a required value is missing from .env
  requiredEnvVars.forEach((name) => {
    assert(process.env[name], `${name} must be defined in .env.`);
  });

  // We'll always want these plugins.
  const plugins = [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links'
  ];

  // If a google tag ID is included, add google tag manager in production.
  if (gtmId) {
    plugins.push({
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: gtmId,
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false
      }
    });
  }

  // If robots options are passed in, use them. Otherwise use the default config.
  // See here for available options:
  // https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/?=gatsby-plugin-robots#options
  if (robotsOptions) {
    plugins.push({
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        ...robotsOptions
      }
    });
  } else {
    plugins.push('gatsby-plugin-robots-txt');
  }

  // If you want to force trailing slashes pass true.
  if (forceTrailingSlash) {
    plugins.push('gatsby-plugin-force-trailing-slashes');
  }

  // If sitemaps options are passed in, use them. Otherwise use the default
  // sitemap config.
  if (sitemapOptions) {
    plugins.push({
      resolve: 'gatsby-plugin-advanced-sitemap',
      options: {
        ...sitemapOptions
      }
    });
  } else {
    plugins.push('gatsby-plugin-advanced-sitemap');
  }

  return {
    plugins
  };
};
