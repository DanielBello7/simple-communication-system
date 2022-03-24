


import React from 'react';
import AlertModal from './AlertModal';
import LogoutModal from './LogoutModal';
import NewPostModal from './NewPostModal';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';
import EditProfileModal from './EditProfileModal';

export default function Modals() {
  return (
    <React.Fragment>
    <AlertModal />
    <LogoutModal />
    <NewContactModal />
    <NewPostModal />
    <NewConversationModal />
    <EditProfileModal />
    </React.Fragment>
  )
}