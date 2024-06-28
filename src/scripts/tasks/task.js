export default function createTask(
  listId=0,
  title='No Title',
  description='',
  dueDate=new Date(),
  priority='no-priority',
  status='not-started',
  deleted=false,
){

  let taskListId = listId
  let taskTitle = title
  let taskDescription = description
  let taskDueDate = dueDate
  let taskPriority = priority
  let taskStatus = status
  let taskDeleted = deleted

  const getListId = () => taskListId
  const setListId = (newListId) => taskListId
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
  const getDeleted = () => taskDeleted
  const setDeleted = (newDeleted) => taskDeleted = newDeleted

  const getPropertiesObj = () => {
    return {
      title: getTitle(),
      description: getDescription(),
      dueDate: getDueDate(),
      priority: getPriority(),
      status: getStatus(),
      deleted: getDeleted()
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
    getDeleted,
    setDeleted,
    getPropertiesObj
  }
}
