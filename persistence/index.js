const Task = require('./model/Task')

async function getTasks() {
    const tasks = await Task.findAll();
    return tasks
}

async function getTask(id) {
    const task = await Task.findOne({
        where: {
            id: id
        }
    })
    return task
}

module.exports = { getTasks, getTask }
