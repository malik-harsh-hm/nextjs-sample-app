import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CommentBox from "../commentBox/index";
import { slackService } from "../../../services/slackService";

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const [conversation, setConversation] = useState(null);

  let CHANNEL = "C031234FVM0";

  useEffect(() => {
    // async fetches conversation history
    async function fetchConversationHistory() {
      let response = await slackService.GetConversationHistory({
        channel: CHANNEL,
      });

      response = await response;
      if (response?.ok === true) {
        // set local states
        setConversation(response);
        setMessages(response?.messages);
      }
      else {
        let error = response?.error;
        console.log(error);
      }
    }
    fetchConversationHistory();
  }, []);

  return (
    <Fragment>
      {messages &&
        messages.map((message, index) => (
          <CommentBox
            key={index}
            messageAuthor={message.user}
            messageTimestamp={message.ts}
            messageText={message.text}
            replyCount = {message.reply_count}
          />
        ))}
    </Fragment>
  );
};

export default ChatContainer;
