


import { useContext } from "react";
import { Comment as CommentType } from "../../types/PostType.type";
import { DataContext } from '../../context/MainContext';

type CommentProps = {
  comment: CommentType,
  index: number
}

export default function Comment({ comment, index }: CommentProps) {
  const { theme } = useContext(DataContext);
  return (
    <li className={`list-group-item mb-2 rounded-3 ${theme.text} ${theme.title === 'dark'?'bg-black bg-opacity-50':''} d-flex flex-column align-items-left`} key={index}>
        <div className="text-primary d-flex flex-row justify-content-between">
          <div><small>{comment.createdBy.email}</small></div>
          <div><small className={theme.title==='dark'? 'text-light text-opacity-50':'text-dark'} style={{fontSize: '0.6rem'}}>
          {comment.date.toDateString()}
          </small></div>
        </div>

        <div className="fw-bold">{comment.createdBy.name}</div>

        <div className={`${theme.title==='dark'?'bg-black':'border bg-light'} rounded-3 p-2 mt-3 mb-3`}>
        <small>{comment.text}</small>
        </div>
      </li>
  )
}