import createTaskList from "./lists/task-lists"
import createTask from "./tasks/task"


// localStorage.clear()
export function retrieveObject(key) {
  const myListString = localStorage.getItem(key)
  const listObject = JSON.parse(myListString)
  return listObject
}


export function getItemsIncluding(subString) {
  const storageKeys = Object.keys(localStorage)
  const listCount = storageKeys.filter(el => el.includes(subString))
  return listCount
}

export function sortStoredItems(array) {
  const sortedItems = array.sort((a, b) => {
    const first = parseInt(a.split('-')[1])
    const second = parseInt(b.split('-')[1])
    return first - second
  })
  return sortedItems
}

export function storeList(list) {
  const listId = list.getId()
  const myListObj = list.getObj()
  const listString = JSON.stringify(myListObj)
  localStorage.setItem(`list-${listId}`, listString)
}

export function buildListBack(listKey) {
  const savedList = retrieveObject(listKey)
  const myList = createTaskList()
  myList.setTitle(savedList.title)
  myList.setId(savedList.id)
  return myList
}

export function storeTask(task) {
  const taskId = task.getId()
  const myPropertiesObj = task.getPropertiesObj()
  const taskString = JSON.stringify(myPropertiesObj)
  localStorage.setItem(`task-${taskId}`, taskString)
}

export function buildTaskBack(taskKey) {
  const task = retrieveObject(taskKey)
  const myTask = createTask()
  myTask.setListId(task.listId)
  myTask.setTitle(task.title)
  myTask.setDescription(task.description)
  myTask.setDueDate(task.dueDate)
  myTask.setPriority(task.priority)
  myTask.setStatus(task.status)
  myTask.setId(task.id)
  return myTask
}
