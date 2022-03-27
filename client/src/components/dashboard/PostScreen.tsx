


import { useContext, useState } from "react";
import { PostsContext } from "../../context/PostsContext";
import { PostType } from "../../types/PostType.type";
import MediaPost from "./MediaPost";
import TextPost from "./TextPost";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import ComponentLoader from "../ComponentLoader";
import { DataContext } from "../../context/MainContext";

export default function PostScreen() {
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const { theme } = useContext(DataContext);
  const { selectedPost } = useContext(PostsContext);

  const comments = selectedPost?.comments.map((comment, index) => {
    return <Comment comment={comment} index={index} key={index}/>
  });
 
  return (
    <div className={`w-100 h-100 d-flex flex-row overflow-hidden mb-3 ${theme.title === 'dark'?'border-black':'border'}`}>
      <div className="col-12 col-lg-8 h-100 overflow-scroll p-1">
        {
          postLoading 
          ? <ComponentLoader />
          : selectedPost?.type === PostType.MEDIA 
          ? <MediaPost post={selectedPost}/> 
          : selectedPost?.type === PostType.TEXT 
          ? <TextPost post={selectedPost}/>
          : null
        }
        <CommentInput type='mobile-screen'/>
        <div className="accordion d-block d-lg-none" id="accordionExample">
          <div className={`accordion-item ${theme.title==='dark'&&'border-0'}`}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseOne" 
                    aria-expanded="true" 
                    aria-controls="collapseOne">Comments
            </button>
          </h2>
          <div id="collapseOne" 
               className="accordion-collapse collapse show" 
               aria-labelledby="headingOne" 
               data-bs-parent="#accordionExample">
          <div className={`accordion-body p-0 ${theme.background}`}>
            <ul className="list-group w-100 d-flex flex-grow-1 overflow-scroll">
            { 
              commentsLoading 
              ? <ComponentLoader />
              : selectedPost?.comments ? comments : "" 
            }
            </ul>
          </div>
          </div>
          </div>
        </div>

      </div>
      <div className={`col-0 col-lg-4 h-100 d-flex flex-column p-1 border ${theme.title==='light'?' border-light':'border-0'}`}>
        <ul className="list-group w-100">
        <li className={`list-group-item d-flex justify-content-between align-items-center ${theme.title==='dark'?'bg-black':'bg-light'} ${theme.text}`}>
        <strong>Comments</strong>
        <span className="badge bg-primary rounded-pill">{selectedPost?.comments.length}</span>
        </li>
        </ul>

        <ul className={`list-group w-100 d-flex my-2 flex-grow-1 ${theme.title==='dark'&&'bg-black bg-opacity-25'} overflow-scroll`}>
        { 
          commentsLoading
          ? <ComponentLoader />
          : selectedPost?.comments
          ? comments 
          : <p className="p-3">No comments yet</p>
        }
        </ul>

        <CommentInput type='large-screen'/>
      </div>
    </div>
  )
}