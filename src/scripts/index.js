import toDoItem from './toDo-item.js';

const myItem = toDoItem('peak')

console.log(myItem.getTitle())
myItem.setTitle('time')
console.log(myItem.getTitle())
