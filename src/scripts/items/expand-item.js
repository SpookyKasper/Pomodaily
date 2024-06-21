import '../../styles/expand.css'

export default function expandItem(item) {
  const expandSection = document.querySelector('.expand-section')
  const expandedItem = createExpandedItemEl(item)
  expandSection.innerHTML = ''
  expandSection.append(expandedItem)
}

const createExpandedItemEl = (item) => {
  const expandedItemContainer = document.createElement('div')
  expandedItemContainer.classList.add('expanded-item-container')
  const itemTitle = item.getTitle()
  const itemDueDate = item.getDueDate()
  const itemDescription = item.getDescription()
  const itemPriority = item.getPriority()
  const itemStatus = item.getStatus()

  const itemTitleEl = document.createElement('input')
  itemTitleEl.value = item.getTitle()

  const itemDueDateEl = document.createElement('input')
  itemDueDateEl.setAttribute('type', 'date')
  itemDueDate.value = itemDueDate

  const itemDescriptionEl = document.createElement('input')
  itemDescriptionEl.setAttribute('type', 'textarea')
  itemDescriptionEl.value = itemDescription
  itemDescriptionEl.placeholder = 'Add description'


  expandedItemContainer.append(itemTitleEl, itemDueDateEl, itemDescriptionEl)

  return expandedItemContainer
}
