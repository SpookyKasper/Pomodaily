import '../../styles/list-nav.css'
import { createListButton } from './add-list'
import { createDivCI, createTitleST } from '../dom-stuff/create-basic-elements'
import createAddListSection from './add-list'

export default function listNav(lists = []) {
  const myListNav = createDivCI('list-nav')
  const listNavTitle = createTitleST('h2', 'Lists')
  const listButtons = createDivCI('list-buttons')
  const addingListsEl = createAddListSection(listButtons)
  lists.forEach(list => listButtons.append(createListButton(list)))
  myListNav.append(listNavTitle, listButtons, addingListsEl)
  return myListNav
}
