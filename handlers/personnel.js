'use strict'

const Request = require('tedious').Request
const TYPES = require('tedious').TYPES

exports.find = function (request, reply) {

  this.pool.acquire( (err, dbConnection) => {

  const sql = 'select id, lastname, firstname, middlename, suffixname  from personnel'

    const dbRequest = new Request(sql, (err, rowCount) => {
      if(err) {
        console.log(err)
        return
      }
    })

    let results = []

    dbRequest.on('row',  (row)  => {
      results.push( buildFromRow(row) )
    })

    dbRequest.on('doneProc', () => {
      dbConnection.release()
      reply(results)
    })

    dbConnection.execSql(dbRequest)
  })
}

exports.findOne = function (request, reply) {

  this.pool.acquire( (err, dbConnection) => {

    const sql = 'select id, lastname, firstname, middlename, suffixname from personnel where id = @id'

    const dbRequest = new Request(sql, (err, rowCount) => {
      if(err) {
        console.log(err)
        return
      }
    })

    dbRequest.addParameter('id', TYPES.VarChar, request.params.id )

    let results = {}

    dbRequest.on('row',  (row)  => {
      results = buildFromRow(row)
    })

    dbRequest.on('doneProc', () => {
      dbConnection.release()
      reply(results)
    })

    dbConnection.execSql(dbRequest)
  })
}

exports.findSpecialAccesses = function (request, reply) {

  this.pool.acquire( (err, dbConnection) => {

    const sql = 'select saname'
      + ' from personnelsas inner join sa on personnelsas.sa_id = sa.id'
      + ' where personnel_id = @id'
      + ' and (sa_brief_date is not null)'
      + ' and (sa_debrief_date is null)'
      + ' and (denydate is null)'

    const dbRequest = new Request(sql, (err, rowCount) => {
      if(err) {
        console.log(err)
        return
      }
    })

    dbRequest.addParameter('id', TYPES.VarChar, request.params.id)

    let results = []

    dbRequest.on('row',  (row)  => {
      results.push( row.saname.value )
    })

    dbRequest.on('doneProc', () => {
      dbConnection.release()
      reply(results)
    })

    dbConnection.execSql(dbRequest)
  })
}

const buildFromRow = (row) => {
  let obj = {}

  for (let columnName in row) {
    obj[columnName] = row[columnName].value
  }

  return obj
}