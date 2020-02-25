import express from 'express'

import { config } from './config'
import { $log } from './lib/$log'

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' })
})

app.listen(config.port, () => {
  // tslint:disable-next-line:no-console
  $log.info(`server started at http://localhost:${config.port}`)
})
