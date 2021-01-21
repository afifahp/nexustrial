// api/schema.ts

import { makeSchema } from 'nexus'
import { join } from 'path'
import * as types from './graphql'

const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, '../nexus-typegen.ts'),
    schema: join(__dirname, '../schema.graphql')
  }
})

export default schema