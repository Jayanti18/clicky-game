import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
  {/* <button type="button"> */}
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    
    </div>
    {/* </button> */}
  </div>
);

export default FriendCard;
