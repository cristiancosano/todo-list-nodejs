# To Do List

This is a simple test application. Create, list, update and remove multiple tasks from a JSON file with nodejs.

#### Init

To start the project run `npm install`, to resolve the dependencies

#### Examples

`$ node app list -c true` -> List tasks with status = true

`$ node app create -d "description" -c true` -> Create a completed task

`$ node app update -d "description" -c false` -> Update a task to not completed

`$ node app remove -d "description"` -> Remove the task with description = "description"
