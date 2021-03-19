import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import icon_category from './icon_category';
import icons from './icons';
import typography from './typography';
import content from './content'
import content_category from './content_category'
import coverage from './coverage'

export default createSchema({
  name: 'genesis',
  types: schemaTypes.concat([
    icon_category,
    icons,
    typography,
    content,
    content_category,
    coverage
  ]),
})
