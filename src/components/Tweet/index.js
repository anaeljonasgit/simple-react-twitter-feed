import React from "react";

import "./style.css";

function Tweet(props) {
  return (
    <div className="Tweet">
      <div>
        <div className="tweet-user-image"></div>
        <p className="tweet-user-name">{props.user_name}</p>
      </div>
      <p className="tweet-content">{props.content}</p>
    </div>
  );
}

export default Tweet;
