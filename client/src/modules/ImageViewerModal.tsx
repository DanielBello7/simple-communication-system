


import { useContext } from "react";
import { DataContext } from "../context/MainContext";

export default function ImageViewerModal() {
  const { theme, modalImage } = useContext(DataContext);
  return (
    <div className="modal fade" id="imageViewerModal"
         data-bs-backdrop="static"
         data-bs-keyboard="false"
         tabIndex={-1}
         aria-labelledby="imageViewerModal" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered text-dark">
    <div className={`modal-content ${theme.title==="dark"&&'bg-dark'}`}>
      <div className="modal-body p-0">
        {
          modalImage 
          ? <img src={require(`../img/${modalImage}`)} alt="img" className="modal-img" />
          : null
        }
      </div>
      <div className={`modal-footer ${theme.title==='dark'&&'bg-dark border-dark'}`}>
      <button type="button" className="btn btn-primary btn-sm" data-bs-dismiss="modal">Close</button>
      </div>
      </div>
    </div>
    </div>
  )
}