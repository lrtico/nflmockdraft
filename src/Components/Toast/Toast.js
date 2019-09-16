import React from 'react';
import PropTypes from 'prop-types';

const Toast = props => {
  const { msg, onTheClock } = props;
  return (
    <div className={onTheClock ? "toast toast--on-the-clock toast--active" : "toast toast--on-the-clock"}>
      <span>{msg}</span>
    </div>
  )
}

Toast.propTypes = {
  msg: PropTypes.string,
  onTheClock: PropTypes.bool,
}

export default Toast;
