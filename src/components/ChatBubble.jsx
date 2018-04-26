import React, { Component } from 'react';

export default class ChatBubble extends Component {
  render() {
    const fromMe = this.props.fromMe ? 'fromMe' : '';
    const showAvatar = this.props.fromMe ? 'showAvatar' : '';
    return (
      <div>
        <div className={`chat-bubble-container ${fromMe}`}>
          <div className="chat-bubble-wrapper">
            <div className={`${showAvatar} bot-avatar`} />
            <div className="chat-bubble">
              <p>
                Leverage agile frameworks to provide a robust synopsis for high level overviews.
                Iterative approaches to corporate strategy foster collaborative thinking to further
                the overall value proposition
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
