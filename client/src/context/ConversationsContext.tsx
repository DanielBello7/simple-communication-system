


import React, { useReducer } from 'react';
import { 
  InitialStateType,
  CountActionEnum,
  ConversationsContextPropsType, 
  ReducerActionType, 
  ConversationsContextType
} from '../types/ConversationTypes.types';

const initialState: InitialStateType = {count: 0}

function reducer(state: InitialStateType, action: ReducerActionType) {
  switch (action.type){
    case CountActionEnum.INCREASE:
      return {count: state.count + action.payload}
    case CountActionEnum.DECREASE:
      return {count: state.count - action.payload}
    default:
      return state;
  }
}

export const ConversationsContext = React.createContext<ConversationsContextType>({} as ConversationsContextType);

export function ConversationsContextProvider(props: ConversationsContextPropsType) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ConversationsContext.Provider value={{state, dispatch}}>
      {props.children}
    </ConversationsContext.Provider>
  )
}
export const ConversationsContextConsumer = ConversationsContext.Consumer;