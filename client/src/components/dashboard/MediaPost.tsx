


import toUpperFirst from "../../lib/toUpperFirst";
import { Post } from "../../types/PostType.type";
type MediaPostProps = { post: Post }

export default function MediaPost(props: MediaPostProps) {
  const fullname = `${toUpperFirst(props.post.createdBy.first_name)} ${toUpperFirst(props.post.createdBy.last_name)}`;
  return (
    <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-7">
      <img src={require(`../../img/${props.post.media}`)} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-5">
      <div className="card-body">
        <h5 className="card-title text fw-bold">{fullname}</h5>
        <h6 className="card-title text-primary">{props.post.createdBy.email}</h6>
        <p className="card-text">{props.post.text}</p>
        <p className="card-text"><small className="text-muted">{props.post.date.toDateString()}</small></p>

        <div className="w-100 d-flex flex-row">
          <ul className="list-group col-6">
          <li className="list-group-item d-flex justify-content-between align-items-center hover-1 p-2">
          <small>Likes</small>
          <span className="badge bg-primary rounded-pill">{props.post?.likes}</span>
          </li>
          </ul>

          <ul className="list-group col-6 mx-1">
          <li className="list-group-item d-flex justify-content-between align-items-center hover-1 p-2">
          <small>Dislikes</small>
          <span className="badge bg-primary rounded-pill">{props.post?.dislikes}</span>
          </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}