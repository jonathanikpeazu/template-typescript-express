const _ = require('lodash')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const defaultConfig = require('./default')

const envConfigs = {
  development: require('./development'),
  test: require('./test'),
  production: require('./production'),
  staging: require('./staging'),
}

function getEnvConfig(nodeEnv = process.env.NODE_ENV) {
  if (_.isEmpty(nodeEnv)) {
    return {}
  }

  const envConfig = envConfigs[nodeEnv]
  if (!envConfig) {
    throw new Error(`Unable to locate configuration file: Invalid NODE_ENV: ${nodeEnv}`)
  }

  return envConfig
}

// Doing this in the weird mutative way so that we can get editor autocompletion.
let config = defaultConfig
const envConfig = _(getEnvConfig())
  .mapValues(v => (_.isUndefined(v) ? null : v))
  .defaultsDeep(config)
  .value()

config = envConfig

module.exports = { config }
