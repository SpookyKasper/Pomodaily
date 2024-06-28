
export default function createTaskList(title = '', tasks = []) {
  const listTitle = title
  const listTasks = tasks

  const getTitle = () => listTitle
  const getTasks = () => listTasks
  const addTask = (task) => {
    listTasks.push(task)
  }

  return {
    getTitle,
    getTasks,
    addTask
  }
}
