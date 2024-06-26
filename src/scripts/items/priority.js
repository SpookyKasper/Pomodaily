import flagIcon from '../../images/Icons/flag.svg'
import { createDivCI, createButtonCIT } from '../dom-stuff/create-basic-elements'

export function createPriorityFlag() {
  const priorityFlag = document.createElement('img')
  priorityFlag.className = 'priority-icon'
  priorityFlag.src = flagIcon

  return priorityFlag
}

const setElementPriorityColor = (priority, element) => {
  element.classList.add(priority)
}

const removeElementPriorityColor = (element) => {
  const options = getPriorityOptions()
  options.forEach(option => element.classList.remove(option))
}

const getPriorityOptions = () => {
  const priorityOptions = ['low-priority', 'med-priority', 'high-priority', 'no-priority']
  return priorityOptions
}

export function createPriorityButtonsBox (itemObj, itemEl) {
  const priorityButtonsBox = createDivCI('priority-box')
  const priorityOptions = getPriorityOptions()
  priorityOptions.forEach(priority => {
    const myPriorityBtn = createPriorityBtn(priority, itemObj, itemEl)
    priorityButtonsBox.append(myPriorityBtn)
  })
  return priorityButtonsBox
}

const displaySelection = (element) => {
  if (priorityOption === item.getPriority()) { priorityBtn.classList.add('selected')}
  element.classList.add('selected')
}

const createPriorityBtn = (priority, itemObj, itemEl) => {
  const priorityBtn = createButtonCIT('priority-btn')

  const priorityTitle = document.createElement('p')
  priorityTitle.innerHTML = _.startCase(priority)

  const priorityFlag = createPriorityFlag()
  setElementPriorityColor(priority, priorityFlag)

  priorityBtn.addEventListener('click', () => {
    removeElementPriorityColor(itemEl)
    setElementPriorityColor(priority, itemEl)
  })

  priorityBtn.append(priorityTitle, priorityFlag)
  return priorityBtn
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
