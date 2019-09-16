import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const TableRow = props => {
  const { players } = props;
  return (
    <div className="table__rows">
      {
        players.map(player => (
          <div key={player.id} className={player.shouldSelect ? "table__row table__row--is-open" : "table__row"}>
            {
              player.logo !== undefined
                ? <div className={`tables__picks__team ${player.logo}`} />
                : null
            }
            {
              player.round !== undefined
                ? <div className="table__player-round">{player.round}</div>
                : null
            }
            {
              player.pickNumber !== undefined
                ? <div className="table__player-round-number">{player.pickNumber}</div>
                : null
            }
            <div className="table__position">{player.position}</div>
            <div className="table__name">{player.name}</div>
            {
              player.school !== undefined
                ? <div className="table__school">{player.school}</div>
                : null
            }
            {
              player.overallRank !== undefined
                ? <div className="table__overall-rank">{player.overallRank}</div>
                : null
            }
            {
              player.positionRank !== undefined
                ? <div className="table__player-rank">{player.positionRank}</div>
                : null
            }
            {
              player.shouldSelect
                ? <CSSTransition
                    in={player.shouldSelect}
                    classNames="table__row--select"
                    timeout={500}
                    unmountOnExit
                    appear
                    exit
                  >
                    <div className="table__row table__row--select-open">
                      <div className="table__row__select-player-btns">
                        <button className="btn-wrapper"><span className="btn-solid">Yes!</span></button>
                        <button>
                          <span className="btn-solid__label">Cancel</span>
                          <div className="btn-fill-bg"><span className="btn-fill-bg__fill" /></div>
                        </button>
                      </div>
                      <div className="table__row__select-player">
                        Select{' '}
                        <span className="table__row__select-player-name">{player.name}</span>
                        ?
                      </div>
                    </div>
                  </CSSTransition>
                : null
            }
          </div>
        ))
      }
    </div>
  )
}

TableRow.propTypes = {
  players: PropTypes.array,
}

export default TableRow;
