


import { useRef, useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Login() {
  const userContext = useContext(UserContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    await userContext?.LoginUser(email, password);
    event.currentTarget.reset();
  }
  
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" 
               required 
               ref={emailRef}
               name='email'
               autoComplete='off'
               placeholder="email" />
        <input type="password" 
               required 
               ref={passwordRef}
               name="password"
               placeholder="password" />
        <button>Sign In</button>
      </form>
    </div>
  )
}