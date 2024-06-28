import { format } from "date-fns";
import '../../styles/tasks-box.css'
import expandTask from "./expand-task";
import { createTaskPriorityFlag } from "./priority";
import { createDivCI, createParagraphTCI} from "../dom-stuff/create-basic-elements";

export function createTaskEl(task) {
  const taskEl = createDivCI('task')
  const taskInfoSectionEl = createTaskInfoSection(task)
  const expandButton = createTaskExpandButton(task)
  taskEl.append(taskInfoSectionEl, expandButton)
  return taskEl
}

const createTaskInfoSection = (task) => {
  const taskInfoSection = createDivCI('task-info-section')
  const priorityFlag = createTaskPriorityFlag(task)
  const statusBox = createCheckBox(task, taskInfoSection)
  const taskTitleEl = createParagraphTCI(task.getTitle(), 'task-title')
  const taskDueDateEl = createParagraphTCI(getTaskFormattedDate(task), 'task-due-date')
  taskInfoSection.append(priorityFlag, statusBox, taskTitleEl, taskDueDateEl)
  return taskInfoSection
}

const getTaskFormattedDate = (task) => {
  const formattedDate = format(task.getDueDate(), 'dd MMM y')
  const taskFormattedDate = `Due Date: ${formattedDate}`
  return taskFormattedDate
}

const createTaskExpandButton = (taskObj) => {
  const taskExpandButton = document.createElement('button')
  taskExpandButton.innerHTML = 'View'
  taskExpandButton.className = 'expand-task-button'
  taskExpandButton.addEventListener('click', function() {
    const taskEl = this.parentElement
    expandTask(taskObj, taskEl)
  })
  return taskExpandButton
}

const createCheckBox = (task, taskInfoSection) => {
  const checkBox = document.createElement('input')
  const taskStatus =  task.getStatus()
  displayStatus(checkBox, taskStatus, taskInfoSection)
  checkBox.addEventListener('click', () => {
    updateTaskStatus(task, checkBox)
  })
  checkBox.type = 'checkbox'
  return checkBox
}

const updateTaskStatus = (task, box) => {
  if (box.checked) {
    task.setStatus('done')
    box.parentElement.classList.add('strike')
  } else {
    task.setStatus('not-started')
    box.parentElement.classList.remove('strike')
  }

}

function displayStatus(box, status, taskInfoSection) {
  if (status === 'not-started') { box.checked = false }
  if (status === 'done') {
    box.checked = true
    taskInfoSection.classList.add('strike')
  }
}

// Given a list object create a container with all the tasks in the list
export function displayTasks(listObj) {
  const toDoTasksBox = document.createElement('div')
  toDoTasksBox.className = 'tasks-box'
  const toDoTasks = listObj.getTasks()
  toDoTasks.forEach((task, index) => {
    const myTask = createTaskEl(task)
    myTask.id = `task-${index}`
    if (!task.getDeleted()) { toDoTasksBox.append(myTask) }
  })

  return toDoTasksBox
}
