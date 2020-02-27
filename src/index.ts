import express from 'express'
import { setupApolloServer } from './api'
import { config } from './config'
import { $log } from './lib/$log'

const app = express()
setupApolloServer(app, config.GRAPHQL_PATH)

app.get('/', (req, res) => res.json({ message: 'Hello, World!' }))

app.listen(config.port, () => {
  const url = `http:localhost:${config.PORT}`
  $log.info(`🚀  Server ready at ${url}`)
})
