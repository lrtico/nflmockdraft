import React from 'react';
import PropTypes from 'prop-types';

const TeamRibbon = props => {
  const { team } = props;
  return (
    <div className={`team-ribbon ${team}`} />
  )
}

TeamRibbon.propTypes = {
  team: PropTypes.string,
}

export default TeamRibbon;
