// mysql library to connect to the mysql database

const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: 'den1.mysql6.gear.host',
        user: 'bendb2',
        password: 'Wk170EB_nH?V',
        database: 'bendb2'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()



module.exports = instance;