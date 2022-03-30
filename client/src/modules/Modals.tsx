


import React from 'react';
import AlertModal from './AlertModal';
import LogoutModal from './LogoutModal';
import NewPostModal from './NewPostModal';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';
import EditProfileModal from './EditProfileModal';
import SettingsModal from './SettingsModal';
import MoreInfoModal from './MoreInfoModal';
import DeleteConversationModal from './DeleteConversationModal';
import SharePostModal from './SharePostModal';
import ShareContactModal from './ShareContactModal';
import ImageViewerModal from './ImageViewerModal';

export default function Modals() {
  return (
    <React.Fragment>
      <AlertModal />
      <LogoutModal />
      <NewContactModal />
      <NewPostModal />
      <NewConversationModal />
      <EditProfileModal />
      <SettingsModal />
      <MoreInfoModal />
      <DeleteConversationModal />
      <SharePostModal />
      <ShareContactModal />
      <ImageViewerModal />
    </React.Fragment>
  )
}