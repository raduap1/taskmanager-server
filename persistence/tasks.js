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
    if (!task) {
        throw new Error('Invalid task id');
    }
    return task
}

async function updateTaskStatus(id, newStatus) {
    const [affectedRows] = await Task.update({ status: newStatus }, {
        where: {
            id: id
        }
    })
    if (affectedRows < 1) {
        throw new Error('Invalid task id or task status was not changed');
    }
}

module.exports = { getTasks, getTask, updateTaskStatus }
