import { format } from "date-fns";
import createToDoItem from '../items/to-do-item'

export function createItemEl(item) {
  const itemEl = document.createElement('div')
  itemEl.className = 'todo-item'
  const itemTitleEl = document.createElement('h2')
  itemTitleEl.innerHTML = item.getTitle()
  const itemDueDateEl = document.createElement('p')
  const formattedDate = format(item.getDueDate(), 'dd MMM y')
  itemDueDateEl.innerHTML = `Due Date: ${formattedDate}`

  itemEl.append(itemTitleEl, itemDueDateEl)
  return itemEl
}

// Given a list object create a container with all the items in the list
export function displayItems(listObj) {
  const toDoItemsBox = document.createElement('div')
  toDoItemsBox.className = 'items-box'
  const toDoItems = listObj.getToDos()
  toDoItems.forEach((item) => {
    toDoItemsBox.append(createItemEl(item))
  })

  return toDoItemsBox
}

export function createAddTaskSection(itemsBox, listObj) {
  const addTaskBox = document.createElement('div')
  addTaskBox.className = 'new-task-box'
  const newTaskInput = document.createElement('input')
  newTaskInput.placeholder = 'Add Task...'
  const newTaskButton = document.createElement('button')
  newTaskButton.innerHTML = '+'
  newTaskButton.addEventListener('click', () => {
    const myFreshTask = createToDoItem()
    if (newTaskInput.value) { myFreshTask.setTitle(newTaskInput.value) }
    listObj.addToDo(myFreshTask)
    itemsBox.append(createItemEl(myFreshTask))
  })
  addTaskBox.append(newTaskInput, newTaskButton)
  return addTaskBox
}


