import '../../styles/expand.css'
import flagIcon from '../../images/Icons/flag.svg'
import { format } from "date-fns";
import _ from 'lodash'
import { createPriorityButtonsBox, setElementPriorityColor } from '..//items/priority.js'
import { createButtonCIT, createDivCI, createInputTIPV } from '../dom-stuff/create-basic-elements'

export default function expandItem(itemObj, itemEl) {
  const expandSection = document.querySelector('.expand-section')
  const expandedItem = createExpandedItemEl(itemObj, itemEl)
  expandSection.innerHTML = ''
  expandSection.append(expandedItem)
}

const createExpandedItemEl = (itemObj, itemEl) => {
  const expandedItemContainer = createDivCI('expanded-item-container')
  const itemTitleInput = createInputTIPV(undefined, 'title-input', 'Title', itemObj.getTitle())
  const dueDateInputValue = format(itemObj.getDueDate(), 'yyyy-MM-dd')
  const itemDueDateInput = createInputTIPV('date', 'due-date-input', undefined, dueDateInputValue)
  const itemDescriptionInput = createInputTIPV('textarea', 'description-input', 'Add Description', itemObj.getDescription())
  const priorityButtonsBox = createPriorityButtonsBox(itemObj, itemEl)
  const deleteItemBtn = createDeleteItemButton(itemObj, itemEl)
  const confirmBtn = createButtonCIT(undefined, 'confirm-btn', 'Confirm')
  confirmBtn.addEventListener('click', () => {
    expandedItemContainer.innerHTML = ''
    updateItemObj(itemObj, itemTitleInput, itemDueDateInput, itemDescriptionInput)
    updateItemEl(itemEl, itemObj)
  })

  expandedItemContainer.append(itemTitleInput, itemDueDateInput, itemDescriptionInput, priorityButtonsBox, confirmBtn, deleteItemBtn)

  return expandedItemContainer
}

const createDeleteItemButton = (item, itemEl, list) => {
  const deleteItemBtn = createButtonCIT(undefined, 'delete-item-btn', '🗑 Delete')
  deleteItemBtn.addEventListener('click', () => {
    item.setDeleted(true)
    itemEl.remove()
  })
  return deleteItemBtn
}

const updateItemObj = (itemObj, titleInput, dueDateInput, descriptionInput) => {
  itemObj.setTitle(titleInput.value)
  itemObj.setDueDate(dueDateInput.value)
  itemObj.setDescription(descriptionInput.value)
}

const updateItemEl = (itemEl, itemObj) => {
  const titleEl = itemEl.querySelector('.item-title')
  titleEl.innerHTML = itemObj.getTitle()
  const dueDateEl = itemEl.querySelector('.item-due-date')
  const formattedDate = format(itemObj.getDueDate(), 'dd MMM y')
  dueDateEl.innerHTML = `Due Date: ${formattedDate}`
}
