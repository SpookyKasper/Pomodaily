import toDoItem from './to-do-item.js';
import toDoList from './to-do-lists.js'

const myToDoItem = toDoItem('Create Basic Logic')
const myList = toDoList('Build To-Do App')
myList.addToDo(myToDoItem)

myList.getToDos().forEach(toDo => {
  console.log(toDo.itemTitle)
  console.log(toDo.itemDueDate)
});
