import createFormField from "./create-form-field";
import createToDoItem from "./to-do-item";

export default function createToDoForm(){
  const toDoForm = document.createElement('form')
  const titleField = createFormField('Title', 'Add Task...')
  toDoForm.append(titleField)
  return toDoForm
}
