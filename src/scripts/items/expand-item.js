import '../../styles/expand.css'
import flagIcon from '../../images/Icons/flag.svg'
import { format } from "date-fns";
import _ from 'lodash'
import { createButtonCI, createDivCI, createInputTPV } from '../dom-stuff/create-basic-elements'

export default function expandItem(item) {
  const expandSection = document.querySelector('.expand-section')
  const expandedItem = createExpandedItemEl(item)
  expandSection.innerHTML = ''
  expandSection.append(expandedItem)
}

const createExpandedItemEl = (item) => {
  const expandedItemContainer = createDivCI('expanded-item-container')
  const itemStatus = item.getStatus()
  const itemTitleEl = createInputTPV(undefined, undefined, item.getTitle())
  itemTitleEl.id = 'title-input'
  const dueDateInputValue = format(item.getDueDate(), 'yyyy-MM-dd')
  const itemDueDateEl = createInputTPV('date', undefined, dueDateInputValue)
  itemDueDateEl.id = 'due-date-input'
  const itemDescriptionEl = createInputTPV('textarea', '+ Add Description', item.getDescription())
  itemDescriptionEl.id = 'description-input'
  const priorityBox = createPriorityButtonsBox(item)
  const confirmBtn = createButtonCI(undefined, 'confirm-btn')
  addPropertiesToConfirmBtn(confirmBtn, item, itemTitleEl, itemDueDateEl, itemDescriptionEl)
  expandedItemContainer.append(itemTitleEl, itemDueDateEl, itemDescriptionEl, priorityBox, confirmBtn)

  return expandedItemContainer
}

const addPropertiesToConfirmBtn = (confirmBtn, item, titleI, dueDateI, descriptionI) => {
  confirmBtn.textContent = 'Confirm'
  confirmBtn.addEventListener('click', () => {
    item.setTitle(titleI.value)
    if (dueDateI) { item.setDueDate.value}
    item.setDescription(descriptionI.value)
  })
}

const createPriorityButtonsBox = (item) => {
  const priorityBox = createDivCI('priority-box')
  const priorityOptions = ['low-priority', 'med-priority', 'high-priority', 'no-priority']

  // create each priority button
  priorityOptions.forEach(priorityOption => {
    const priorityBtn = createButtonCI('priority-button')
    const priorityTitle = document.createElement('p')
    priorityTitle.innerHTML = _.startCase(priorityOption)
    const flagIconEl = document.createElement('img')
    flagIconEl.src = flagIcon
    flagIconEl.classList.add(priorityOption, 'priority-icon')
    // Add functionality to button
    priorityBtn.addEventListener('click', () => {
      const itemId = item.getTitle().toLowerCase()
      const itemEl = document.getElementById(itemId)
      item.setPriority(priorityOption)
      setPriorityElColor(itemEl, priorityOption, priorityOptions)
    })

    priorityBtn.append(priorityTitle, flagIconEl)
    priorityBox.append(priorityBtn)
  })

  return priorityBox
}


const setPriorityElColor = (itemEl, priorityOption, priorityOptions) => {
  const flagEl = itemEl.querySelector('.priority-icon')
  priorityOptions.forEach(option => {
    flagEl.classList.remove(option)
  })
  const itemPriority = priorityOption
  flagEl.classList.add(itemPriority)
}
