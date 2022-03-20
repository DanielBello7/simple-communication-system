


import { useContext, useState } from "react";
import { PostsContext } from "../../context/PostsContext";
import { PostType } from "../../types/PostType.type";
import MediaPost from "./MediaPost";
import TextPost from "./TextPost";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import ComponentLoader from "../ComponentLoader";

export default function PostScreen() {
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);

  const posts = useContext(PostsContext);

  const comments = posts?.selectedPost?.comments?.map((comment, index) => {
    return <Comment comment={comment} index={index} key={index}/>
  });

  return (
    <div className="w-100 h-100 d-flex flex-row overflow-hidden mb-3 border border-light">
      <div className="col-12 col-lg-8 h-100 overflow-scroll p-1">
        {
          postLoading 
          ? <ComponentLoader />
          : posts?.selectedPost?.type === PostType.MEDIA 
          ? <MediaPost post={posts.selectedPost}/> 
          : <TextPost post={posts?.selectedPost}/>
        }
        <CommentInput type='mobile-screen'/>
        <div className="accordion d-block d-lg-none" id="accordionExample">
          <div className="accordion-item">
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
          <div className="accordion-body p-0">
            <ul className="list-group w-100 d-flex flex-grow-1 overflow-scroll">
            { 
              commentsLoading 
              ? <ComponentLoader />
              : posts?.selectedPost?.comments ? comments : "" 
            }
            </ul>
          </div>
          </div>
          </div>
        </div>

      </div>
      <div className="col-0 col-lg-4 h-100 d-flex flex-column p-1 border border-light">
        <ul className="list-group w-100">
        <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
        <strong>Comments</strong>
        <span className="badge bg-primary rounded-pill">{posts?.selectedPost?.comments?.length}</span>
        </li>
        </ul>

        <ul className="list-group w-100 d-flex flex-grow-1 overflow-scroll">
        { 
          commentsLoading
          ? <ComponentLoader />
          : posts?.selectedPost?.comments ? comments : "" 
        }
        </ul>

        <CommentInput type='large-screen'/>
      </div>
    </div>
  )
}