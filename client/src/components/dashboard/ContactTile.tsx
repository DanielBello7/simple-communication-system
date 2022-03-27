


import { useContext } from "react";
import { GroupedContact } from "../../types/ContactsType.type"
import img from '../../img/user-circle.svg';
import toUpperFirst from '../../lib/toUpperFirst';
import { DataContext } from '../../context/MainContext';

type ContactTileProps = {
  contact: GroupedContact
  index: number,
  handleClick: (num: number) => void,
  selected: number | null
}

export default function ContactTile({ contact, index, handleClick, selected }: ContactTileProps) {
  const { theme } = useContext(DataContext);
  return (
    <li className={`nav-item p-3`} onClick={() => handleClick(contact.id)} id="chat" key={index}>
    <div className='row p-0 m-0 w-100' id="contact-2">
      <div className={`col-2 p-0 m-0`} id="contact-3">
      <div className='dp' style={{
           backgroundImage: `url('${img}')`,
           backgroundSize: 'cover',
           backgroundColor: theme.title==='dark'?'grey':'',
           backgroundPosition: 'center',
           width: '50px',
           height: '50px'
      }}/>
      </div>
      <div className={`col-10 px-xl-0 px-lg-4 px-md-4 nav-link p-0 m-0 ${selected === index ? "active" : ""}`} id='contact-1'
           aria-current={selected === index ? "page" : "false"}>
      <div className={`row p-0 m-0 ${theme.text}`} id="name-contact">
        {`${toUpperFirst(contact.first_name)} ${toUpperFirst(contact.last_name)}`}
      </div>
      <div className='row p-0 m-0' id="email-contact">{contact.email}</div>
      </div>
    </div>
    </li>
  )
}