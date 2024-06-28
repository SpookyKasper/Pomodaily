
export default function createTaskList(title = '', tasks = [], id) {
  const listTitle = title
  const listTasks = tasks
  const listId = id

  const getTitle = () => listTitle
  const getTasks = () => listTasks
  const getId = () => listId
  const addTask = (task) => {
    listTasks.push(task)
  }

  return {
    getTitle,
    getTasks,
    addTask,
    getId
  }
}
