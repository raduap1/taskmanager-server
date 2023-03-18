const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
}).promise()

async function getTasks() {
    const [rows] = await pool.query("SELECT * FROM task")
    return rows
}

async function getTask(id) {
    const [rows] = await pool.query(`SELECT * FROM task WHERE ID=?}`, [id])
    return rows[0]
}

async function createTask(title, description, type) {
    const result = await pool.query(`INSERT INTO task(TITLE, DESCRIPTION, TYPE) VALUES (?,?,?)`, [title, description, type])
    return result
}

module.exports = {getTasks, getTask, createTask}
