export default {
    name: 'covereage',
    title: 'Coverage',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description_short',
            title: 'Description (short)',
            type: 'string'
        },
        {
            name: 'description_long',
            title: 'Description (long)',
            type: 'text'
        },
        {
            title: 'Limits',
            name: 'limits',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'limits' }]
            }]
        }
    ]
}