import React from 'react';
import PropTypes from 'prop-types';

const TeamNeeds = props => {
  const { positions, team } = props;
  return (
    <div className="team-needs__list">
      {positions.map(position => (
        position.need !== null
          ? (
            <div key={position.id} className="team-needs__need">
              <span className={`team-needs__need__label ${team}`}>{position.need}</span>
              <span className={
                position.isFilled
                ? `team-needs__need__check ${team} team-needs__need__check--is-filled`
                : `team-needs__need__check ${team}`
                }
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                <circle
                  className={
                    position.isFilled
                      ? `team-needs__outer-circle ${team} team-needs__outer-circle--is-filled`
                      : `team-needs__outer-circle ${team}`
                  }
                  fill="none"
                  stroke="#808080"
                  strokeWidth=".5"
                  strokeMiterlimit="10"
                  cx="11"
                  cy="11"
                  r="10"
                />
              </svg>
            </div>
          )
        : null
      ))}
    </div>
  )
}

TeamNeeds.propTypes = {
  positions: PropTypes.array,
}

export default TeamNeeds;
