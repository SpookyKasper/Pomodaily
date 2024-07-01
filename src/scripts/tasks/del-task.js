import { createButtonCIT } from "../dom-stuff/create-basic-elements"
import { buildTaskBack, getItemsIncluding } from "../storage"

export function createDeleteTaskButton(taskObj, taskEl) {
  const deleteTaskBtn = createButtonCIT(undefined, 'delete-task-btn', '🗑 Delete')
  deleteTaskBtn.addEventListener('click', () => deleteTask(taskObj, taskEl))
  return deleteTaskBtn
}

export const deleteTask = (taskObj, taskEl) => {
  const taskId = taskObj.getId()
  delTaskFromStorage(taskId)
  taskEl.remove()
}

const delTaskFromStorage = (taskId) => {
  const storedTasks = getItemsIncluding('task')
  const taskToDel = storedTasks.find(task => buildTaskBack(task).getId() === taskId)
  localStorage.removeItem(taskToDel)
}
