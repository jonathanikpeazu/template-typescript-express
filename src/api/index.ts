import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import { Express } from 'express'
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'
import { schema } from './schema'

let apolloServer: ApolloServer = null
export function setupApolloServer(app: Express, path): void {
  if (!apolloServer) {
    const graphQLSchema = makeExecutableSchema({
      typeDefs,
      resolvers,
    })

    apolloServer = new ApolloServer({ schema })
    apolloServer.applyMiddleware({ app, path })
  }
}
