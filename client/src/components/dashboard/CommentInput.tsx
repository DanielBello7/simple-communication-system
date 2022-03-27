


import { useRef, useContext } from 'react';
import { DataContext } from '../../context/MainContext';

type CommentInputProp = {
  type: 'large-screen' | 'mobile-screen'
}

export default function CommentInput({ type }: CommentInputProp) {
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const { theme } = useContext(DataContext);

  const handleComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(commentRef.current?.value);
    event.currentTarget.reset();
  }

  return (
    <form className={
      type === 'mobile-screen'
      ? `w-100 d-flex border ${theme.title==='dark'&&'border-0'} rounded-3 d-block d-lg-none mb-3`
      : `w-100 d-flex border ${theme.title==='dark'&&'border-0'}`
    }
          onSubmit={handleComment}>
      <div className="form-floating w-100">
      <textarea className={`form-control border-0 ${theme.title==='dark'&&'bg-black bg-opacity-25'}`} 
                placeholder="Leave a comment here"
                ref={commentRef} 
                required
                style={{color: 'grey'}}
                id="floatingTextarea2"></textarea>
      <label htmlFor="floatingTextarea2">Comment</label>
      </div>

      <button className={`btn ${theme.text} ${theme.title === 'dark'?'bg-primary':'btn-outline-light'} chat-sub-but`}>
      <i className="fas fa-paper-plane" />
      </button>
    </form>
  )
}