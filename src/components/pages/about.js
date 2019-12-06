import React from "react";
import profilePicture from "../../../static/assets/images/bio/danielcoalplant3.jpg";

export default function() {
  return (
    <div className='content-page-wrapper'>
      <div className="left-column" style={{
        background: "url(" + profilePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        
      </div>
      <div className='right-column'>
        <div className='right-column__header'>
          About Me
        </div>
        <div className='right-column__body'>
        I've had a long career in sales and have decided to change course into a more technical field. As a salesman I always strive to be a positive influence in all my interactions. Helping customers meet their needs within the companies I have represented has required a personal resourcefulness to find the answers as they are needed. Every day was an opportunity to improve upon the last as I built my knowledge base for addressing customer questions and concerns, easing the sales process. I feel these traits situate me to succeed in the full stack development environment. 
        </div>
        <div className='right-column__footer'>
          Resourceful, Continuous Improvement, Positive Attitude<br/><br/>
          Javascript, Python, MySQL, UML, React, Redux, Java, C#
        </div>
      </div>
    </div>
  );
}
