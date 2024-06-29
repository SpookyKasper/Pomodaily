import '../../styles/list-nav.css'
import createTaskList from './task-lists'
import { createAddTaskSection } from '../tasks/add-task'
import {displayTasks} from '../tasks/task-utils'
import { createDivCI, createInputTIPV, createTitle } from '../dom-stuff/create-basic-elements'
import { storeList, getStoredListsCount, getItemsIncluding} from '../storage'

export default function listNav(myLists = []) {
  const myListNav = createDivCI('list-nav')
  const listNavTitle = createTitle('h1', 'Lists')
  myListNav.append(listNavTitle)
  const listButtons = createDivCI('list-buttons')
  populateListBtnsContainer(myLists, listButtons)
  const addingListsEl = addNewListEl(listButtons)
  myListNav.append(listButtons, addingListsEl)
  return myListNav
}

// Given a list section, create an input and and button to add lists to the section
function addNewListEl(listSection) {
  const addListBox = createDivCI('new-list-box')
  const newListInput = createInputTIPV('text', undefined, '+ Add List...')
  const newListButton = document.createElement('button')
  newListButton.innerHTML = '+'
  newListButton.addEventListener('click', () => {
    const listTitle = newListInput.value
    const numList = getItemsIncluding('list').length
    const myFreshList = createTaskList(numList, listTitle)
    storeList(myFreshList)
    listSection.append(createListButton(myFreshList))
    newListInput.value = ''
  })
  addListBox.append(newListInput, newListButton)
  return addListBox
}

// Given a list object create a container with a button that can display the list content
function createListButton(listObj) {
  const listContainer = document.createElement('div')
  listContainer.className = 'list-container'
  const listButton = document.createElement('button')
  listButton.innerHTML = listObj.getTitle()
  listButton.addEventListener('click', function(){
    const tasksSection = document.querySelector('.tasks-section')
    tasksSection.innerHTML = ''
    const myTasksBox = displayTasks(listObj)
    const addTaskSection = createAddTaskSection(myTasksBox, listObj)
    tasksSection.append(addTaskSection, myTasksBox)
  })
  listContainer.append(listButton)
  return listContainer
}

// Given some lists and a container add the lists to the container
function populateListBtnsContainer(lists, listButtons) {
  lists.forEach(list => {
    const myListButton = createListButton(list)
    listButtons.append(myListButton)
  })
}



