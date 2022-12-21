import React, { useEffect } from "react";
import { useGetPostsQuery } from "../../app/redditApi";
import { Post } from "./Post";

export const PostList = () => {
  const { data, error, isLoading } = useGetPostsQuery();

  useEffect(() => console.log(data));

  let content;
  if (isLoading) {
    content = <h1>Loading....</h1>;
  } else if (data) {
    content = data.data.children.map((post) => (
      <ul key={post.data.id}>
        {" "}
        <Post post={post.data} />
      </ul>
    ));
  } else {
    content = <h1>{error}</h1>;
  }

  return <section>{content}</section>;
};
