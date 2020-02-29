import { GraphQLDateTime } from 'graphql-iso-date'
import { GraphQL } from '../graphql'
import { Author, Book } from '../../models'

const queryResolvers: GraphQL.QueryResolvers = {
  books: async () => Book.query(),
  authors: async () => Author.query(),
}

const bookResolvers: GraphQL.BookResolvers = {
  author: async ({ id }) =>
    Author.query()
      .whereExists(Author.relatedQuery('books').findById(id))
      .first(),
}

const authorResolvers: GraphQL.AuthorResolvers = {
  books: async ({ id }) => Book.query().whereExists(Book.relatedQuery('author').findById(id)),
}

export const resolvers = [
  {
    Query: queryResolvers,
  },
  {
    Book: bookResolvers,
  },
  {
    Author: authorResolvers,
  },
  {
    ISODateTime: GraphQLDateTime,
  },
]
