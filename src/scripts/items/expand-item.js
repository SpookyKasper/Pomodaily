export default function expandItem(item) {
  const expandSection = document.querySelector('.expand-section')
  const expandedItem = createExpandedItemEl(item)

  console.log(expandSection)
  expandSection.append(expandedItem)
}

const createExpandedItemEl = (item) => {
  const expandedItemContainer = document.createElement('div')
  expandedItemContainer.classList.add('expanded-item-container')
  const itemTitleEl = document.createElement('input')
  itemTitleEl.value = item.getTitle()

  expandedItemContainer.append(itemTitleEl)

  return expandedItemContainer
}
