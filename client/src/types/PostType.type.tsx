


export enum PostType { TEXT, MEDIA }

export enum MediaType {AUIDO, VIDEO, IMAGE}

export type Comment = {
  text: string,
  date: Date,
  createdBy: {
    email: string,
    name: string
  }
}

export type Post = {
  _id: string,
  createdBy: {
    email: string, 
    first_name: string,
    last_name: string
  },
  text: string,
  type: PostType.TEXT | PostType.MEDIA, 
  media?: string,
  mediaType?: MediaType.AUIDO | MediaType.IMAGE | MediaType.VIDEO,
  date: Date,
  comments?: Comment[],
  likes: number,
  dislikes: number
}