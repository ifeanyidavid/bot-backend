import React from 'react';
import { Icon } from '@blueprintjs/core';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';

require('../styles/chatarea.css');

const ChatArea = () => (
  <div className="chat">
    <header className="chatarea-header">
      <span className="d-flex align-items-center">
        <Icon icon="menu-closed" />
        <p>Chatbot center</p>
      </span>
      <p>Valerie Liberty</p>
    </header>
    <div className="chatarea">
      <div className="chatarea-body">
        <ChatBubble />
        <ChatBubble fromMe />
      </div>
    </div>
    <ChatInput />
  </div>
);

export default ChatArea;
