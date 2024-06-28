import flagIcon from '../../images/Icons/flag.svg'
import { createDivCI, createButtonCIT, createParagraphTCI } from '../dom-stuff/create-basic-elements'

const createPriorityFlag = () => {
  const priorityFlag = document.createElement('img')
  priorityFlag.className = 'priority-icon'
  priorityFlag.src = flagIcon
  return priorityFlag
}

export function createTaskPriorityFlag(taskObj) {
  const myFlag = createPriorityFlag()
  setElementPriorityColor(taskObj.getPriority(), myFlag)
  return myFlag
}

export function createPriorityButtonsBox(taskObj, taskEl) {
  const priorityButtonsBox = createDivCI('priority-box')
  const priorityOptions = getPriorityOptions()
  priorityOptions.forEach(priority => {
    const myPriorityBtn = createPriorityBtn(priority, taskObj, taskEl)
    priorityButtonsBox.append(myPriorityBtn)
  })
  return priorityButtonsBox
}

const setElementPriorityColor = (priority, element) => {
  element.classList.add(priority)
}

const createPriorityBtn = (priority, taskObj, taskEl) => {
  const priorityBtn = createButtonCIT('priority-btn')
  const priorityTitle = createParagraphTCI(_.startCase(priority))
  const priorityFlag = createPriorityFlag()
  setElementPriorityColor(priority, priorityFlag)
  const taskFlagIcon = taskEl.querySelector('.priority-icon')
  priorityBtn.addEventListener('click', () => {
    taskObj.setPriority(priority)
    removeElementPriorityColor(taskFlagIcon)
    setElementPriorityColor(priority, taskFlagIcon)
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
  if (priorityOption === task.getPriority()) { priorityBtn.classList.add('selected')}
  element.classList.add('selected')
}
