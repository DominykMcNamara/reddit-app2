import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetPostsQuery } from "../../app/redditApi";

export const PostList = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetPostsQuery();

  useEffect(() => console.log(data));

  let content;
  if (isLoading) {
    content = <h1>Loading....</h1>;
  } else if (data) {
    content = data.data.children.map((post) => (
      <ul>
        {" "}
        <li key={post.data.id}>{post.data.id}</li>
      </ul>
    ));
  } else {
    content = <h1>{error}</h1>;
  }

  return <section>{content}</section>;
};
