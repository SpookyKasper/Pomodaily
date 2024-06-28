import createTask from "./tasks/task"

// localStorage.clear()
let storageIdx = localStorage.getItem('index')

export function storeTask(task) {
  const myPropertiesObj = task.getPropertiesObj()
  const taskString = JSON.stringify(myPropertiesObj)
  const startIdx = storageIdx || 0
  localStorage.setItem(`task-${startIdx}`, taskString)
  localStorage.setItem('index', storageIdx++)
}

function loadTask(key) {
  const myTaskString = localStorage.getItem(key)
  const taskObject = JSON.parse(myTaskString)
  return taskObject
}

export function buildTaskBack(taskKey) {
  const task = loadTask(taskKey)
  const myTask = createTask(task)
  myTask.setTitle(task.title)
  myTask.setDescription(task.description)
  myTask.setDueDate(task.dueDate)
  myTask.setPriority(task.priority)
  myTask.setStatus(task.status)
  myTask.setDeleted(task.deleted)

  return myTask
}


