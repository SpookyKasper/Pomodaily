import '../../styles/home.css'
import { format } from "date-fns";

export function listNavigation(lists) {
  const listsBox = document.createElement('div')
  listsBox.className = 'lists-box'

  const mainTitle = document.createElement('h1')
  mainTitle.innerHTML = 'Lists'

  listsBox.append(mainTitle)

  lists.forEach(list => {
    const listContainer = createListContainerEl(list)
    const listItems = list.getToDos()
    const filledContainer = populatedListContainer(listItems, listContainer)
    listsBox.append(filledContainer)
  })

  return listsBox
}

function createListContainerEl(list) {
  const listContainer = document.createElement('div')
  listContainer.className = 'list-container'
  const listTitle = document.createElement('button')
  listTitle.innerHTML = list.getTitle()

  listContainer.append(listTitle)
  return listContainer
}

function createItemsEl(item) {
  const itemEl = document.createElement('div')
  itemEl.className = 'todo-item'
  const itemTitleEl = document.createElement('h2')
  itemTitleEl.innerHTML = item.getTitle()
  const itemDueDateEl = document.createElement('p')
  const formatedDate = format(item.getDueDate(), 'dd MMM y')
  itemDueDateEl.innerHTML = `Due Date: ${formatedDate}`

  itemEl.append(itemTitleEl, itemDueDateEl)
  return itemEl
}

export function populatedListContainer(items, listContainer){
  items.forEach(item => {
    // listContainer.append(createItemsEl(item))
  });

  return listContainer
}


