import '../../styles/expand.css'
import flagIcon from '../../images/Icons/flag.svg'
import { format } from "date-fns";
import _ from 'lodash'
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

const createPriorityButtonsBox = (item, itemEl) => {
  const priorityButtonsBox = createDivCI('priority-box')
  const priorityOptions = ['low-priority', 'med-priority', 'high-priority', 'no-priority']

  // create each priority button
  priorityOptions.forEach(priorityOption => {
    const priorityBtn = createButtonCIT('priority-button')
    if (priorityOption === item.getPriority()) { priorityBtn.classList.add('selected')}

    const priorityTitle = document.createElement('p')
    priorityTitle.innerHTML = _.startCase(priorityOption)
    const flagIconEl = document.createElement('img')
    flagIconEl.src = flagIcon
    flagIconEl.classList.add(priorityOption, 'priority-icon')

    // Add functionality to button
    priorityBtn.addEventListener('click', () => {
      item.setPriority(priorityOption)
      removeSelectionDisplay()
      priorityBtn.classList.add('selected')
      setPriorityElColor(itemEl, priorityOption, priorityOptions)
    })

    priorityBtn.append(priorityTitle, flagIconEl)
    priorityButtonsBox.append(priorityBtn)
  })

  return priorityButtonsBox
}

const removeSelectionDisplay = () => {
  const prioBtns = document.querySelectorAll('.priority-button')
  prioBtns.forEach(button => button.classList.remove('selected'))
}


const setPriorityElColor = (itemEl, priorityOption, priorityOptions) => {
  const flagEl = itemEl.querySelector('.priority-icon')
  priorityOptions.forEach(option => {
    flagEl.classList.remove(option)
  })
  const itemPriority = priorityOption
  flagEl.classList.add(itemPriority)
}
