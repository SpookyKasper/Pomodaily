import { format } from "date-fns";

function createItemsEl(item) {
  const itemEl = document.createElement('div')
  itemEl.className = 'todo-item'
  const itemTitleEl = document.createElement('h2')
  itemTitleEl.innerHTML = item.getTitle()
  const itemDueDateEl = document.createElement('p')
  const formattedDate = format(item.getDueDate(), 'dd MMM y')
  itemDueDateEl.innerHTML = `Due Date: ${formattedDate}`

  itemEl.append(itemTitleEl, itemDueDateEl)
  return itemEl
}
