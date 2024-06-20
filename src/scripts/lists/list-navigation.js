import '../../styles/nav.css'

export default function listNav(myLists = []) {
  const myListNav = createListNavEl()
  populateListNav(myLists, myListNav)

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

function createListContainerEl(list) {
  const listContainer = document.createElement('div')
  listContainer.className = 'list-container'
  const listTitle = document.createElement('button')
  listTitle.innerHTML = list.getTitle()

  listContainer.append(listTitle)
  return listContainer
}

function populateListNav(lists, listNav) {
  lists.forEach(list => {
    addListToListNav(list, listNav)
  })
}

function addListToListNav(list, listNav) {
  const myNewList = createListContainerEl(list)
  listNav.append(myNewList)
}

