import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import { db } from "../firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Guest",
      username: "guest124542",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src=""
            alt=""
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
