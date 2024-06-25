import { format } from "date-fns";
import '../../styles/items-box.css'
import flagIcon from '../../images/Icons/flag.svg'
import createToDoItem from '../items/to-do-item'
import expandItem from "./expand-item";

export function createItemEl(item) {
  const itemLeftDiv = document.createElement('div')
  itemLeftDiv.className = 'item-left-div'

  const itemEl = document.createElement('div')
  itemEl.className = 'todo-item'
  const itemId = item.getTitle().toLowerCase()
  itemEl.id = itemId

  const itemTitleEl = document.createElement('p')
  itemTitleEl.innerHTML = item.getTitle()
  itemTitleEl.className = 'item-title'

  const itemDueDateEl = document.createElement('p')
  itemDueDateEl.className = 'item-due-date'
  const formattedDate = format(item.getDueDate(), 'dd MMM y')
  itemDueDateEl.innerHTML = `Due Date: ${formattedDate}`

  const statusBox = createCheckBox(item)
  const priorityFlag = createPriorityFlag(item)
  const expandButton = createItemExpandButton(item)

  itemLeftDiv.append(priorityFlag, statusBox, itemTitleEl, itemDueDateEl)

  itemEl.append(itemLeftDiv, expandButton)
  return itemEl
}

const createPriorityFlag = (item) => {
  const priorityEl = document.createElement('img')
  priorityEl.src = flagIcon
  priorityEl.className = 'priority-icon'
  setPriorityElColor(item, priorityEl)
  return priorityEl
}

const setPriorityElColor = (item, priorityEl) => {
  priorityEl.classList.add(item.getPriority())
}

function createItemExpandButton(itemObj) {
  const itemExpandButton = document.createElement('button')
  itemExpandButton.innerHTML = 'View'
  itemExpandButton.className = 'expand-item-button'
  itemExpandButton.addEventListener('click', function() {
    const itemEl = this.parentElement
    expandItem(itemObj, itemEl)
  })
  return itemExpandButton
}

function createCheckBox(item) {
  const checkBox = document.createElement('input')
  checkBox.type = 'checkbox'
  return checkBox
}

// Given a list object create a container with all the items in the list
export function displayItems(listObj) {
  const toDoItemsBox = document.createElement('div')
  toDoItemsBox.className = 'items-box'
  const toDoItems = listObj.getToDos()
  toDoItems.forEach((item, index) => {
    const myItem = createItemEl(item)
    myItem.id = `item-${index}`
    toDoItemsBox.append(myItem)
  })

  return toDoItemsBox
}

export function createAddTaskSection(itemsBox, listObj) {
  const addTaskBox = document.createElement('div')
  addTaskBox.className = 'new-task-box'
  const inputEl = createNewTaskInput()
  const buttonEl = createAddTaskButton(inputEl, itemsBox, listObj)
  addTaskBox.append(inputEl, buttonEl)
  return addTaskBox
}

const createNewTaskInput = () => {
  const newTaskInput = document.createElement('input')
  newTaskInput.placeholder = `+ Add Task...`
  newTaskInput.addEventListener('focus', () => {
    // const addTaskButton = document.getElementById('add-task-button')
  })
  return newTaskInput
}

const createAddTaskButton = (inputEl, itemsBox, listObj) => {
  const addTaskButton = document.createElement('button')
  addTaskButton.id = 'add-task-button'
  addTaskButton.innerHTML = '➕'
  addTaskButton.addEventListener('click', () => {
    const myFreshTask = createToDoItem()
    if (inputEl.value) { myFreshTask.setTitle(inputEl.value) }
    const myFreshItemEl = createItemEl(myFreshTask)
    const freshIndex = listObj.getToDos().length
    console.log(listObj)
    myFreshItemEl.id = `item-${freshIndex}`
    itemsBox.append(myFreshItemEl)
    listObj.addToDo(myFreshTask)
    inputEl.value = ''
  })
  return addTaskButton
}

// const addTask = (inputEl, itemsBox, listObj)

