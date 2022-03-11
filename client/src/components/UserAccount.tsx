


import React from 'react';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Default from './Default';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';

export default function UserAccount() {
  return (
    <React.Fragment>
    <Header />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/sign-up' element={<CreateAccount />} />
      <Route path='*' element={<Default />} />
    </Routes>
    <Footer />
    </React.Fragment>
  );
}