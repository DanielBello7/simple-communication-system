


import { useContext } from "react";
import { ContactsContext } from "../../context/ContactsContext";
import img from '../../img/user-circle.svg'
import toUpperFirst from "../../lib/toUpperFirst";
import { DataContext } from "../../context/MainContext";

export default function ContactScreen() {
  const contact = useContext(ContactsContext);
  const { theme, showToast } = useContext(DataContext);

  return (
    <div id='contact-screen'>
      <div id="contact-img" className="p-3">
      <div className="dp" style={{
        backgroundImage: `url('${img}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '200px',
        height: '200px'
      }}/>
      </div>

      <div className="w-100 d-flex flex-column flex-grow-1" id="contact-info">
        <h1>{`${toUpperFirst(contact.selectedContact.first_name)} ${toUpperFirst(contact.selectedContact.last_name)}`}</h1>
        <p>{contact.selectedContact.email}</p>
        
        <div className="btn-group btn-group-lg" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-primary" onClick={() => showToast('Not available yet')}>
            <i className="fas fa-phone" />
          </button>
          <button type="button" className="btn btn-outline-primary">
            <i className="fas fa-comment" />
          </button>
          <button type="button" 
                  className="btn btn-outline-primary" 
                  data-bs-toggle="modal" 
                  data-bs-target="#shareContactModal">
            <i className="fas fa-share" />
          </button>
        </div>

        <div className="w-100 mt-4 d-flex" id='following-info'>
          <ul className="list-group col-5">
          <li className={`list-group-item d-flex justify-content-between ${theme.background} ${theme.text} ${theme.title ==='dark'?'border-primary':''} mx-1 align-items-center`}>Contacts
          <span className="badge bg-primary rounded-pill">14</span>
          </li>
          </ul>

          <ul className="list-group col-4">
          <li className={`list-group-item d-flex justify-content-between align-items-center ${theme.background} ${theme.text} ${theme.title ==='dark'?'border-primary':''}`}>Posts
          <span className="badge bg-primary rounded-pill">14</span>
          </li>
          </ul>
        </div>


        <div className={`card border-primary mb-3 mt-4 ${theme.background}`} style={{maxWidth: "18rem"}}>
          <div className={`card-header ${theme.title ==='dark'?'bg-black bg-opacity-25':''}`}>Bio</div>
          <div className="card-body text-primary">
            <h5 className="card-title">@{contact.selectedContact.email}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  )
}