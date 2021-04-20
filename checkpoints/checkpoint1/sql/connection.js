const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: 'den1.mysql1.gear.host',
        user: 'checkpoint1ben',
        password: 'Ir1JX3Xs99_!',
        database: 'checkpoint1ben'
      })

      return this.pool
    }

    return this.pool
  }

}

const instance = new Connection()



module.exports = instance;