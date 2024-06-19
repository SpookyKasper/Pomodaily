
export default function createToDoList(title = '', toDos = []) {
  const listTitle = title
  const listToDos = toDos

  const getTitle = () => listTitle
  const getToDos = () => listToDos
  const addToDo = (toDoItem) => {
    listToDos.push(toDoItem)
  }

  return {
    getTitle,
    getToDos,
    addToDo
  }
}
