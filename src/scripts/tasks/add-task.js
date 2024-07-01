import '../../styles/add-task.css'
import createTask from "./task"
import { createInputTIPV, createDivCI, createButtonCIT} from "../dom-stuff/create-basic-elements"
import { createTaskEl } from "./task-utils"
import { getItemsIncluding, storeTask }from '../storage'

export function createAddTaskSection(tasksBox, listObj) {
  const addTaskBox = createDivCI('new-task-box')
  const inputEl = createInputTIPV('text', undefined, '+ Add Task...')
  const buttonEl = createAddTaskButton(inputEl, tasksBox, listObj)
  addTaskBox.append(inputEl, buttonEl)
  return addTaskBox
}

const createAddTaskButton = (inputEl, tasksBox, listObj) => {
  const addTaskButton = createButtonCIT(undefined, 'add-task-button', '➕')
  addTaskButton.addEventListener('click', () => {
    const freshTaskObj = createTaskObj(listObj, inputEl)
    const freshTaskEl = createFreshTaskEl(freshTaskObj, listObj)
    tasksBox.append(freshTaskEl)
    inputEl.value = ''
  })
  return addTaskButton
}

const createTaskObj = (listObj, inputEl) => {
  const myTaskObj = createTask()
  myTaskObj.setListId(listObj.getId())
  myTaskObj.setTitle(inputEl.value)
  listObj.addTask(myTaskObj)
  storeTask(myTaskObj)
  return myTaskObj
}

const createFreshTaskEl = (taskObj, listObj) => {
  const freshTaskEl = createTaskEl(taskObj)
  const taskId = listObj.getTasks().length
  freshTaskEl.id = `task-${taskId}`
  return freshTaskEl
}
