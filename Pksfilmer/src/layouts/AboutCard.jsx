import React from 'react';
import './AboutCard.css'; // Import the CSS file for the effect

const AboutCard = (props) => {
  return (
    <div className="w-full lg:w-1/5 p-5 rounded-lg img-container">
      <img
        className="rounded-xl object-cover"
        src={props.img}
        alt="img"
      />
    </div>
  );
};

export default AboutCard;
