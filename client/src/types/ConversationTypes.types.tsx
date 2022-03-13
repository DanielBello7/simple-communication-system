


export enum ConversationActions { CREATE_CONVERSATION, ADD_MESSAGE, DELETE_CONVERSATION, DELETE_MESSAGE }

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
  _id: string,
  recipients: string[],
  messages: Message[]
}

export type InitialStateType = Conversation[];

export type ConversationsContextPropsType = {
  children: React.ReactNode
}

export type ReducerActionType = {
  type: ConversationActions.CREATE_CONVERSATION | ConversationActions.DELETE_CONVERSATION | ConversationActions.ADD_MESSAGE | ConversationActions.DELETE_MESSAGE,
  payload: string,
  message?: Message,
}

export type ConversationsContextType = {
  state: InitialStateType,
  dispatch: React.Dispatch<ReducerActionType>,
  formattedConversations: Conversation[]
}