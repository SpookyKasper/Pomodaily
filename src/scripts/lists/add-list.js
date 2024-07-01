import { createDivCI, createInputTIPV, createButtonCIT, createTitleST } from "../dom-stuff/create-basic-elements"
import { displayTasks } from "../tasks/task-utils"
import { createAddTaskSection } from "../tasks/add-task"
import createTaskList from "./task-lists"
import { getItemsIncluding, storeList } from "../storage"
import createDelListBtn from "./del-list"

export default function createAddListSection(listSection) {
  const addListBox = createDivCI('new-list-box')
  const input = createInputTIPV('text', undefined, '+ Add List...')
  const addListBtn = createButtonCIT(undefined, 'add-list-addListBtn', '+')
  addListBtn.addEventListener('click', () => addListBtnFunctionality(listSection, input))
  addListBox.append(input, addListBtn)
  return addListBox
}


const addListBtnFunctionality = (listSection, input) => {
  const listObj = createTaskList(input.value)
  console.log(listObj.getId())
  storeList(listObj)
  listSection.append(createListButton(listObj))
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
  const delListBtn = createDelListBtn(listObj, listContainer, tasksSection)
  tasksSection.innerHTML = ''
  tasksSection.append(tasksTitle, addTaskSection, myTasksBox, delListBtn)
}

