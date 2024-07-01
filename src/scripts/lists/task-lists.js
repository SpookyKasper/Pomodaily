
let idCounter = 0

export default function createTaskList(title = '', tasks = []) {
  let listId = ++idCounter
  let listTitle = title
  let listTasks = tasks

  const getId = () => listId
  const setId = (newId) => listId = newId
  const getTitle = () => listTitle
  const setTitle = (newTitle) => listTitle = newTitle
  const getTasks = () => listTasks
  const addTask = (task) => {
    listTasks.push(task)
  }

  const getObj = () => {
    return {
      id: getId(),
      title: getTitle(),
    }
  }

  return {
    getId,
    setId,
    getTitle,
    setTitle,
    getTasks,
    addTask,
    getObj,
  }
}
