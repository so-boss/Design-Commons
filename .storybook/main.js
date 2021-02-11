// import csaa from './csaa';

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
        backgrounds: {
          grid: {
            cellSize: 8,
            opacity: 0.5,
            cellAmount: 4,
            //offsetX: 8, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
            //offsetY: 8, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
          },
        }
      }
    },
    "@storybook/preset-scss",
    "@storybook/addon-controls",
    // "@storybook/addon-knobs",
    "storybook-addon-designs"
  ],
  reactOptions: {
    fastRefresh: true,
  }
}