


export enum CountActionEnum { INCREASE, DECREASE }

export type ConversationsContextProps = {
  children: React.ReactNode
}

export type CountType = {
  count: number
}

export type ConversationsContextType = {
  state: CountType,
  dispatch: React.Dispatch<CountActionType>
}

export type CountActionType = {
  type: CountActionEnum.INCREASE | CountActionEnum.DECREASE,
  payload: number
}