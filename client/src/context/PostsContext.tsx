


import React, { useReducer, useState } from 'react';
import { PostTextType, PostMediaType } from '../types/PostType.type';
import { posts_data } from '../temp/Posts';

export enum ActionTypes { CREATE, LIKE, UNLIKE, COMMENT, REPORT }

export type PostsPropsType = {
  children: React.ReactNode
}

export type PostsContextType = {
  state: (PostMediaType | PostTextType)[],
  dispatch: React.Dispatch<ReducerActionType>,
  selectedPost: (PostMediaType | PostTextType) | null,
  setSelectedPost: React.Dispatch<React.SetStateAction<number>>,
  activePost: PostTextType | PostMediaType | null,
  selectActivePost: (id: string) => void
}

export type ReducerActionType = {
  type: ActionTypes.COMMENT | ActionTypes.CREATE | ActionTypes.LIKE | ActionTypes.UNLIKE | ActionTypes.REPORT,
  payload: string,
  post?: (PostMediaType | PostTextType)
} 

function reducer(state: (PostMediaType | PostTextType)[], action: ReducerActionType) {
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

const initialState: (PostMediaType | PostTextType)[] = posts_data;

export const PostsContext = React.createContext<PostsContextType>({} as PostsContextType);


export function PostsContextProvider(props: PostsPropsType) {
  const [selectedPost, setSelectedPost] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [activePost, setActivePost] = useState<PostTextType | PostMediaType | null>(null);

  const selectActivePost = (id: string): void => {
    const selected = state.find(post => post._id === id);
    if (selected) return setActivePost(selected);
  }

  return (
    <PostsContext.Provider value={{
      state,
      activePost,
      selectActivePost,
      dispatch,
      selectedPost: state[selectedPost],
      setSelectedPost
    }}>
      {props.children}
    </PostsContext.Provider>
  )
}

export const PostsContextConsumer = PostsContext.Consumer;