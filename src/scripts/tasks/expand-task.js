import '../../styles/expand.css'
import { format } from "date-fns";
import _ from 'lodash'
import { createPriorityButtonsBox } from '..//tasks/priority.js'
import { createButtonCIT, createDivCI, createInputTIPV } from '../dom-stuff/create-basic-elements'
import { buildTaskBack, getItemsIncluding, storeTask } from '../storage.js';

export default function expandTask(taskObj, taskEl) {
  const expandSection = document.querySelector('.expand-section')
  const expandedTask = createExpandedTaskEl(taskObj, taskEl)
  expandSection.innerHTML = ''
  expandSection.append(expandedTask)
}

const createExpandedTaskEl = (taskObj, taskEl) => {
  const expandedTaskContainer = createDivCI('expanded-task-container')
  const taskTitleInput = createInputTIPV(undefined, 'title-input', 'Title', taskObj.getTitle())
  const dueDateInputValue = format(taskObj.getDueDate(), 'yyyy-MM-dd')
  const taskDueDateInput = createInputTIPV('date', 'due-date-input', undefined, dueDateInputValue)
  const taskDescriptionInput = createInputTIPV('textarea', 'description-input', 'Add Description', taskObj.getDescription())
  const priorityButtonsBox = createPriorityButtonsBox(taskObj, taskEl)
  const deleteTaskBtn = createDeleteTaskButton(taskObj, taskEl)
  const confirmBtn = createButtonCIT(undefined, 'confirm-btn', 'Confirm')
  confirmBtn.addEventListener('click', () => {
    expandedTaskContainer.innerHTML = ''
    updateTaskObj(taskObj, taskTitleInput, taskDueDateInput, taskDescriptionInput)
    updateTaskEl(taskEl, taskObj)
  })

  expandedTaskContainer.append(taskTitleInput, taskDueDateInput, taskDescriptionInput, priorityButtonsBox, confirmBtn, deleteTaskBtn)

  return expandedTaskContainer
}

const createDeleteTaskButton = (task, taskEl) => {
  const deleteTaskBtn = createButtonCIT(undefined, 'delete-task-btn', '🗑 Delete')
  deleteTaskBtn.addEventListener('click', () => {
    taskEl.remove()
    deleteStoredTask(task)
  })
  return deleteTaskBtn
}

const deleteStoredTask = (taskObj) => {
  const storedTasks = getItemsIncluding('task')
  const taskToDel = storedTasks.find(task => buildTaskBack(task).getId() === taskObj.getId())
  localStorage.removeItem(taskToDel)
}

const updateTaskObj = (taskObj, titleInput, dueDateInput, descriptionInput) => {
  taskObj.setTitle(titleInput.value)
  taskObj.setDueDate(dueDateInput.value)
  taskObj.setDescription(descriptionInput.value)
}

const updateTaskEl = (taskEl, taskObj) => {
  const titleEl = taskEl.querySelector('.task-title')
  console.log(titleEl)
  titleEl.innerHTML = taskObj.getTitle()
  const dueDateEl = taskEl.querySelector('.task-due-date')
  const formattedDate = format(taskObj.getDueDate(), 'dd MMM y')
  dueDateEl.innerHTML = `Due Date: ${formattedDate}`
}
