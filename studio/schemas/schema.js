import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import icon_category from './icon_category';
import icons from './icons';
import typography from './typography';
import content from './content'


export default createSchema({
  name: 'genesis',
  types: schemaTypes.concat([
    icon_category,
    icons,
    typography,
    content
  ]),
})
