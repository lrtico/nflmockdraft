import React from 'react';
import PropTypes from 'prop-types';

const Rounds = props => {
  const { rounds, team } = props;
  return (
    <div className="radios">
      {rounds.map(r => (
        <div className={`radios__radio ${team}`}>
          <input type="radio" name="rounds" value={r.round} />
          <span>{r.round}</span>
          <div className="radios__bg" />
        </div>
      ))}
    </div>
  )
}

Rounds.propTypes = {
  rounds: PropTypes.array,
  team: PropTypes.string,
}

export default Rounds;
