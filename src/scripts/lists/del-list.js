import { buildListBack, buildTaskBack, getItemsIncluding } from "../storage"

export default function deleteList(listObj, listContainer, tasksSection) {
  const listId = listObj.getId()
  deleteTasksInList(listId)
  deleteListFromStorage(listId)
  deleteListFromDom(listId, listContainer)
  tasksSection.innerHTML = ''
}

const deleteTasksInList = (listId) => {
  const storedTasks = getItemsIncluding('task')
  const listTasks = storedTasks.filter(task => buildTaskBack(task).getListId() === listId)
  listTasks.forEach(task => localStorage.removeItem(task))
}

const deleteListFromStorage = (listId) => {
  const storedListsKeys = getItemsIncluding('list')
  const storedListToDelete = storedListsKeys.find(key => buildListBack(key).getId() === listId)
  localStorage.removeItem(storedListToDelete)
}

const deleteListFromDom = (listId, listContainer) => {
  const listButtonId = `list-button-${listId}`
  const listButton = document.getElementById(listButtonId)
  listContainer.removeChild(listButton)
}
