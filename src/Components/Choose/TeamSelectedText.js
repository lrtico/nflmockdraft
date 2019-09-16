import React from 'react';
import PropTypes from 'prop-types';

const TeamSelectedText = props => {
  const { teamNameText } = props;
  return (
    <div className="choose__selected-team-text">
      <span>{teamNameText}</span>
    </div>
  )
}

TeamSelectedText.propTypes = {
  teamNameText: PropTypes.string,
}

export default TeamSelectedText;
