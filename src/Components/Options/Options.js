import React from 'react';
import PropTypes from 'prop-types';
import Boards from './Boards';
import ButtonArrow from '../Buttons/ButtonArrow';
import ButtonText from '../Buttons/ButtonText';
import Step from '../Step/Step';
import Rounds from './Rounds';
import TeamRibbon from '../TeamRibbon/TeamRibbon';

const Options = props => {
  const { boards, team, rounds } = props;
  return (
    <div className="options-wrapper">
      <div className="options">
        <TeamRibbon team={team} />
        <div>
          <Step label="2. How many rounds would you like to draft?" />
          <Rounds rounds={rounds} team={team} />
          <Step label="3. Which big board would you like to use?" />
          <Boards boards={boards} team={team} />
          <ButtonArrow label="Let's Draft!" team={team} />
        </div>
      </div>
      <ButtonText label="Repick your team" team={team} />
    </div>
  )
}

Options.propTypes = {
  boards: PropTypes.array,
  team: PropTypes.string,
  rounds: PropTypes.array,
};

export default Options;
