const fs = require('fs');
const color = require('colors');

let listToDo = [];

const saveDB = () => {
    let data = JSON.stringify(listToDo);
    //data = JSON.parse(listToDo)
    fs.writeFile('db/data.json', data, (err)=>{
        if(err) throw new Error('Error writing data', err);
    })
}

const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
    } 
    catch (error) {
        listToDo = [];
    }
}

const list = (status) => {
    loadDB();
    if(status==undefined){
        listToDo.forEach(element => {
            console.log('=========TO-DO========='.green)
            console.log(element.description);
            console.log('Status: ',element.completed);
            console.log('======================='.green)

        });
    }
    else{
        let newList = listToDo.filter(task => task.completed == (status == 'true') )
        newList.forEach(element => {
            console.log('=========TO-DO========='.green)
            console.log(element.description);
            console.log('Status: ',element.completed);
            console.log('======================='.green)
        });
    }
}

const create = description => {
    loadDB();
    let toDo = {
        description,
        completed: false
    }
    listToDo.push(toDo);
    saveDB();

    return toDo;
}

const update = (description, status) => {
    loadDB();

    let index = listToDo.findIndex(task => task.description == description)
    if(index >= 0){
        listToDo[index].completed = (status == true); // Use comparison to convert string to boolean
        saveDB();
        return true;
    }
    else{
        return false;
    }
}

const remove = (description) => {
    loadDB();

    let newList = listToDo.filter(task => task.description != description);
    
    if(newList.length == listToDo.length){
        return false; // No task removed
    }
    else{
        listToDo = newList;
        saveDB();
        return true;
    }
}

module.exports = {
    list,
    create,
    update,
    remove
}