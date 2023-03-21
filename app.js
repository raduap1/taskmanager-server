const express = require('express')
const cors = require('cors')
const tasksRoute = require('./routes/tasks')

const app = express()
app.use(cors(corsOptions = {
  origin: 'http://localhost:3000'
}))

app.use('/tasks', tasksRoute)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(4000, () => {
  console.log('Server running on port 4000')
})