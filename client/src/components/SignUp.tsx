

import { useContext, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { DataContext } from '../context/MainContext';

export default function CreateAccount() {
  const userContext = useContext(UserContext);
  const dataContext = useContext(DataContext);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) 
      return dataContext.showAlert("Passowrds don't match");

    const userData = {
      email: emailRef.current?.value,
      first_name: firstNameRef.current?.value,
      last_name: lastNameRef.current?.value,
      password: passwordRef.current?.value,
    }
    
    await userContext?.createAccount(userData);

    event.currentTarget.reset();
  }

  if (userContext?.user) return <Navigate to="/" replace />
  else return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" 
               required 
               ref={firstNameRef}
               name='first_name'
               autoComplete='off'
               placeholder="first name" />
        <input type="text" 
               required 
               ref={lastNameRef}
               name='last_name'
               autoComplete='off'
               placeholder="last name" />
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
        <input type="password" 
               required 
               ref={confirmPasswordRef}
               name="confirm_password"
               placeholder="confirm password" />
        <button>Sign In</button>
      </form>
    </div>
  )
} 