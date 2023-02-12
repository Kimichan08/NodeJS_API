const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_test'
});

conn.connect((err)=>{
    if (err) {
        throw err
    }
    console.log('connect successfully')
})
module.exports = conn;