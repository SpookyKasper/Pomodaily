import '../../styles/nav.css'
import createToDoList from './to-do-lists'

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
    console.log(listObj.getToDos())
  })

  listContainer.append(listButton)
  return listContainer
}

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



