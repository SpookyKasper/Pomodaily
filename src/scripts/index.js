
import '../styles/index.css'
import createToDoItem from './items/to-do-item.js';
import createToDoList from './lists/to-do-lists.js'
import { homePage } from './lists/dom-utils.js';


const basicLists = ['Personal', 'Work', 'Study', 'Shopping']
const myToDo = createToDoItem()
const myFirstList = createToDoList('Wishlist')
const myLists = [myFirstList]
basicLists.forEach(listName => myLists.push(createToDoList(listName)))


const main = document.querySelector('main')
main.append(homePage(myLists))


