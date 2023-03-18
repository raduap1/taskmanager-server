const express = require('express')
const {getTasks, getTask, createTask} = require('./persistance/index')

const app = express()

app.get("/tasks", async (req, res) => {
  const tasks = await getTasks()
  res.send(tasks)
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen (4000, () => {
  console.log('Server running on port 4000')
})