


export enum ConversationActions { CREATE_CONVERSATION, UPDATE_CONVERSATION, DELETE_CONVERSATION }

export enum MessageType { MEDIA, TEXT, REPLY }

export type Message = {
  _id: string,
  type: MessageType.MEDIA | MessageType.TEXT | MessageType.REPLY,
  text: string,
  date: Date,
  time: Date,
  sender: string | {},
  isSent: boolean,
  isRead: boolean,
  isDelivered: boolean,
  media?: string,
  replyMessage?: string
}

export type Conversation = {
  recipients: string[],
  messages: Message[]
}

export type InitialStateType = Conversation[];

export type ConversationsContextPropsType = {
  children: React.ReactNode
}

export type ReducerActionType = {
  type: ConversationActions.CREATE_CONVERSATION | ConversationActions.DELETE_CONVERSATION | ConversationActions.UPDATE_CONVERSATION,
  payload: Conversation
}

export type ConversationsContextType = {
  state: InitialStateType,
  dispatch: React.Dispatch<ReducerActionType>,
  formattedConversations: Conversation[]
}