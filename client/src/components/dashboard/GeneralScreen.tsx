


import { useContext } from "react";
import { DataContext } from "../../context/MainContext";
import { Screen } from "../../types/GeneralTypes.types";
import { PostsContext } from "../../context/PostsContext";
import CommentInput from "./CommentInput";
import ComponentLoader from "../ComponentLoader";
import Comment from "./Comment";
import MediaPost from "./MediaPost";
import TextPost from "./TextPost";
import { PostType } from "../../types/PostType.type";

export default function GeneralScreen() {
  const { theme, setActiveScreen, commentsLoading, postLoading } = useContext(DataContext);
  const { activePost } = useContext(PostsContext);

  const comments = activePost?.comments.map((comment, index) => {
    return <Comment comment={comment} index={index} key={index}/>
  });

  return (
    <div className={`w-100 h-100 overflow-hidden d-flex flex-column mb-3 ${theme.title === 'dark'?'border-black':''}`}>
      <div className="w-100">
      <button className={`btn ${theme.text}`} 
              onClick={() => setActiveScreen(Screen.CHAT)}><i className="fas fa-arrow-left" /> Back
      </button>
      </div>

      <div className="w-100 d-flex flex-column flex-grow-1 overflow-scroll">
        <div className={`w-100 d-flex h-100 flex-row mb-0 ${theme.title === 'dark'?'border-black':'border'}`}>
            <div className="col-12 col-lg-8 h-100 overflow-scroll p-1">
            {
              postLoading 
              ? <ComponentLoader />
              : activePost?.type === PostType.MEDIA 
              ? <MediaPost post={activePost}/> 
              : activePost?.type === PostType.TEXT 
              ? <TextPost post={activePost}/>
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
                  : activePost?.comments ? comments : "" 
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
            <span className="badge bg-primary rounded-pill">{activePost?.comments.length}</span>
            </li>
            </ul>

            <ul className={`list-group w-100 d-flex my-2 flex-grow-1 ${theme.title==='dark'&&'bg-black bg-opacity-25'} overflow-scroll`}>
            { 
              commentsLoading
              ? <ComponentLoader />
              : activePost?.comments
              ? comments 
              : <p className="p-3">No comments yet</p>
            }
            </ul>

            <CommentInput type='large-screen'/>
          </div>
        </div>

      </div>
    </div>
  )
}