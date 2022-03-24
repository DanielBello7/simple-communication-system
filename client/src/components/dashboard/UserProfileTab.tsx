


import { useState, useContext } from "react";
import ComponentLoader from "../ComponentLoader";
import { DataContext } from "../../context/MainContext";
import { UserContext } from "../../context/UserContext";
import img from '../../img/img-1.jpg';
import toUpperFirst from "../../lib/toUpperFirst";

export default function UserProfileTab() {
  const [profileLoading, setProfileLoading] = useState(false);
  const { theme } = useContext(DataContext);
  const { user } = useContext(UserContext);

  const fullname = `${toUpperFirst(user?.first_name)} ${toUpperFirst(user?.last_name)}`;

  if (profileLoading) return <ComponentLoader />
  else return (
    <div className={`w-100 h-100 d-flex flex-column align-items-center ${theme.text}`}>
      <div className="col-12 d-flex justify-content-center align-items-center">
      <img src={img} id='profile-dp' alt='dp' />
      </div>

      <div className="col-12 text-center">
      <h3 className="fw-bold m-0 mt-2">{fullname}</h3>
      <p className="text-primary h6">
        <small style={{fontSize: '0.8rem'}}>@{user?.email}</small>
      </p>
      </div>

      <div className="col-10 text-center mt-4 text-muted">
      <p>{user?.bio}</p> 
      </div>

      <div className="col-12 mt-4">
        <ul className="list-group list-group-flush w-100 list-group-horizontal-lg d-flex justify-content-center" >
          <li className={`list-group-item bg-light border-0 border-end ${theme.title==='dark'?'bg-black bg-opacity-25':'bg-light'} d-flex flex-column align-items-center justify-content-center px-4 ${theme.text}`}>
            <p className="m-0 p-0 h4 fw-bold">140</p>
            <p className="p-0 m-0" style={{fontSize: '0.7rem'}}>Contacts</p>
          </li>

          <li className={`list-group-item bg-light border-0 border-end d-flex ${theme.title==='dark'?'bg-black bg-opacity-25':'bg-light'} flex-column align-items-center justify-content-center px-4 ${theme.text}`}>
            <p className="m-0 p-0 h4 fw-bold">140</p>
            <p className="p-0 m-0" style={{fontSize: '0.7rem'}}>Following</p>
          </li>

          <li className={`list-group-item ${theme.title==='dark'?'bg-black bg-opacity-25':'bg-light'} border-0 d-flex flex-column align-items-center justify-content-center px-4 ${theme.text}`}>
            <p className="m-0 p-0 h4 fw-bold">140K</p>
            <p className="p-0 m-0" style={{fontSize: '0.7rem'}}>Followers</p>
          </li>
        </ul>
      </div>

      <div className="col-12 mt-5 text-center">
      <div className="btn-group me-2" role="group" aria-label="Second group">
        <button type="button" 
                className="btn btn-outline-primary"
                data-bs-toggle="modal" 
                data-bs-target="#editProfileModal">Edit Profile</button>
        <button type="button" className="btn btn-outline-primary">Posts</button>
      </div>
      </div>
    </div>
  )
}