


import { useContext } from "react";
import { DataContext } from "../context/MainContext";
import { ConversationsContext } from "../context/ConversationsContext";
import toUpperFirst from "../lib/toUpperFirst";
import img from '../img/img-1.jpg';
import img2 from '../img/users.svg';

export default function InfoModal() {
  const { theme } = useContext(DataContext);
  const { selectedConversation } = useContext(ConversationsContext);

  const recipient = selectedConversation.recipients.map(recipient => {
    if (typeof recipient === 'string') return recipient;
    return `${toUpperFirst(recipient.first_name)} ${toUpperFirst(recipient.last_name)}`;
  });

  const recipientEmail = selectedConversation.recipients.map(recipient => {
    if (typeof recipient === 'string') return recipient;
    return recipient.email;
  });

  const participants = selectedConversation.recipients.map((recipient, index) => {
    if (typeof recipient === 'string') return <li className="list-group-item" key={index}>{recipient}</li>
    return <li className="list-group-item" key={index}>{toUpperFirst(recipient.first_name)} {toUpperFirst(recipient.last_name)}</li>;
  })

  return (
    <div className="w-100 h-100 oveflow-scroll">
      <div className="col-12 d-flex justify-content-center">
      <img src={selectedConversation.recipients.length > 1 ? img2 : img} id="infoImg"/>
      </div>

      <div className="col-12 text-center my-3">
      <h3 className="fw-bold">{selectedConversation.groupName ? selectedConversation.groupName : recipient}</h3>
      </div>

      <div className={`col-12 mt-5 ${selectedConversation.recipients.length <= 1 && 'd-none'}`}>
      <h6 className="text-muted m-3 fw-bold">PARTICIPANTS</h6>
      <ul className="w-100 list-group">
      {participants}
      </ul>
      </div>

      <div className={`col-12 mt-0 d-flex justify-content-center ${selectedConversation.recipients.length > 1 && 'd-none'}`}>
      <div className={`card border-dark mb-3 mt-4`} style={{maxWidth: "18rem"}}>
        <div className={`card-header ${theme.title ==='dark'?'bg-black bg-opacity-25':''}`}>Bio</div>
        <div className="card-body text-dark">
        <h5 className="card-title">@{recipientEmail}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        </div>
      </div>
      </div>
    </div>
  )
}