import React, {useState} from "react";
import chatIcon from "../../assets/chat-square.svg";
import thumbsUp from "../../assets/hand-thumbs-up.svg";
import thumbsDown from "../../assets/hand-thumbs-down.svg";
import redditLogo from "../../assets/reddit-4.svg";
import { formatNumber } from "../../utils/formatNumber";
import { CommentList } from "../comments/CommentList";
import moment from 'moment';

export const Post = ({ post }) => {
    const [showCommentList, setShowCommentList] = useState(false);
  return (
    <>
      <article className="mx-auto card h-100 bg-secondary mt-2 mb-2 py-4">
        <div className="card-body text-start">
          <div className="d-flex flex-row">
            <aside className="d-flex flex-column">
              <img
                id="icon"
                src={thumbsUp}
                alt="Thumbs up icon"
                className="img-fluid"
              />
              <p className="my-1">{formatNumber(post.ups)}</p>
              <img
                id="icon"
                src={thumbsDown}
                alt="Thumbs down icon"
                className="img-fluid"
              />
            </aside>
            <h1 className="card-title fs-3 mx-3">{post.title}</h1>
          </div>
          <p className="text-muted mx-5 px-2">r/{post.subreddit}</p>
          {post.thumbnail !== "self" && post.thumbnail !== "default" ? (
            <picture className="d-flex justify-content-center border-bottom py-4">
              <img
                src={post.url}
              
                alt=""
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = redditLogo;
                }}
                className="img-fluid"
              />
            </picture>
          ) : (
            ""
          )}
           <div className="d-flex flex-row align-content-center justify-content-around my-4">
            <p className="text-success">{post.author}</p>
            <p>{moment.unix(post.created_utc).fromNow()}</p>
            <span>
              <img
                id="icon"
                src={chatIcon}
                alt="Square chat icon"
                onClick={() => setShowCommentList(!showCommentList)}
              />
              <p className="mx-2">{formatNumber(post.num_comments)}</p>
            </span>
          </div>
          <section>{showCommentList ? <CommentList showComments={showCommentList} permalink={post.permalink}/> : " "}</section>
        </div>
      </article>
    </>
  );
};
