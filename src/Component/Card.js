import React from "react";
import "../Component/CardStyle.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="thumbnail-image">
        <img src={item["thumbnail-Url"]} alt={item.title} />
        <div className="channel">
          <img src={item["channelLogoUrl"]} alt={item.channelName} />
          <p>{item.channelName}</p>
        </div>
      </div>
      <div className="card-body">
        <p>{item.title}</p>
        <p>Likes: {item.likes}</p>
        <p>Views: {item.views}</p>
      </div>
    </div>
  );
};

export default Card;
