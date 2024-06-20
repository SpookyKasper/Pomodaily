
import '../styles/index.css'
import createToDoItem from './items/to-do-item.js';
import createToDoList from './lists/to-do-lists.js'
import listNav, { listNavigation } from './lists/list-navigation.js';


const basicLists = ['Personal', 'Work', 'Study', 'Shopping']
const myToDo = createToDoItem()
const myFirstList = createToDoList('Wishlist')
myFirstList.addToDo(myToDo)
const myLists = [myFirstList]
basicLists.forEach(listName => myLists.push(createToDoList(listName)))


const navEl = document.querySelector('nav')
navEl.append(listNav(myLists))


