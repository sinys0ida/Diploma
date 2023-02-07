// server.js

const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';

const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  password: '12345',
  port: 5432,
  database: 'monitoring',
  client_encoding: 'UTF8'
});

client.connect();

app.get('/data', (req, res) => {
  client.query('SELECT * FROM data', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving data from the database');
    } else {
      res.json(result.rows);
    }
  });
});



/*app.use(express.static(__dirname + '/index.html'));
*/
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  }); 

app.listen(port, function () {
  console.log(`Server running at http://${host}:${port}/`);
});


//app.listen(port, host, () => {
  //console.log(`Server running at http://${host}:${port}/`);
//});