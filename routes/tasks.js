const express = require('express')
const { getTasks, getTask, updateTaskStatus } = require('../persistence/tasks')

const router = express.Router();

router.get('/', async (req, res) => {
    const tasks = await getTasks()
    res.send(tasks)
})

router.get('/:id', async (req, res) => {
    const task = await getTask(req.params.id)
    res.send(task)
})

router.patch('/:id', async (req, res) => {
    await updateTaskStatus(req.params.id, req.body.status)
    res.status(200).end()
})

module.exports = router