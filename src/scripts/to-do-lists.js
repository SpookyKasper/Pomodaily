
export default function createToDoList(title = '', toDos = []) {
  const listTitle = title
  const listToDos = toDos

  const getTitle = () => listTitle
  const getToDos = () => listToDos
  const addToDo = (project) => {
    listToDos.push(project)
  }

  return {
    getTitle,
    getToDos,
    addToDo
  }
}
