export default function createToDoItem(title = 'To-Do', description = '', dueDate = new Date(), priority = '', status = 'not-started') {

  let itemTitle = title
  let itemDescription = description
  let itemDueDate = dueDate
  let itemPriority = priority
  let itemStatus = status

  const getTitle = () => itemTitle
  const setTitle = (newTitle) => itemTitle = newTitle
  const getDescription = () => itemDescription
  const setDescription = (newDescription) => itemDescription = newDescription
  const getDueDate = () => itemDueDate
  const setDueDate = (newDueDate) => itemDueDate = newDueDate
  const getPriority = () => itemPriority
  const setPriority = (newPriority) => itemPriority = newPriority
  const getStatus = () => itemStatus
  const setStatus = (newStatus) => itemStatus = newStatus

  return {
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
    getStatus,
    setStatus
  }
}
