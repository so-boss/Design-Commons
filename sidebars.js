module.exports = {
  guidelines: [
    {
      type: 'doc',
      id:'guidelines/accessibility',
    },
    {
      type: 'doc',
      id:'guidelines/color',
    },
    {
      type: 'doc',
      id:'guidelines/layout',
    },
    {
      type: 'doc',
      id:'guidelines/typography',
    },
  ],
  pixel: [
    {
      type: 'doc',
      id:'pixel',
    },
    {
      type: 'category',
      label: 'Elements',
      items: [
        'pixel/elements/block',
        'pixel/elements/button',
        'pixel/elements/field',
        'pixel/elements/icon',
        'pixel/elements/label',
        'pixel/elements/thing',
        'pixel/elements/title'
      ],
    },
    {
      type: 'category',
      label: 'Wrappers',
      items: [
        {
          type: 'category',
          label: 'Actions',
          items: [
            'pixel/wrappers/action',
            'pixel/wrappers/action_block',
            'pixel/wrappers/action_button',
            'pixel/wrappers/action_link',
          ],
        },
        'pixel/wrappers/flag',
        'pixel/wrappers/tag',
        'pixel/wrappers/ui'
      ],
    },
    {
      type: 'category',
      label: 'Containers',
      items: [
        'pixel/containers/app',
        'pixel/containers/card',
        'pixel/containers/drawer',
        'pixel/containers/form',
        'pixel/containers/group',
        'pixel/containers/page'
      ],
    },
  ],
};
