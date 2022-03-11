


export enum ContactsActions { ADD, DELETE, MODIFY }

export type ContactsContextPropsType = {
  children: React.ReactNode
}

export type InitialStateType = {
  count: number
}

export type ContactsContextType = {
  state: InitialStateType,
  dispatch: React.Dispatch<ReducerActionType>
}

export type ReducerActionType = {
  type: ContactsActions.ADD | ContactsActions.DELETE,
  payload: number
}