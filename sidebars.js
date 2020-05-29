/*
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['greeting'],
    },
    {
      type: 'category',
      label: 'Docusaurus',
      items: ['doc1'],
    },
  ],
*/

module.exports = {
  // someSidebar: {
  //   Guides: [
  //     'doc',
  //     {
  //       Docusaurus: ['doc1', 'doc2', 'doc3'],
  //       Features: ['mdx'],
  //     }
  //   ],
  // },
  // docs: {
  //   'Getting started': ['greeting'],
  //   Docusaurus: ['doc1'],
  // },
  // docs: {
  //   Guides: [
  //     'creating-pages',
  //     {
  //       type: 'category',
  //       label: 'Docs',
  //       items: ['markdown-features', 'sidebar', 'versioning'],
  //     },
  //   ],
  // },
  docs: {
    Guides: [
      'creating-pages',
      {
        type: 'category',
        label: 'Docs',
        items: ['doc1', 'doc2', 'doc3'],
      },
    ],
  },
};
