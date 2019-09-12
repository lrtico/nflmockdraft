import React from 'react';
import PropTypes from 'prop-types';

const Boards = props => {
  const { boards, team } = props;
  return (
    <div className="radios">
      {boards.map(b => (
        <div className={`radios__radio ${team}`}>
          <input type="radio" name="board" value={b.name} />
          <span>{b.name}</span>
          <div className="radios__bg" />
        </div>
      ))}
    </div>
  )
}

Boards.propTypes = {
  boards: PropTypes.array,
  team: PropTypes.string,
}

export default Boards;
