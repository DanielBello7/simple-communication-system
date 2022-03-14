


import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <React.Fragment>
      <div>Header</div>
      <Link to='/'>Home</Link>
      <br />
      <Link to="/sign-in">Sign In</Link>
      <br />
      <Link to="/sign-up">Sign Up</Link>
    </React.Fragment>
  )
}