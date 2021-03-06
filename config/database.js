'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
  connection: Env.get('DB_CONNECTION', 'pg'),
  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', '5555'),
      user: Env.get('DB_USER', 'postgres'),
      password: Env.get('DB_PASSWORD', 'postgres'),
      database: Env.get('DB_DATABASE', 'tybaback')
    }
  }
}
