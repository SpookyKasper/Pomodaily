import { createButtonCIT } from "../dom-stuff/create-basic-elements"
import { buildListBack, buildTaskBack, getItemsIncluding, retrieveObject } from "../storage"


export default function createDelListBtn(listObj, listContainer, tasksSection){
  const listId = listObj.getId()
  const deleteListButton = createButtonCIT(undefined, 'delete-list', '🗑 Delete List')
  deleteListButton.addEventListener('click', () => deleteList(listId, listContainer, tasksSection) )
  return deleteListButton
}

const deleteList = (listId, listContainer, tasksSection) => {
  deleteTasksInList(listId)
  deleteListFromStorage(listId)
  deleteListFromDom(listId, listContainer)
  tasksSection.innerHTML = ''
}

const deleteTasksInList = (listId) => {
  const storedTasks = getItemsIncluding('task')
  const listTasks = storedTasks.filter(task => retrieveObject(task).listId === listId)
  listTasks.forEach(task => localStorage.removeItem(task))
}


const deleteListFromStorage = (listId) => {
  const storedListsKeys = getItemsIncluding('list')
  const storedListToDelete = storedListsKeys.find(key => retrieveObject(key).id === listId)
  localStorage.removeItem(storedListToDelete)
}


const deleteListFromDom = (listId, listContainer) => {
  const listButtonId = `list-button-${listId}`
  const listButton = document.getElementById(listButtonId)
  listContainer.removeChild(listButton)
}
