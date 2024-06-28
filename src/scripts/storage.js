let count = 0

export function storeTask(task) {
  const myPropertiesObj = task.getPropertiesObj()
  const taskString = JSON.stringify(myPropertiesObj)
  localStorage.setItem(count, taskString)
  count ++
}

export function loadTask(key) {
  const myTaskString = localStorage.getItem(key)
  const taskObject = JSON.parse(myTaskString)
  return taskObject
}
