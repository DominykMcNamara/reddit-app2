import React from "react";
import RedditLogo from "../assets/reddit-4.svg";
import { Searchbar } from "../features/posts/Searchbar";

export const Header = () => {
  return (
    <div className="container-fluid py-5 h-25 bg-secondary   ">
      <div className="d-flex flex-row justify-content-between w-75 mx-auto">
        <img
          id="logo"
          className="img-fluid"
          src={RedditLogo}
          alt="Reddit's logo"
        />
        <Searchbar />
      </div>
    </div>
  );
};
