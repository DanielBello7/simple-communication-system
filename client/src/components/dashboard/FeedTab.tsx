


import { useState, useContext } from 'react';
import ComponentLoader from '../ComponentLoader';
import FeedItem from './FeedItem';
import { Screen } from '../../types/GeneralTypes.types';
import { PostsContext } from '../../context/PostsContext';
import { DataContext } from '../../context/MainContext';


export default function FeedTab() {
  const [selected, setSelected] = useState<number>(0);
  const { state, setSelectedPost } = useContext(PostsContext);
  const { setActiveScreen, feedLoading } = useContext(DataContext);

  const handleClick = (post: number) => {
    setActiveScreen(Screen.POST);
    setSelected(post);
    setSelectedPost(post);
  }

  const chatsOutput = state.map((post, index) => {
    return <FeedItem handleClick={handleClick} 
                     index={index} 
                     key={index} 
                     post={post} 
                     selected={selected}/>
  });

  return (
    <ul className="nav w-100 h-100 d-flex flex-column overflow-scroll" id="scroll-container">
      { feedLoading ? <ComponentLoader /> : chatsOutput }
      <div className={`position-sticky w-100 ${state.length > 6 ? 'bottom-0' : 'top-100'} end-0`}>
      <button className='btn bg-primary mb-3 mx-2 shadow rounded-circle p-0 text-white' 
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