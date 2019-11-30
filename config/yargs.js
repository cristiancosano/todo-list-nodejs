const opt = {
    list:{
        complete:{
            alias: 'c',
            desc: "Filter to-do list by the status"
        }
    },
    create:{
        description:{
            demand: true,
            alias:'d',
            desc: "Description of task to create"
        }
    },
    update:{
        description:{
            demand: true,
            alias:'d',
            desc: "Description of task to update"
        },
        complete:{
            default: true,
            alias:'c', 
            desc: "Check if the task is pending or completed"
        }
    },
    remove:{
        description:{
            demand: true,
            alias:'d',
            desc: "Description of task to remove"
        }
    },

}
const argv = require('yargs')
                .command('list', 'List all tasks', opt.list)
                .command('create', 'Create new task', opt.create)
                .command('update', 'Update task', opt.update)
                .command('remove', 'Remove task', opt.remove)
                .help()
                .argv

module.exports = {
    argv
}
