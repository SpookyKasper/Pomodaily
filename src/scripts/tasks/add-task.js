import { createInputTIPV, createDivCI, createButtonCIT} from "../dom-stuff/create-basic-elements"
import { createTaskEl } from "./task-utils"
import createTask from "./task"
import { storeTask }from '../storage'

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
    const freshTask = createTask(listObj.getId())
    if (inputEl.value) { freshTask.setTitle(inputEl.value) }
    const freshTaskEl = createTaskEl(freshTask)
    const taskId = listObj.getTasks().length
    freshTaskEl.id = `task-${taskId}`
    tasksBox.append(freshTaskEl)
    listObj.addTask(freshTask)
    storeTask(freshTask)
    inputEl.value = ''
  })
  return addTaskButton
}
