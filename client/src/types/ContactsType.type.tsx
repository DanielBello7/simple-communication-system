


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

export type ContactsContextType = {
  state: InitialStateType,
  dispatch: React.Dispatch<ReducerActionType>,
  selectedContact: Contact,
  setSelectedContact: React.Dispatch<React.SetStateAction<number>>
}

export type ReducerActionType = {
  type: ContactsActions.CREATE | ContactsActions.DELETE | ContactsActions.MODIFY,
  payload: Contact
}