


import { useContext } from "react";
import { DataContext } from "../context/MainContext";
import { PostsContext } from "../context/PostsContext";
import { Modal } from "bootstrap";
import { Screen } from "../types/GeneralTypes.types";

export default function UserPostsModal() {
  const { theme, setActiveScreen } = useContext(DataContext);
  const { state, selectActivePost } = useContext(PostsContext);
  
  const handleClick = (id: string) => {
    const element_1 = document.getElementById("userPostsModal")!;
    const modal_1 = Modal.getOrCreateInstance(element_1, {keyboard: false});
    selectActivePost(id);
    modal_1.hide();
    return setActiveScreen(Screen.GENERAL);
  }

  const posts = state.map((post, index) => {
    return (
      <div className="list-group-item list-group-item-action d-flex py-3 px-2 w-100" 
         aria-current="true" 
         style={{cursor: 'pointer'}}
         key={index}
         onClick={() => handleClick(post._id)}>
      <div className="col-1 d-flex align-items-center">
      <img src={require('../img/IMG_1719.jpg')} alt="twbs" width="30px" height="30px" className="rounded-circle" /> 
      </div>
      <div className="col-11 d-flex px-2 justify-content-between">
      <div className="col-9">
        <h6 className="mb-0 fw-bold">{post.createdBy.email}</h6>
        <p className="mb-0 opacity-75 text-truncate">{post.text? post.text : "Post"}</p>
      </div>
      <small className="col-3 opacity-50 text-nowrap text-end">{post.date.toLocaleString("en-us", {dateStyle: 'short'})}</small>
      </div>
      </div>
    )
  });

  return (
    <div className="modal fade text-dark" 
         id="userPostsModal"
         data-bs-keyboard="false"
         tabIndex={-1}
         aria-labelledby="userPostsModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className={`modal-header ${theme.title==='dark'&&'text-white bg-primary'}`}>
      <h5 className="modal-title" id="userPostsModalLabel h2">My Posts</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
      <div className="list-group">
      {posts}
      </div>
      </div>
      
      <div className="modal-footer">
      <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
    </div>
    </div>
  )
}