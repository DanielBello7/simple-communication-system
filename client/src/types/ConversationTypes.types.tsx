


export enum CountActionEnum { INCREASE, DECREASE }

export type InitialStateType = {
  count: number
}

export type ConversationsContextPropsType = {
  children: React.ReactNode
}

export type ReducerActionType = {
  type: CountActionEnum.INCREASE | CountActionEnum.DECREASE,
  payload: number
}

export type ConversationsContextType = {
  state: InitialStateType,
  dispatch: React.Dispatch<ReducerActionType>
}