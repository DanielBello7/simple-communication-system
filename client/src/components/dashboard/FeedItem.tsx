


import { useContext } from "react";
import { DataContext } from "../../context/MainContext";
import toUpperFirst from '../../lib/toUpperFirst';
import { PostTextType, PostMediaType, PostType } from "../../types/PostType.type"; 

export type FeedItemProps = {
  index: number,
  selected: number,
  handleClick: (id: number)=> void,
  post: PostTextType | PostMediaType
}

export default function FeedItem({ index, selected, handleClick, post }: FeedItemProps) {
  const { theme } = useContext(DataContext);
  const fullname = `${toUpperFirst(post.createdBy.first_name)} ${toUpperFirst(post.createdBy.last_name)}`;
  if (post.type === PostType.MEDIA){
    return (
      <div key={index} 
           className={`col-11 mb-3 post ${theme.title==='light'&&'border rounded-3'} ${selected===index?"active":""} ${theme.background}`} 
           id='chat' 
           data-bs-toggle="collapse" 
           data-bs-target="#sidebarMenu" 
           aria-controls="sidebarMenu" 
           onClick={() => handleClick(index)}>
      <div className={`card h-100 ${theme.title==='dark'?'border-0':'border-light'} ${theme.background}`}>
        <div className={`card-header text-primary`}>{post.createdBy.email}</div>
        <img src={require(`../../img/${post.media}`)} className={`card-img-top`} alt="post"/>
        <div className={`card-body ${theme.background} ${theme.text}`}>
          <h5 className="card-title">{fullname}</h5>
          <p className="card-text">{post.text}</p>
        </div>
        <div className={`card-footer ${theme.title==='dark'?'bg-black bg-opacity-25':'bg-light'}`}>
          <small className="text-muted">{post.date.toDateString()}</small>
        </div>
      </div>
      </div>
    )
  }
  else return (
    <div key={index}  
         className={`card border-black mb-3 col-11 ${theme.background} ${theme.text} post ${selected===index&& "active"}`} 
         id='chat' 
         data-bs-toggle="collapse" 
         data-bs-target="#sidebarMenu" 
         aria-controls="sidebarMenu" 
         onClick={() => handleClick(index)}>
    <div className="card-header text-primary">{post.createdBy.email}</div>
    <div className="card-body">
      <h5 className="card-title">{fullname}</h5>
      <p className="card-text">{post.text}</p>
    </div>
    <div className={`card-footer bg-light text-muted ${theme.title==='dark'?'bg-black bg-opacity-25':'bg-light'}`}>
      <small>{post.date.toDateString()}</small>
    </div>
    </div>
  )
}