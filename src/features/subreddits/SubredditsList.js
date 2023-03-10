import React from "react";
import { useGetSubRedditsQuery } from "../../app/redditApi";
import { SubReddit } from "./SubReddit";

export const SubredditsList = () => {
  const { data, isLoading, error } = useGetSubRedditsQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (data) {
    content = data.data.children.map((sub) => (
      <ul key={sub.data.id}>
        <SubReddit subReddit={sub.data} />
      </ul>
    ));
  } else {
    content = <p>{error}</p>;
  }
  return (
    <aside id="subredditList">
      <h4 className="text-center">Subreddits</h4>
      {content}
    </aside>
  );
};
