

import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function CreateAccount() {
  const userContext = useContext(UserContext);
  if (userContext?.user) return <Navigate to="/" replace />
  else return <div>Create Account</div>
}