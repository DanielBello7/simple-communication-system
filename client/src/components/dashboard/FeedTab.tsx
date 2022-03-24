


import { useState, useContext } from 'react';
import { Screen } from './Dashboard';
import { PostsContext } from '../../context/PostsContext';
import { PostType } from "../../types/PostType.type";
import toUpperFirst from '../../lib/toUpperFirst';
import ComponentLoader from '../ComponentLoader';
import { DataContext } from '../../context/MainContext';

type FeedTabProps = {
  setActiveScreen: React.Dispatch<React.SetStateAction<Screen>>
}


export default function FeedTab(props: FeedTabProps) {
  const [feedLoading, setFeedLoading] = useState(false);
  const [selected, setSelected] = useState<number>(0);
  const posts = useContext(PostsContext);
  const dataContext = useContext(DataContext);

  const handleClick = (post: number) => {
    props.setActiveScreen(Screen.POST);
    setSelected(post);
    posts?.setSelectedPost(post);
  }

  const chatsOutput = posts?.state.map((post, index) => {
    const fullname = `${toUpperFirst(post.createdBy.first_name)} ${toUpperFirst(post.createdBy.last_name)}`;
    if (post.type === PostType.MEDIA){
      return (
        <div key={index} 
             className={`col-11 mb-3 post ${dataContext.theme.title==='dark'?'':'border rounded-3'} ${selected === index?"active":""} ${dataContext.theme.background}`} 
             id='chat' 
             data-bs-toggle="collapse" 
						 data-bs-target="#sidebarMenu" 
						 aria-controls="sidebarMenu" 
             onClick={() => handleClick(index)}>
        <div className={`card h-100 ${dataContext.theme.title === 'dark'? 'border-0':'border-light'} ${dataContext.theme.background}`}>
          <div className={`card-header text-primary`}>{post.createdBy.email}</div>
          <img src={require(`../../img/${post.media}`)} className={`card-img-top`} alt="post"/>
          <div className={`card-body ${dataContext.theme.background} ${dataContext.theme.text}`}>
            <h5 className="card-title">{fullname}</h5>
            <p className="card-text">{post.text}</p>
          </div>
          <div className={`card-footer ${dataContext.theme.title==='dark'?'bg-black bg-opacity-25': 'bg-light'}`}>
            <small className="text-muted">{post.date.toDateString()}</small>
          </div>
        </div>
        </div>
      )
    }
    else return (
      <div key={index}  
           className={`card border-black mb-3 col-11 ${dataContext.theme.background} ${dataContext.theme.text} post ${selected === index ? "active" : ""}`} 
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
      <div className={`card-footer bg-light text-muted ${dataContext.theme.title==='dark'?'bg-black bg-opacity-25': 'bg-light'}`}>
        <small>{post.date.toDateString()}</small>
      </div>
      </div>
    )
  });
  return (
    <ul className="nav w-100 h-100 d-flex flex-column overflow-scroll" id="scroll-container">
      { feedLoading ? <ComponentLoader /> : chatsOutput }
      <div className={`position-sticky bottom-0 end-0`}>
      <button className='btn bg-primary mb-3 shadow rounded-circle p-0 text-white' 
              style={{width: '50px', height: '50px'}}
              data-bs-toggle="modal" 
              data-bs-target="#newPostModal"
              id="floatingAction">
      <i className='fas fa-plus fa-sm' />
      </button>  
      </div>
    </ul>
  )
} 