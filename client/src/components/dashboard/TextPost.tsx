


import { Post } from "../../types/PostType.type";
import toUpperFirst from "../../lib/toUpperFirst";
type TextPostProps = { post: Post | null | undefined }

export default function TextPost(props: TextPostProps){
  const fullname = `${toUpperFirst(props.post?.createdBy.first_name)} ${toUpperFirst(props.post?.createdBy.last_name)}`;
  return (
    <div className="card mb-3">
    <h5 className="card-header fw-bold">{fullname}</h5>
    <div className="card-body">
      <h5 className="card-title text-primary">{props.post?.createdBy.email}</h5>
      <p className="card-text">{props.post?.text}</p>
      <p className="card-text text-muted">
        <small>{props.post?.date.toDateString()}</small>
      </p>

      <div className="w-100 d-flex flex-row">
        <ul className="list-group col-5 col-lg-3">
        <li className="list-group-item d-flex justify-content-between align-items-center hover-1 p-2">
        <small>Likes</small>
        <span className="badge bg-primary rounded-pill">{props.post?.likes}</span>
        </li>
        </ul>

        <ul className="list-group col-5 col-lg-3 mx-3">
        <li className="list-group-item d-flex justify-content-between align-items-center hover-1 p-2">
        <small>Dislikes</small>
        <span className="badge bg-primary rounded-pill">{props.post?.dislikes}</span>
        </li>
        </ul>
      </div>
    </div>
    </div>
  )
}