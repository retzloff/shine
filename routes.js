'use strict'

const Personnel = require('./handlers/personnel')

module.exports = [{
  method: 'GET',
  path: '/api/v1/personnel',
  handler: Personnel.find
},

{
  method: 'GET',
  path: '/api/v1/personnel/{id}',
  handler: Personnel.findOne
},

{
  method: 'GET',
  path: '/api/v1/personnel/{id}/specialaccesses',
  handler: Personnel.findSpecialAccesses
}]