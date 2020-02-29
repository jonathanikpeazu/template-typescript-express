import { GraphQLDateTime } from 'graphql-iso-date'
import { GraphQL } from '../graphql'
import { Book } from '../../models'

const queryResolvers: GraphQL.QueryResolvers = {
  books: async () => {
    const results = await Book.query()
    return results
  },
}

export const resolvers = [
  {
    Query: queryResolvers,
  },
  {
    ISODateTime: GraphQLDateTime,
  },
]
