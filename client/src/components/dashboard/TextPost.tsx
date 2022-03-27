


import { useContext } from "react";
import { PostTextType } from "../../types/PostType.type";
import toUpperFirst from "../../lib/toUpperFirst";
import { DataContext } from '../../context/MainContext';

type TextPostProps = { 
  post: PostTextType
}

export default function TextPost({ post }: TextPostProps){
  const { theme } = useContext(DataContext);
  const fullname = `${toUpperFirst(post.createdBy.first_name)} ${toUpperFirst(post.createdBy.last_name)}`;

  return (
    <div className={`card mb-3 ${theme.title==='dark'&&'bg-black bg-opacity-25'}`}>
    <h5 className={`card-header fw-bold ${theme.title==='dark'&&'bg-black'}`}>{fullname}</h5>
    <div className="card-body">
      <h5 className="card-title text-primary">{post.createdBy.email}</h5>
      <p className="card-text">{post.text}</p>
      <p className="card-text text-muted">
        <small>{post.date.toDateString()}</small>
      </p>

      <div className="w-100 d-flex flex-row">
        <ul className={`list-group col-5 col-lg-3 ${theme.title ==='dark'?'border border-primary':''}`}>
        <li className={`list-group-item d-flex justify-content-between align-items-center ${theme.background} ${theme.text} hover-1 p-2`}>
        <small>Likes</small>
        <span className="badge bg-primary rounded-pill">{post.likes}</span>
        </li>
        </ul>

        <ul className={`list-group col-5 col-lg-3 mx-3 ${theme.title ==='dark'&&'border border-primary'}`}>
        <li className={`list-group-item d-flex justify-content-between align-items-center ${theme.background} ${theme.text} hover-1 p-2`}>
        <small>Dislikes</small>
        <span className="badge bg-primary rounded-pill">{post.dislikes}</span>
        </li>
        </ul>
      </div>
    </div>
    </div>
  )
}