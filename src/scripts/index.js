
import '../styles/index.css'
import createTask from './tasks/task.js';
import createTaskList from './lists/task-lists.js';
import listNav from './lists/list-navigation.js';
import { buildTaskBack } from './storage.js'


const basicLists = ['To-Do-List', 'Personal', 'Work', 'Study', 'Shopping']
const basicTaskNames = ['Call Mom', 'Play Guitar', 'Go Groceries']
const myLists = []

basicLists.forEach((listName, idx) => myLists.push(createTaskList(listName, undefined, idx)))
const myTasks = []
basicTaskNames.forEach((taskName, idx) => myTasks.push(createTask(idx, taskName)))
myTasks.forEach(task => {
  const motherList = myLists.find(list => list.getId() === task.getListId())
  motherList.addTask(task)
})

const storedTasksNum = parseInt(localStorage.getItem('index')) + 1
for (let i = 0; i < storedTasksNum; i++) {
  const taskId = `task-${i}`
  console.log(taskId)
  const mySavedTask = buildTaskBack(taskId)
  myLists[0].addTask(mySavedTask)
}

const navEl = document.querySelector('nav')
navEl.append(listNav(myLists))
const listButtons = document.querySelector('.list-container')
listButtons.firstChild.click()


