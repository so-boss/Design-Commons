export default {
  title: 'Limits',
  name: 'limits',
  type: 'document',
  fields: [
    {
      name: 'limit_type',
      title: 'Limit Type',
      type: 'string'
    },
    {
      title: 'Amount',
      name: 'amount',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'limit' }]
      }]
    }

  ]
}