import React from 'react';
import PropTypes from 'prop-types';

const PlayersFilter = props => {
  const { team, filterPlayers } = props;
  return (
    <div className="players__filter">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.8 16.8">
        <polygon className={team} points="16.1 0.7 0.7 0.7 5.6 8 5.6 8 5.6 16.1 11.1 16.1 11.1 8 11.2 8 " />
        <polyline className={team} points="4.9 3.3 7.8 7.4 7.8 13.2 "/>
      </svg>
      <ul className={`players__filters ${team}`}>
        {
          filterPlayers.map(filter => (
            <li
              key={`${filter.id}-${filter.position}`}
              className={filter.isFiltering ? "players__filters--filtering" : ""}
            >
              {filter.position}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

PlayersFilter.propTypes = {
  team: PropTypes.string,
  filterPlayers: PropTypes.array,
}

export default PlayersFilter;
