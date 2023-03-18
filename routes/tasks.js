const express = require('express')
const { getTasks, getTask } = require('../persistence/index')

const router = express.Router();

router.get('/', async (req, res) => {
    const tasks = await getTasks()
    res.send(tasks)
})

router.get('/:id', async (req, res) => {
    const tasks = await getTask(req.params.id)
    res.send(tasks)
})

module.exports = router