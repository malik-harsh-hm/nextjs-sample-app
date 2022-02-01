import React, { createElement, useState } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

const CommentBox = ({
  messageAuthor,
  messageAuthorAvatar,
  messageText,
  messageTimeStamp,
  replyCount
}) => {

 const getReplyCount = (replyCount)=>{
return (replyCount==='undefined' || replyCount===null || typeof replycount === 'undefined') ? '0': replyCount;
  }
  const actions = [<span key="comment-basic-reply-to">{getReplyCount(replyCount)} Replies</span>];

  return (
    <Comment
      actions={actions}
      author={<a>{messageAuthor}</a>}
      avatar={
        <Avatar src="https://joeschmoe.io/api/v1/random" alt={messageAuthor} />
      }
      content={<p>{messageText}</p>}
      datetime={
        <Tooltip title={messageTimeStamp}>
          <span>{messageTimeStamp}</span>
        </Tooltip>
      }
    />
  );
};

export default CommentBox;
