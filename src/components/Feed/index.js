import React, { useState } from "react";

import Tweet from "../Tweet";

function Feed() {
  let [tweets, setTweets] = useState([
    {
      name: "Anael Jonas",
      content: "Hello, world!"
    },
    {
      name: "Doctor Who",
      content: "This is a good world."
    },
    {
      name: "Superman",
      content: "I'm not Clark Kent, it's a fake news!"
    },
    {
      name: "Batman",
      content: "Clark Kent is Superman"
    }
  ]);

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet user_name={tweet.name} content={tweet.content} />
      ))}
    </div>
  );
}

export default Feed;
