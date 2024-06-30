import { createDivCI, createInputTIPV, createButtonCIT, createTitleST } from "../dom-stuff/create-basic-elements"
import { displayTasks } from "../tasks/task-utils"
import { createAddTaskSection } from "../tasks/add-task"
import createTaskList from "./task-lists"
import { buildListBack, getItemsIncluding, storeList } from "../storage"

export default function createAddListSection(listSection) {
  const addListBox = createDivCI('new-list-box')
  const input = createInputTIPV('text', undefined, '+ Add List...')
  const addListBtn = createButtonCIT(undefined, 'add-list-addListBtn', '+')
  addListBtn.addEventListener('click', () => addListBtnFunctionality(listSection, input))
  addListBox.append(input, addListBtn)
  return addListBox
}

const addListBtnFunctionality = (listSection, input) => {
  const numList = getItemsIncluding('list').length
  const myFreshList = createTaskList(numList, input.value)
  storeList(myFreshList)
  listSection.append(createListButton(myFreshList))
  input.value = ''
}

export function createListButton(listObj) {
  const listContainer = createDivCI('list-container')
  const listButton = createButtonCIT('list-button', `list-button-${listObj.getId()}`, listObj.getTitle())
  listButton.addEventListener('click', () => generateTasksSection(listObj, listContainer))
  listContainer.append(listButton)
  return listContainer
}

function generateTasksSection(listObj, listContainer) {
  const tasksSection = document.querySelector('.tasks-section')
  const tasksTitle = createTitleST('h1', listObj.getTitle())
  const myTasksBox = displayTasks(listObj)
  const addTaskSection = createAddTaskSection(myTasksBox, listObj)
  const deleteListButton = createButtonCIT(undefined, 'delete-list', '🗑 Delete List')
  deleteListButton.addEventListener('click', () => deleteList(listObj, listContainer) )
  tasksSection.innerHTML = ''
  tasksSection.append(tasksTitle, addTaskSection, myTasksBox, deleteListButton)
}

function deleteList(listObj, listContainer) {
  const storedListsKeys = getItemsIncluding('list')
  const storedListToDelete = storedListsKeys.find(key => buildListBack(key).getId() === listObj.getId())
  localStorage.removeItem(storedListToDelete)
  const buttonIdToDel = `list-button-${listObj.getId()}`
  const buttonToDelete = document.getElementById(buttonIdToDel)
  listContainer.removeChild(buttonToDelete)
}

const deleteTasksInList = () => {

}

