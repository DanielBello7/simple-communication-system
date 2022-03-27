


import { useContext } from "react";
import toUpperFirst from "../../lib/toUpperFirst";
import { MediaType } from "../../types/GeneralTypes.types";
import { PostMediaType } from "../../types/PostType.type";
import { DataContext } from '../../context/MainContext';

type MediaPostProps = {  
  post: PostMediaType
}

export default function MediaPost({ post }: MediaPostProps) {
  const { theme } = useContext(DataContext);
  const fullname = `${toUpperFirst(post.createdBy.first_name)} ${toUpperFirst(post.createdBy.last_name)}`;

  if (post.mediaType === MediaType.IMAGE)
  return (
    <div className={`card mb-3 ${theme.title==='light'?'bg-light border-light':'bg-black bg-opacity-25'}`}>
    <div className="row g-0">
      <div className="col-md-7">
      <img src={require(`../../img/${post.media}`)} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-5">
      <div className="card-body">
        <h5 className="card-title text fw-bold">{fullname}</h5>
        <h6 className="card-title text-primary">{post.createdBy.email}</h6>
        <p className="card-text">{post.text}</p>
        <p className="card-text"><small className="text-muted">{post.date.toDateString()}</small></p>

        <div className="w-100 d-flex flex-row">
          <ul className="list-group col-6">
          <li className={`list-group-item d-flex justify-content-between align-items-center hover-1 p-2 ${theme.background} ${theme.text} ${theme.title==='dark'&&'border-primary'}`}>
          <small>Likes</small>
          <span className="badge bg-primary rounded-pill">{post.likes}</span>
          </li>
          </ul>

          <ul className="list-group col-6 mx-1">
          <li className={`list-group-item d-flex justify-content-between align-items-center hover-1 p-2 ${theme.background} ${theme.text} ${theme.title==='dark'&&'border-primary'}`}>
          <small>Dislikes</small>
          <span className="badge bg-primary rounded-pill">{post.dislikes}</span>
          </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
  if (post.mediaType === MediaType.AUDIO) return <div>Audio Media</div>
  if (post.mediaType === MediaType.VIDEO) return <div>Video Media</div>
  else return <div>Invalid Post Type</div>
}