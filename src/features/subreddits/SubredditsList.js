import React, { useEffect } from "react";
import { useGetSubRedditsQuery } from "../../app/redditApi";
import { SubReddit } from "./SubReddit";
export const SubredditsList = () => {
  const { data, isLoading, error } = useGetSubRedditsQuery();
  useEffect(() => (data ? console.log(data) : console.log("hello")));

  let content;
  if (isLoading) {
    content = <h1>Loading...</h1>;
  } else if (data) {
    content = data.data.children.map((sub) => (
      <ul key={sub.data.id}>
        <SubReddit subReddit={sub.data} />
      </ul>
    ));
  } else {
    content = <h1>{error}</h1>;
  }
  return <aside>{content}</aside>;
};
