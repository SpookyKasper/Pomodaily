export function createButtonCI(myClass, id) {
  const myButton = document.createElement('button')
  myButton.classList.add(myClass)
  myButton.id = id

  return myButton
}

export function createDivCI(myClass, id) {
  const myDiv = document.createElement('div')
  myDiv.classList.add(myClass)
  myDiv.id = id

  return myDiv
}

export function createInputTPV(type='text', placeholder, value) {
  const myInput = document.createElement('input')
  myInput.type = type
  myInput.placeholder = placeholder
  myInput.value = value

  return myInput
}

