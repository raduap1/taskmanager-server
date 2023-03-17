const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
}).promise()


console.log(process.env)
async function getTasks () {
    const [result] = await pool.query("SELECT * FROM task")
    console.log(result)
}


getTasks()