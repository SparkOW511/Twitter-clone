import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1510966646265073679"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="2ez_community"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://discord.gg/2ez_community"}
          options={{ text: "#2ez is awesome", via: "spark" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
