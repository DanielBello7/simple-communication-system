


import { useState, useContext } from 'react';
import { Screen } from './Dashboard';
import { PostsContext } from '../../context/PostsContext';
import { PostType } from "../../types/PostType.type";
import toUpperFirst from '../../lib/toUpperFirst';
import ComponentLoader from '../ComponentLoader';

type FeedTabProps = {
  setActiveScreen: React.Dispatch<React.SetStateAction<Screen>>
}


export default function FeedTab(props: FeedTabProps) {
  const [feedLoading, setFeedLoading] = useState(false);
  const [selected, setSelected] = useState<number>(0);
  const posts = useContext(PostsContext);

  const handleClick = (post: number) => {
    props.setActiveScreen(Screen.POST);
    setSelected(post);
    posts?.setSelectedPost(post);
  }

  const chatsOutput = posts?.state.map((post, index) => {
    const fullname = `${toUpperFirst(post.createdBy.first_name)} ${toUpperFirst(post.createdBy.last_name)}`;
    if (post.type === PostType.MEDIA){
      return (
        <div className={`col-11 mb-3 post ${selected === index ? "active" : ""}`} key={index} id='chat' onClick={() => handleClick(index)}>
        <div className="card h-100">
          <div className="card-header text-primary">{post.createdBy.email}</div>
          <img src={require(`../../img/${post.media}`)} className="card-img-top" alt="post"/>
          <div className="card-body">
            <h5 className="card-title">{fullname}</h5>
            <p className="card-text">{post.text}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{post.date.toDateString()}</small>
          </div>
        </div>
        </div>
      )
    }
    else return (
      <div className={`card border-black mb-3 col-11 post ${selected === index ? "active" : ""}`} key={index} id='chat' onClick={() => handleClick(index)}>
      <div className="card-header text-primary">{post.createdBy.email}</div>
      <div className="card-body text-dark">
        <h5 className="card-title">{fullname}</h5>
        <p className="card-text">{post.text}</p>
      </div>
      <div className="card-footer bg-light text-muted">
        <small>{post.date.toDateString()}</small>
      </div>
      </div>
    )
  });
  return (
    <ul className="nav w-100 h-100 d-flex flex-column overflow-scroll" id="scroll-container">
      { feedLoading ? <ComponentLoader /> : chatsOutput }
    </ul>
  )
} 