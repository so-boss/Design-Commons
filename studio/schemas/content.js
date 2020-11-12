export default {
    name: 'content',
    title: 'Content',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'figma_id',
            title: 'Figma ID',
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
                to: [{ type: 'icon_category' }]
            }]
        }
    ]
}