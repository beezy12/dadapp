
const express = require('express');
const app = express();
const mysql = require('mysql');

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('yooooo')
});


app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

/*
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dbuser',
  password : 's3kreee7',
  database : 'my_db'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
*/
