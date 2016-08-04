'use strict'

const Hapi = require('hapi')
const ConnectionPool = require('tedious-connection-pool')
const config = require('config');

const poolConfig = {
  min: 1,
  max: 10
}

const dbConfig = config.get('sims.dbConfig');

console.log(dbConfig)

const pool = new ConnectionPool(poolConfig, dbConfig)

pool.on('error', (err) => { console.error(err) })

const server = new Hapi.Server()
server.connection({ port: 3000 })

server.bind( {pool: pool} )
server.route(require('./routes'))

server.start( () => {
  console.log('Server started. Listening at ', server.info.uri )
})