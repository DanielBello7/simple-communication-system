


import React, { useContext, useReducer, useCallback } from 'react';
import { 
  InitialStateType,
  ConversationActions,
  ConversationsContextPropsType, 
  ReducerActionType, 
  ConversationsContextType,
  Message
} from '../types/ConversationTypes.types';
import { ContactsContext } from './ContactsContext';

const initialState: InitialStateType = [];


function reducer(state: InitialStateType, action: ReducerActionType) {
  switch (action.type){
    case ConversationActions.CREATE_CONVERSATION:
      return [...state, {...action.payload}];
    case ConversationActions.DELETE_CONVERSATION:
      const newConversations = state.filter(conversation => {
        return conversation.recipients !== action.payload.recipients
      });
      return [...newConversations];
    case ConversationActions.UPDATE_CONVERSATION:
      return [...state, {...action.payload}];
    default:
      return [...state];
  }
}

export const ConversationsContext = React.createContext<ConversationsContextType>({} as ConversationsContextType);

export function ConversationsContextProvider(props: ConversationsContextPropsType) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contactsContext = useContext(ContactsContext);

  const formattedConversations = state.map((conversation, index) => {
    return conversation;
  });

  const addMessageToConversation = useCallback((message: Message) => {
    
  }, [])

  return (
    <ConversationsContext.Provider value={{state, dispatch, formattedConversations}}>
      {props.children}
    </ConversationsContext.Provider>
  )
}
export const ConversationsContextConsumer = ConversationsContext.Consumer;