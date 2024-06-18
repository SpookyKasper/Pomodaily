
export default function createToDoItem(title = 'to-do', description, dueDate = 'today', priority = 'red') {

  let itemTitle = title
  let itemDescription = description
  let itemDueDate = dueDate
  let itemPriority = priority

  const getTitle = () => itemTitle
  const setTitle = (newTitle) => itemTitle = newTitle
  return { getTitle, setTitle}
}
