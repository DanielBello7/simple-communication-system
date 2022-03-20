


import { useRef } from 'react';

type CommentInputProp = {
  type: 'large-screen' | 'mobile-screen'
}

export default function CommentInput({ type }: CommentInputProp) {
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const handleComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(commentRef.current?.value);
    event.currentTarget.reset();
  }

  return (
    <form className={
      type === 'mobile-screen'
      ? "w-100 d-flex border border-black rounded-3 d-block d-lg-none mb-3"
      : "w-100 d-flex border border-black"
    }
          onSubmit={handleComment}>
      <div className="form-floating w-100">
      <textarea className="form-control border-0" 
                placeholder="Leave a comment here"
                ref={commentRef} 
                required
                id="floatingTextarea2"></textarea>
      <label htmlFor="floatingTextarea2">Comment</label>
      </div>

      <button className="btn btn-outline-light text-dark chat-sub-but">
      <i className="fas fa-paper-plane" />
      </button>
    </form>
  )
}