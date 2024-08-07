
import '../styles/index.css'
import createTask from './tasks/task.js';
import createTaskList from './lists/task-lists.js';
import listNav from './lists/list-navigation.js';
import { sortStoredItems, buildListBack, buildTaskBack, storeList, getItemsIncluding, storeTask } from './storage.js'


const basicListNames = ['To-Do-List', 'Personal', 'Work', 'Study', 'Shopping']
const basicTaskNames = ['Call Mom', 'Play Guitar', 'Go Groceries']
const myLists = []
const myTasks = []

// Add basic lists
basicListNames.forEach((listName) => {
  const myNewList = createTaskList(listName)
  storeList(myNewList)
})

// Add saved lists
const savedLists = getItemsIncluding('list')
const sortedLists = sortStoredItems(savedLists)
sortedLists.forEach(listKey => {
  const retrievedList = buildListBack(listKey)
  myLists.push(retrievedList)
})

// Create initial tasks
basicTaskNames.forEach((taskName, idx) => {
  const myTask = createTask()
  myTask.setListId(idx)
  myTask.setTitle(taskName)
  storeTask(myTask)
})

// Add initial tasks to their respective lists
myTasks.forEach(task => {
  const motherList = myLists.find(list => list.getId() === task.getListId())
  motherList.addTask(task)
})

// Add stored tasks
const storedTasks = getItemsIncluding('task').sort()
const sortedTasks = sortStoredItems(storedTasks)
 sortedTasks.forEach((key) => {
  const mySavedTask = buildTaskBack(key)
  const taskListIdx = mySavedTask.getListId()
  myLists[taskListIdx].addTask(mySavedTask)
 })

// Append it all to the dom
myLists.forEach(list => console.log(list.getId()))
const navEl = document.querySelector('nav')
navEl.append(listNav(myLists))
const listButtons = document.querySelector('.list-container')
listButtons.firstChild.click()


