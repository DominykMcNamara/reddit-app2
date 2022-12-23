import React from "react";
import RedditLogo from "../assets/reddit-4.svg";
import { Searchbar } from "./SearchBar";
import { useSelector } from "react-redux";
import { selectCurrentPosts } from "../features/posts/postsSlice";
export const Header = () => {
  const currentSub = useSelector(selectCurrentPosts);
  return (
    <div className="container-fluid py-5 h-25">
      <div id="header" className="d-flex justify-content-between w-100 mx-auto">
        <img
          id="logo"
          className="img-fluid"
          src={RedditLogo}
          alt="Reddit's logo"
        />
        <h4 className="text-dark text-bold">RedditMinimal</h4>

        <Searchbar />
      </div>
      <>
        <h2 className="mt-5 text-muted sub">r/{currentSub}</h2>
      </>
    </div>
  );
};
