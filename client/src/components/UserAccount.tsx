


import React from 'react';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Default from './Default';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';

export default function UserAccount() {
  return (
    <React.Fragment>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='*' element={<Default />} />
    </Routes>
    <Footer />
    </React.Fragment>
  );
}