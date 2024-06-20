
import '../styles/index.css'
import createToDoItem from './items/to-do-item.js';
import createToDoList from './lists/to-do-lists.js'
import listNav, { listNavigation } from './lists/list-navigation.js';


const basicLists = ['Personal', 'Work', 'Study', 'Shopping']
const basicToDos = ['Call Mom', 'Play Guitar', 'Go Groceries']
const myLists = []

basicLists.forEach(listName => myLists.push(createToDoList(listName)))
basicToDos.forEach(todo => myLists[0].addToDo(createToDoItem(todo)))



const navEl = document.querySelector('nav')
navEl.append(listNav(myLists))


