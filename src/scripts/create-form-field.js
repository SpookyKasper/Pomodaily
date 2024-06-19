export default function createFormField(label, placeholder = label){

  const formField = document.createElement('div')
  formField.className = 'form-field'

  const inputEl = document.createElement('input')
  inputEl.id = label
  inputEl.placeholder = placeholder

  const labelEl = document.createElement('label')
  labelEl.for = label
  labelEl.innerHTML = label

  formField.append(labelEl, inputEl)

  return formField
}
