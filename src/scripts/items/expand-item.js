import '../../styles/expand.css'
import flagIcon from '../../images/Icons/flag.svg'
import _ from 'lodash'

export default function expandItem(item) {
  const expandSection = document.querySelector('.expand-section')
  const expandedItem = createExpandedItemEl(item)
  expandSection.innerHTML = ''
  expandSection.append(expandedItem)
}

const createExpandedItemEl = (item) => {
  const expandedItemContainer = document.createElement('div')
  expandedItemContainer.classList.add('expanded-item-container')
  const itemStatus = item.getStatus()

  const itemTitleEl = document.createElement('input')
  itemTitleEl.value = item.getTitle()

  const itemDueDateEl = document.createElement('input')
  itemDueDateEl.setAttribute('type', 'date')
  itemDueDateEl.value = item.getDueDate()

  const itemDescriptionEl = document.createElement('input')
  itemDescriptionEl.setAttribute('type', 'textarea')
  itemDescriptionEl.value = item.getDescription()
  itemDescriptionEl.placeholder = ' + Add description...'

  const priorityBox = createPriorityButtons(item)

  expandedItemContainer.append(itemTitleEl, itemDueDateEl, itemDescriptionEl, priorityBox)
  setPriorityElColor(item)

  return expandedItemContainer
}

const createPriorityButtons = (item) => {
  const priorityBox = document.createElement('div')
  priorityBox.classList.add('priority-box')

  const priorityOptions = ['low-priority', 'med-priority', 'high-priority', 'no-priority']

  priorityOptions.forEach(priorityOption => {
    const priorityBtn = document.createElement('button')
    priorityBtn.classList.add('priority-btn')

    const priorityTitle = document.createElement('p')
    priorityTitle.innerHTML = _.startCase(priorityOption)

    const flagIconEl = document.createElement('img')
    flagIconEl.src = flagIcon
    flagIconEl.classList.add(priorityOption, 'priority-icon')

    priorityBtn.addEventListener('click', () => {
      item.setPriority(priorityOption)
      console.log(item.getPriority())
    })

    priorityBtn.append(priorityTitle, flagIconEl)
    priorityBox.append(priorityBtn)
  })

  return priorityBox
}

const setPriorityElColor = (item) => {

}
