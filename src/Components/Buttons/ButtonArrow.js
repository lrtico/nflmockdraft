import React from 'react';
import PropTypes from 'prop-types';

const ButtonArrow = props => {
  const { team, label } = props;
  return (
    <div className={`btn-wrapper ${team}`}>
      <div className="options__btn btn-solid">{label}</div>
    </div>
  )
}

ButtonArrow.propTypes = {
  label: PropTypes.string,
  team: PropTypes.string,
}

export default ButtonArrow;
