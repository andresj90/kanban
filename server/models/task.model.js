module.exports = mongoose => {
    const Task = mongoose.model(
        'task',
        mongoose.Schema(TaskSchema, { timestamps: true })
    )
    return Task;
}

const TaskSchema = {
    name: {
        type: 'string',
        require: true
    },
    description: {
        type: 'string',
        require: true
    },
    expectedClosingTime: {
        type: 'string',
        require: true,
        enum: ['admin', 'agent', 'visitor']
    },
    closedTime: {
        type: 'string',
        require: true
    },
    category: {
        type: 'string',
        require: true
    },
    createdBy: {
        type: 'string',
        require: true
    },
    owner: {
        type: 'string',
        require: true
    }
}