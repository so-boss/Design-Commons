export default {
  name: 'icons',
  title: 'Icons',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      title: 'Category',
      name: 'category',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'icon_category'}]
      }]
    }
  ]
}