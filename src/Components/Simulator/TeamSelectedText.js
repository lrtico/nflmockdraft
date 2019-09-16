import React from 'react';
import PropTypes from 'prop-types';

const TeamSelectedText = props => {
  const { team, teamNameText } = props;
  return (
    <div className={`team-needs__team-name ${team}`}>{teamNameText}</div>
  )
}

TeamSelectedText.propTypes = {
  label: PropTypes.string,
  team: PropTypes.string,
}

export default TeamSelectedText;
