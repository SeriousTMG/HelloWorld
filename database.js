const { Client } = require('pg')
const client = new Client()
client.connect()
client.query('select * from todolist', (err, res) => {
  console.log(err ? err.stack : res.rows[0]) // Hello World!
  client.end()
})