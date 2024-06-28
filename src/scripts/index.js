
import '../styles/index.css'
import createTask from './tasks/task.js';
import createTaskList from './lists/task-lists.js';
import listNav from './lists/list-navigation.js';
import { loadTask } from './storage.js'



const basicLists = ['To-Do-List', 'Personal', 'Work', 'Study', 'Shopping']
const basicTasks = ['Call Mom', 'Play Guitar', 'Go Groceries']
const myLists = []

basicLists.forEach(listName => myLists.push(createTaskList(listName)))
basicTasks.forEach(task => myLists[0].addTask(createTask(task)))
const savedTaskObj = loadTask(2)
const mySavedtask = createTask(savedTaskObj.title, savedTaskObj.description)
myLists[0].addTask(mySavedtask)

const navEl = document.querySelector('nav')
navEl.append(listNav(myLists))
const listButtons = document.querySelector('.list-container')
listButtons.firstChild.click()


