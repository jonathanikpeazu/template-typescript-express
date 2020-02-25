import bunyan from 'bunyan'

export const $log = bunyan.createLogger({ name: 'core' })

export function getLogger(name): bunyan.Logger {
  return bunyan.createLogger({ name })
}
