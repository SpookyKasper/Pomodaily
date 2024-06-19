
export function createListsContainerEl() {
  const listsContainer = document.createElement('div')
  listsContainer.className = 'lists-container'

  return listsContainer
}

export function createListEl(listObj) {
  const listEl = document.createElement('div')
  const listTitle = document.createElement('h2')
  listTitle.innerHTML = listObj.getTitle()
  listEl.append(listTitle)

  return listEl
}

export function populatedListContainer(lists){
  const myContainer = createListsContainerEl()
  lists.forEach(list => {
    myContainer.append(createListEl(list))
  });

  return myContainer
}


