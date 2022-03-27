


import { MediaType } from "./GeneralTypes.types"

export enum PostType { TEXT, MEDIA }

export type Comment = {
  text: string,
  date: Date,
  createdBy: { email: string, name: string }
}

type Post = {
  _id: string,
  createdBy: { email: string, first_name: string, last_name: string },
  date: Date,
  comments: Comment[],
  likes: number,
  dislikes: number
}

export interface PostTextType extends Post {
  text: string,
  type: PostType.TEXT
}

export interface PostMediaType extends Post {
  text?: string,
  type: PostType.MEDIA,
  mediaType: MediaType.AUDIO | MediaType.VIDEO | MediaType.IMAGE,
  media: string
}