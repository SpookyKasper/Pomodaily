import '../../styles/nav.css'
import createToDoList from './to-do-lists'

export default function listNav(myLists = []) {
  const myListNav = createListNavEl()
  const listsButtons = document.createElement('div')

  listsButtons.className = 'list-buttons'
  populateListNav(myLists, listsButtons)

  const addListBox = document.createElement('div')
  addListBox.className = 'new-list-box'
  const newListInput = document.createElement('input')
  newListInput.placeholder = 'Add List...'
  const newListButton = document.createElement('button')
  newListButton.innerHTML = '+'
  newListButton.addEventListener('click', () => {
    const listName = newListInput.value
    console.log(listName)
    const myFreshList = createToDoList(listName)
    addListToListNav(myFreshList, listsButtons)
  })

  addListBox.append(newListInput, newListButton)
  myListNav.append(listsButtons, addListBox)

  return myListNav
}


function createListNavEl() {
  const listNav = document.createElement('div')
  listNav.className = 'lists-nav'
  const mainTitle = document.createElement('h1')
  mainTitle.innerHTML = 'Lists'
  listNav.append(mainTitle)

  return listNav
}

function createListContainerEl(listObj) {
  const listContainer = document.createElement('div')
  listContainer.className = 'list-container'
  const listTitle = document.createElement('button')
  listTitle.innerHTML = listObj.getTitle()

  listContainer.append(listTitle)
  return listContainer
}

function populateListNav(lists, listNav) {
  lists.forEach(list => {
    addListToListNav(list, listNav)
  })
}

function addListToListNav(listObj, listNav) {
  const myNewList = createListContainerEl(listObj)
  listNav.append(myNewList)
}



