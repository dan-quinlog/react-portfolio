import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactImage from "../../../static/assets/images/contact/contact.png";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactImage + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div className="right-column">
        <div className="contact-info">
          <div className="contact-detail">
            <FontAwesomeIcon className="icon" icon="user-ninja" />Daniel Quinlog
          </div>
          {/* <div className="contact-detail">
            <FontAwesomeIcon className="icon" icon="phone-alt" />801-687-9878
          </div> */}
          <div className="contact-detail">
            <FontAwesomeIcon className="icon" icon="envelope" />dan.quinlog@gmail.com
          </div>
          <div className="contact-detail">
            <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} />Linkedin
          </div>
          <div className="contact-detail">
            <FontAwesomeIcon className="icon" icon={['fab', "twitter-square"]} />Twitter
          </div>
          <div className="contact-detail">
            <FontAwesomeIcon className="icon" icon={['fab', "instagram"]} />Instagram
          </div>
        </div>
      </div>
    </div>
  );
}
