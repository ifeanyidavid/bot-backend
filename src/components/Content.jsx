import React from 'react';
import LiveChatArea from './LiveChatArea';
import ChatArea from './ChatArea';

require('../styles/content.css');

const Content = () => (
  <main>
    <LiveChatArea />
    <ChatArea />
  </main>
);

export default Content;
