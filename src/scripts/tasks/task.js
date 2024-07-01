
let idCounter = 0

export default function createTask(
  listId,
  title='No Title',
  description='',
  dueDate=new Date(),
  priority='no-priority',
  status='not-started',
){

  let taskId = ++idCounter
  let taskListId = listId
  let taskTitle = title
  let taskDescription = description
  let taskDueDate = dueDate
  let taskPriority = priority
  let taskStatus = status

  const getListId = () => taskListId
  const setListId = (newListId) => taskListId = newListId
  const getTitle = () => taskTitle
  const setTitle = (newTitle) => taskTitle = newTitle
  const getDescription = () => taskDescription
  const setDescription = (newDescription) => taskDescription = newDescription
  const getDueDate = () => taskDueDate
  const setDueDate = (newDueDate) => taskDueDate = newDueDate
  const getPriority = () => taskPriority
  const setPriority = (newPriority) => taskPriority = newPriority
  const getStatus = () => taskStatus
  const setStatus = (newStatus) => taskStatus = newStatus
  const getId = () => taskId
  const setId = (newId) => taskId = newId

  const getPropertiesObj = () => {
    return {
      listId: getListId(),
      title: getTitle(),
      description: getDescription(),
      dueDate: getDueDate(),
      priority: getPriority(),
      status: getStatus(),
      id: getId()
    }
  }

  return {
    getListId,
    setListId,
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
    getStatus,
    setStatus,
    getPropertiesObj,
    getId,
    setId
  }
}
