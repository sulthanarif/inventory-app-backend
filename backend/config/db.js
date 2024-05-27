const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'UAS_Inventory_sys'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
//   console connect to database database name
  console.log('Connected to database : ' + connection.config.database);
});

module.exports = connection;