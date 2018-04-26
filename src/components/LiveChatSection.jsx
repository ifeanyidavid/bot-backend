import React from 'react';
import PropTypes from 'prop-types';

const LiveChatSection = props => (
  <div className="livechat_body-section">
    <div className="livechat_body-top">
      <div className="user_avatar" />
      <div className="user_info">
        <div className="user_info-section">
          <p className="user_name">{props.name}</p>
          <p className="time">{props.time} ago</p>
        </div>
        <span className="actions">
          <p className="account-type">{props.accountType}</p>
          <span className="accept_btn">Accept</span>
          <span className="reject_btn">Reject</span>
        </span>
      </div>
    </div>
    <div className="conversation_details">
      <p>
        <span>Issue summary:</span> {props.issue}
      </p>
      <p>
        <span>Account number:</span> {props.accNo}
      </p>
    </div>
  </div>
);

LiveChatSection.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  accountType: PropTypes.string,
  issue: PropTypes.string,
  accNo: PropTypes.string
};

LiveChatSection.defaultProps = {
  name: '',
  time: '',
  accountType: '',
  issue: '',
  accNo: ''
};

export default LiveChatSection;
