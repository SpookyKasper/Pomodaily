
import '../styles/index.css'
import createTask from './tasks/task.js';
import createTaskList from './lists/task-lists.js';
import listNav from './lists/list-navigation.js';
import { buildListBack, buildTaskBack, storeList, getItemsIncluding } from './storage.js'


const basicListNames = ['To-Do-List', 'Personal', 'Work', 'Study', 'Shopping']
const basicTaskNames = ['Call Mom', 'Play Guitar', 'Go Groceries']
const myLists = []
const myTasks = []

// Add basic lists
basicListNames.forEach((listName, idx) => {
  const myNewList = createTaskList(idx, listName)
  storeList(myNewList)
})

// Add saved lists
const savedLists = getItemsIncluding('list').sort()
savedLists.forEach(listKey => myLists.push(buildListBack(listKey)))

// Add initial tasks
basicTaskNames.forEach((taskName, idx) => myTasks.push(createTask(idx, taskName)))
myTasks.forEach(task => {
  const motherList = myLists.find(list => list.getId() === task.getListId())
  motherList.addTask(task)
})

// Add stored tasks
const storedTasks = getItemsIncluding('task').sort()
 storedTasks.forEach((key) => {
  const mySavedTask = buildTaskBack(key)
  const taskListIdx = mySavedTask.getListId()
  myLists[taskListIdx].addTask(mySavedTask)
 })

// Append it all to the dom
const navEl = document.querySelector('nav')
navEl.append(listNav(myLists))
const listButtons = document.querySelector('.list-container')
listButtons.firstChild.click()


