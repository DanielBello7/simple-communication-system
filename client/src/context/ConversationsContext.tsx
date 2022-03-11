


import React, { useReducer } from 'react';
import { 
  CountType,
  CountActionEnum,
  ConversationsContextProps, 
  CountActionType, 
  ConversationsContextType
} from '../types/ConversationTypes.types';

const initialState: CountType = {count: 0}

function reducer(state: CountType, action: CountActionType) {
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

export function ConversationsContextProvider(props: ConversationsContextProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ConversationsContext.Provider value={{
      state, 
      dispatch
    }}>
      {props.children}
    </ConversationsContext.Provider>
  )
}
export const ConversationsContextConsumer = ConversationsContext.Consumer;