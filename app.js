const { argv } = require('./config/yargs')
const color = require('colors')
const todo = require('./to-do/to-do')

let command = argv._[0];

switch (command) {
    case 'list':
        todo.list(argv.complete);
        break;

    case 'create':
        let task = todo.create(argv.description);
        if(task == undefined) console.log("Error creating task".red);
        break;

    case 'update':
        let status_update = todo.update(argv.description, argv.complete);
        if(!status_update) console.log('Error updating task'.red)
        break;

    case 'remove': 
        let status_remove = todo.remove(argv.description);
        if(!status_remove) console.log('Error removing task'.red);
        break;

    default:
        console.log('The command does not exists'.red)
        break;
}