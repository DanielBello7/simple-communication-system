


import { Comment as CommentType } from "../../types/PostType.type";

type CommentProps = {
  comment: CommentType,
  index: number
}

export default function Comment({ comment, index }: CommentProps) {
  return (
    <li className="list-group-item d-flex flex-column align-items-left" key={index}>
        <div className="text-primary d-flex flex-row justify-content-between">
          <div><small>{comment.createdBy.email}</small></div>
          <div><small className="text-dark" style={{fontSize: '0.6rem'}}>
          {comment.date.toDateString()}
          </small></div>
        </div>

        <div className="fw-bold">{comment.createdBy.name}</div>

        <div className="border border-light bg-light rounded-3 p-2 mt-3 mb-3">
        <small>{comment.text}</small>
        </div>
      </li>
  )
}