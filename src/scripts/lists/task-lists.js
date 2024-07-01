export default function createTaskList(id, title = '', tasks = []) {
  const listId = id
  let listTitle = title
  let listTasks = tasks

  const getId = () => listId
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
    getTitle,
    setTitle,
    getTasks,
    addTask,
    getObj,
  }
}
