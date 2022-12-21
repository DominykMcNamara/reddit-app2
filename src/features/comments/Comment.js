import React from "react";
import moment from 'moment';
import ReactMarkdown from "react-markdown";
export const Comment = ({ comment }) => {
  return (
    <div className="bg-primary px-2 py-2 my-1" id="comment">
      <div className="d-flex flex-row justify-content-between">
        <p className="text-success">{comment.author}</p>
        <i className="text-muted">{moment.unix(comment.created_utc).fromNow()}</i>
      </div>
      <ReactMarkdown children={comment.body} />
    </div>
  );
};
