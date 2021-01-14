// import csaa from './csaa';

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    // "@storybook/addon-knobs",
    "storybook-addon-designs"
  ],
  reactOptions: {
    fastRefresh: true,
  }
}