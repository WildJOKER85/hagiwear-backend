const mysql = require('mysql2/promise');

const pool = mysql.createPool({
   host: 'hagiwear.db',
   user: 'cohagi_hagiwear',
   password: 'Tagmoneyflow$',
   database: 'hagiwear',
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0,
});

module.exports = { pool };


