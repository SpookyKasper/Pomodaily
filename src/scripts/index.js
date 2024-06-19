import '../styles/index.css'
import createToDoItem from './to-do-item.js';
import createToDoList from './lists/to-do-lists.js'
import { populatedListContainer } from './lists/dom-utils.js';


const myToDo = createToDoItem()
const myList = createToDoList('Build To-Do App')
myList.addToDo(myToDo)
const myLists = [myList]

document.body.append(populatedListContainer(myLists))


