
import '../styles/index.css'
import createTask from './tasks/task.js';
import createTaskList from './lists/task-lists.js';
import listNav from './lists/list-navigation.js';


const basicLists = ['To-Do-List', 'Personal', 'Work', 'Study', 'Shopping']
const basicTasks = ['Call Mom', 'Play Guitar', 'Go Groceries']
const myLists = []

basicLists.forEach(listName => myLists.push(createTaskList(listName)))
basicTasks.forEach(task => myLists[0].addTask(createTask(task)))

const navEl = document.querySelector('nav')
navEl.append(listNav(myLists))
const listButtons = document.querySelector('.list-container')
listButtons.firstChild.click()


