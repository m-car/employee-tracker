const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  // Your username
  user: 'root',
  // Your password
  password: 'password',
  database: 'employee_db',
});

module.exports = connection;
