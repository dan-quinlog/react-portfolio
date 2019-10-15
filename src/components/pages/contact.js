import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactImage from "../../../static/assets/images/contact/contact.jpg";

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
            <FontAwesomeIcon className="icon" icon="user-ninja" /> Your Name
          </div>
          <div className="contact-detail">
            <FontAwesomeIcon className="icon" icon="phone-alt" /> Your Phone
          </div>
          <div className="contact-detail">
            <FontAwesomeIcon className="icon" icon="envelope" /> youremail@gmail.com
          </div>
          <div className="contact-detail">
            <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} /> LinkedIn
          </div>
          <div className="contact-detail">
            <FontAwesomeIcon className="icon" icon={['fab', "twitter-square"]} /> Twitter
          </div>
          <div className="contact-detail">
            <FontAwesomeIcon className="icon" icon={['fab', "instagram"]} /> instagram
          </div>
        </div>
      </div>
    </div>
  );
}
