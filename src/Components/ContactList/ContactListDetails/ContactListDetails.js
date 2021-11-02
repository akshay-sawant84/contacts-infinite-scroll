import React from "react";
import "./ContactListDetails.css";

const ContactListDetails = ({ name, email, phone, profileImg }) => {
  return (
    <div className="contact_list-details">
      <div className="card">
        <img className="avatar" src={profileImg} alt="avatar" />
        <div className="details">
          <h3>{name}</h3>
          <p>📧 {email}</p>
          <p>📱 {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactListDetails;
