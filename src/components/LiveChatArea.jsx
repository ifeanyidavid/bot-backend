import React from 'react';
import Ionicon from 'react-ionicons';
import LiveChatSection from './LiveChatSection';

require('../styles/livechat.css');

const LiveChatArea = () => (
  <div className="live-chat-area">
    <header className="live-chat-header">
      <p className="live-chat-heading">Live chat</p>
      <div className="custom-select">
        <span>All</span>
        <Ionicon icon="md-arrow-dropdown" fontSize="16px" color="rgb(0, 0, 0)" />
      </div>
    </header>
    <main className="livechat_body">
      <LiveChatSection
        name="Ade Adelekan"
        time="23 minutes"
        accountType="Premier"
        issue="Account Reactivation"
        accNo="38853486849"
      />
      <LiveChatSection
        name="Marco Botton"
        time="23 minutes"
        accountType="Gold"
        issue="Cash Refund"
        accNo="38853486849"
      />
    </main>
  </div>
);

export default LiveChatArea;
