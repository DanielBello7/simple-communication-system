


import React, { useReducer } from 'react';
import { 
  InitialStateType,
  ConversationActions,
  ConversationsContextPropsType, 
  ReducerActionType, 
  ConversationsContextType
} from '../types/ConversationTypes.types';

const initialState: InitialStateType = []

function reducer(state: InitialStateType, action: ReducerActionType) {
  switch (action.type){
    case ConversationActions.CREATE_CONVERSATION:
      return [...state, {...action.payload}];
    case ConversationActions.DELETE_CONVERSATION:
      return [...state];
    case ConversationActions.UPDATE_CONVERSATION:
      return [...state];
    default:
      return [...state];
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