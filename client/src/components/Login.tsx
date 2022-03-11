


import { useRef, useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Login() {
  const userContext = useContext(UserContext);

  const emaiRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = emaiRef.current?.value;
    const password = passwordRef.current?.value;
    await userContext?.LoginUser(email, password);
  }
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" 
               required 
               ref={emaiRef}
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