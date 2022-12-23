import React, { useEffect } from "react";
import { useGetPostsQuery } from "../../app/redditApi";
import { Post } from "./Post";
import { useSelector } from "react-redux";
import { selectCurrentPosts } from "./postsSlice";


export const PostList = () => {

  let currentPosts = useSelector(selectCurrentPosts)

  const { data, error, isLoading } = useGetPostsQuery(currentPosts);

  useEffect(() => console.log(currentPosts));

  let content;
  if (isLoading) {
    content = <p>Loading....</p>;
  } else if (data) {
    content = data.data.children.map((post) => (
      <ul key={post.data.id}>
        {" "}
        <Post post={post.data} />
      </ul>
    ));
  } else {
    content = <p>{error}</p>;
  }

  return <section className="w-100">{content}</section>;
};
