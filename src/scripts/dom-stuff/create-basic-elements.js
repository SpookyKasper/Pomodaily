export function createButtonCIT(myClass, id='', text='') {
  const myButton = document.createElement('button')
  myButton.classList.add(myClass)
  myButton.id = id
  myButton.innerHTML = text

  return myButton
}

export function createDivCI(myClass, id='') {
  const myDiv = document.createElement('div')
  myDiv.classList.add(myClass)
  myDiv.id = id

  return myDiv
}

export function createInputTIPV(type='text', id='', placeholder='', value='') {
  const myInput = document.createElement('input')
  myInput.type = type
  myInput.id = id
  myInput.placeholder = placeholder
  myInput.value = value

  return myInput
}

export function createTitleST(importance, text='') {
  const myTitle = document.createElement(importance)
  myTitle.innerHTML = text

  return myTitle
}

export function createParagraphTCI(text='', myClass, id='') {
  const myParagraph = document.createElement('p')
  myParagraph.innerHTML = text
  myParagraph.classList.add(myClass)

  return myParagraph
}

