


export enum ContactsActions { CREATE, DELETE, MODIFY }

export type ContactsContextPropsType = {
  children: React.ReactNode
}

export type Contact = {
  email: string, 
  first_name: string, 
  last_name: string
}

export type InitialStateType = Contact[];

export interface GroupedContact extends Contact {
  id: number
}
// this is how you extend a type but extensions only work for interfaces

export type ContactsContextType = {
  state: InitialStateType,
  selectedContact: Contact,
  createNewContact: (data: Contact) => void,
  deleteContact: (data: Contact) => void,
  updateContact: (data: Contact) => void,
  groupedContacts: { groupTitle: string, groupChildren: GroupedContact[] }[],
  setSelectedContact: React.Dispatch<React.SetStateAction<number>>
}

export type ReducerActionType = {
  type: ContactsActions.CREATE | ContactsActions.DELETE | ContactsActions.MODIFY,
  payload: any
}

export const contactGroups = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
]