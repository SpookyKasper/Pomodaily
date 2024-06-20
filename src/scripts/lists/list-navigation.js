import '../../styles/nav.css'
import createToDoList from './to-do-lists'
import createItemEl from '../items/todo-dom-utils'

export default function listNav(myLists = []) {
  const myListNav = createListNavEl()
  const listsButtons = document.createElement('div')
  listsButtons.className = 'list-buttons'

  populateListNav(myLists, listsButtons)
  const addingListsEl = addNewListEl(listsButtons)
  myListNav.append(listsButtons, addingListsEl)

  return myListNav
}

// Given a list section, create an input and and button to add lists to the section
function addNewListEl(listSection) {
  const addListBox = document.createElement('div')
  addListBox.className = 'new-list-box'
  const newListInput = document.createElement('input')
  newListInput.placeholder = 'Add List...'
  const newListButton = document.createElement('button')
  newListButton.innerHTML = '+'
  newListButton.addEventListener('click', () => {
    const listName = newListInput.value
    const myFreshList = createToDoList(listName)
    addListToListNav(myFreshList, listSection)
  })

  addListBox.append(newListInput, newListButton)
  return addListBox
}

function createListNavEl() {
  const listNav = document.createElement('div')
  listNav.className = 'lists-nav'
  const mainTitle = document.createElement('h1')
  mainTitle.innerHTML = 'Lists'
  listNav.append(mainTitle)

  return listNav
}

// Given a list object create a container with a button that can display the list content
function createListButton(listObj) {
  const listContainer = document.createElement('div')
  listContainer.className = 'list-container'
  const listButton = document.createElement('button')
  listButton.innerHTML = listObj.getTitle()
  listButton.addEventListener('click', function(){
    const mainEl = document.querySelector('main')
    mainEl.innerHTML = ''
    const myItemsBox = createItemsBox(listObj)
    mainEl.appendChild(myItemsBox)
  })

  listContainer.append(listButton)
  return listContainer
}

function createItemsBox(listObj) {
  const toDoItemsBox = document.createElement('div')
  toDoItemsBox.className = 'items-box'
  const toDoItems = listObj.getToDos()
  toDoItems.forEach((item) => {
    console.log(item)
    toDoItemsBox.append(createItemEl(item))
  })

  return toDoItemsBox
}

// Pseudocode for listButtons:
// When the user clicks the button, wipe the content of main
// For Each item in the toDoS of the list, create a container with the title due date and priority

// Given some lists and a container add the lists to the container
function populateListNav(lists, listButtons) {
  lists.forEach(list => {
    addListToListNav(list, listButtons)
  })
}
function addListToListNav(listObj, listButtons) {
  const myListButton = createListButton(listObj)
  listButtons.append(myListButton)
}



