import React from 'react';
import PropTypes from 'prop-types';

const ButtonText = props => {
  const { label, team } = props;
  return (
    <div className={`text-link ${team}`}>
      <span className="arrow-left"></span>
      {label}
    </div>
  )
}

ButtonText.propTypes = {
  label: PropTypes.string,
  team: PropTypes.string,
}

export default ButtonText;
