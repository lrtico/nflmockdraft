import React from 'react';
import PropTypes from 'prop-types';
import TeamRibbon from '../TeamRibbon/TeamRibbon';
import Step from '../Step/Step';
import TeamSelectedText from './TeamSelectedText';
import TableHeader from '../Tables/TableHeader';
import TableRow from '../Tables/TableRow';
import TeamNeeds from './TeamNeeds';
import PlayersFilter from './PlayersFilter';
import Toast from '../Toast/Toast';

const Simulator = props => {
  const { 
    team, teamSelectedText, teamSelected, availablePlayers, playersTable,
    userPicksTable, picksTable, selectedPlayers, roundOne, onTheClock, filterPlayers
  } = props;
  const positions = teamSelected[0].positionNeeds;
  console.log("positionNeeds", teamSelected);
  console.log("positions", positions);
  return (
    <div className="simulator-wrapper">
      <div className="simulator">
        <TeamRibbon team={team} />
        <div>
          <div className="team-needs">
            <TeamSelectedText team={team} teamNameText={teamSelectedText} />
            <Step label="Team needs" />
            <TeamNeeds positions={positions} team={team} />
          </div>
          <div className="tables">
            <div className="tables__players">
              <PlayersFilter team={team} filterPlayers={filterPlayers} />
              <Step label="Available players" classes="table-name" />
              <div className="players__table">
                <TableHeader headerRow={playersTable} />
                <TableRow players={availablePlayers} />
              </div>
            </div>
            <div className="tables__user-picks">
              <div className={`tables__user-picks__team-logo ${team}`} />
              <Step label="Your picks" classes="table-name" />
              <div className="players__table">
                <TableHeader headerRow={userPicksTable} />
                <TableRow players={selectedPlayers} />
              </div>
            </div>
            <div className="tables__picks">
              <Step label="Round 1 picks" classes="table-name" />
              <div className="players__table">
                <TableHeader headerRow={picksTable} />
                <TableRow players={roundOne} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast msg="You're on the clock!" onTheClock={onTheClock} />
    </div>
  )
}

Simulator.propTypes = {
  positionNeeds: PropTypes.object,
  team: PropTypes.string,
  teamSelected: PropTypes.object,
  teamSelectedText: PropTypes.string,
  playersTable: PropTypes.array,
  userPicksTable: PropTypes.array,
  picksTable: PropTypes.array,
  availablePlayers: PropTypes.array,
  selectedPlayers: PropTypes.array,
  roundOne: PropTypes.array,
  filterPlayers: PropTypes.array,
};

export default Simulator;
