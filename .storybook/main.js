const path = require('path');

module.exports = {
  stories: ['../stories/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-storysource',
      options: {
        parser: 'typescript'
      }
    }
  ],
  webpackFinal: async ( config ) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            reportFiles: ['stories/**/*.{ts|tsx}']
          }
        }
      ]
    });
    return config;
  }
}