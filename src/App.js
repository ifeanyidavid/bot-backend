import React from 'react';
import Sidemenu from './components/Sidemenu';
import LiveChatArea from './components/LiveChatArea';
import ChatArea from './components/ChatArea';

require('./styles/app.css');
require('./styles/external/external.min.css');
require('./styles/external/grid.min.css');
require('./styles/external/reboot.min.css');

const App = () => (
  <div className="appContainer">
    <Sidemenu />
    <LiveChatArea />
    <ChatArea />
  </div>
);

export default App;
