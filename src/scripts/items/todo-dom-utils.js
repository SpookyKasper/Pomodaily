import { format } from "date-fns";
import '../../styles/items-box.css'
import createToDoItem from '../items/to-do-item'
import { createItemPriorityFlag } from "./priority";

import expandItem from "./expand-item";
import { createInputTIPV } from "../dom-stuff/create-basic-elements";

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

  const statusBox = createCheckBox(item, itemLeftDiv)
  const priorityFlag = createItemPriorityFlag(item)
  const expandButton = createItemExpandButton(item)

  itemLeftDiv.append(priorityFlag, statusBox, itemTitleEl, itemDueDateEl)

  itemEl.append(itemLeftDiv, expandButton)
  return itemEl
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

function createCheckBox(item, itemLeftDiv) {
  const checkBox = document.createElement('input')
  const itemStatus =  item.getStatus()
  displayStatus(checkBox, itemStatus, itemLeftDiv)
  checkBox.addEventListener('click', () => {
    updateItemStatus(item, checkBox)
  })
  checkBox.type = 'checkbox'
  return checkBox
}

function updateItemStatus(item, box) {
  if (box.checked) {
    item.setStatus('done')
    box.parentElement.classList.add('strike')
  } else {
    item.setStatus('not-started')
    box.parentElement.classList.remove('strike')
  }

}

function displayStatus(box, status, itemLeftDiv) {
  if (status === 'not-started') { box.checked = false }
  if (status === 'done') {
    box.checked = true
    itemLeftDiv.classList.add('strike')
  }
}

// Given a list object create a container with all the items in the list
export function displayItems(listObj) {
  const toDoItemsBox = document.createElement('div')
  toDoItemsBox.className = 'items-box'
  const toDoItems = listObj.getToDos()
  toDoItems.forEach((item, index) => {
    const myItem = createItemEl(item)
    myItem.id = `item-${index}`
    if (!item.getDeleted()) { toDoItemsBox.append(myItem) }
  })

  return toDoItemsBox
}

export function createAddTaskSection(itemsBox, listObj) {
  const addTaskBox = document.createElement('div')
  addTaskBox.className = 'new-task-box'
  const inputEl = createInputTIPV('text', undefined, '+ Add Task...')
  const buttonEl = createAddTaskButton(inputEl, itemsBox, listObj)
  addTaskBox.append(inputEl, buttonEl)
  return addTaskBox
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
    myFreshItemEl.id = `item-${freshIndex}`
    itemsBox.append(myFreshItemEl)
    listObj.addToDo(myFreshTask)
    inputEl.value = ''
  })
  return addTaskButton
}

// const addTask = (inputEl, itemsBox, listObj)

