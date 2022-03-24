


import React, { useReducer, useState } from 'react';
import { Post } from '../types/PostType.type';
import { posts_data } from '../temp/Posts';


export type PostsPropsType = {
  children: React.ReactNode
}

export enum ActionTypes { CREATE, LIKE, UNLIKE, COMMENT, REPORT }

export type PostsContextType = {
  state: Post[],
  dispatch: React.Dispatch<ReducerActionType>,
  selectedPost: Post | null,
  setSelectedPost: React.Dispatch<React.SetStateAction<number>>
}

export type ReducerActionType = {
  type: ActionTypes.COMMENT | ActionTypes.CREATE | ActionTypes.LIKE | ActionTypes.UNLIKE | ActionTypes.REPORT,
  payload: string,
  post?: Post
}

function reducer(state: Post[], action: ReducerActionType) {
  switch (action.type){
    case ActionTypes.CREATE:
      return state;
    case ActionTypes.LIKE:
      return state;
    case ActionTypes.UNLIKE:
      return state;
    case ActionTypes.COMMENT:
      return state;
    case ActionTypes.REPORT:
      return state;
    default:
      return state;
  }
}

const initialState: Post[] = posts_data;

export const PostsContext = React.createContext<PostsContextType>({} as PostsContextType);

export function PostsContextProvider(props: PostsPropsType) {
  const [selectedPost, setSelectedPost] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PostsContext.Provider value={{
      state,
      dispatch,
      selectedPost: state[selectedPost],
      setSelectedPost
    }}>
      {props.children}
    </PostsContext.Provider>
  )
}

export const PostsContextConsumer = PostsContext.Consumer;