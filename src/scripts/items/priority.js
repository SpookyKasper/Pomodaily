import flagIcon from '../../images/Icons/flag.svg'
import { createDivCI, createButtonCIT } from '../dom-stuff/create-basic-elements'

const createPriorityFlag = () => {
  const priorityFlag = document.createElement('img')
  priorityFlag.className = 'priority-icon'
  priorityFlag.src = flagIcon
  return priorityFlag
}

export function createItemPriorityFlag(itemObj) {
  const myFlag = createPriorityFlag()
  setElementPriorityColor(itemObj.getPriority(), myFlag)

  return myFlag
}

export function createPriorityButtonsBox(itemObj, itemEl) {
  const priorityButtonsBox = createDivCI('priority-box')
  const priorityOptions = getPriorityOptions()
  priorityOptions.forEach(priority => {
    const myPriorityBtn = createPriorityBtn(priority, itemObj, itemEl)
    priorityButtonsBox.append(myPriorityBtn)
  })
  return priorityButtonsBox
}

const setElementPriorityColor = (priority, element) => {
  element.classList.add(priority)
}

const createPriorityBtn = (priority, itemObj, itemEl) => {
  const priorityBtn = createButtonCIT('priority-btn')
  const priorityTitle = document.createElement('p')
  priorityTitle.innerHTML = _.startCase(priority)
  const priorityFlag = createPriorityFlag()
  setElementPriorityColor(priority, priorityFlag)
  const itemFlagIcon = itemEl.querySelector('.priority-icon')
  priorityBtn.addEventListener('click', () => {
    itemObj.setPriority(priority)
    removeElementPriorityColor(itemEl)
    setElementPriorityColor(priority, itemFlagIcon)
  })
  priorityBtn.append(priorityTitle, priorityFlag)
  return priorityBtn
}

const getPriorityOptions = () => {
  const priorityOptions = ['low-priority', 'med-priority', 'high-priority', 'no-priority']
  return priorityOptions
}

const removeElementPriorityColor = (element) => {
  const options = getPriorityOptions()
  options.forEach(option => element.classList.remove(option))
}

const removeSelectionDisplay = () => {
  const prioBtns = document.querySelectorAll('.priority-button')
  prioBtns.forEach(button => button.classList.remove('selected'))
}

const displaySelection = (element) => {
  if (priorityOption === item.getPriority()) { priorityBtn.classList.add('selected')}
  element.classList.add('selected')
}
