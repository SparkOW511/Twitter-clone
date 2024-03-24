import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Spark Social" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1343504554801975296"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="SparkOW3"
          options={{ height: 400 }}
        />

      </div>
    </div>
  );
};

export default Widgets;
