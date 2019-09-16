import React from 'react';
import PropTypes from 'prop-types';
import Step from '../Step/Step';
import TeamSelectedText from './TeamSelectedText';
import ButtonArrow from '../Buttons/ButtonArrow';

const Choose = props => {
  const { teams, teamSelectedText, team } = props;
  return (
    <div className="choose">
      <div className="choose__selected">
        <Step label="1. Select your team" />
        <TeamSelectedText teamNameText={teamSelectedText} />
      </div>
      <div className="conferences">
        {teams.map((c, i) => (
          <div key={`${c.conference.toLowerCase()}${c.id}`} className="conferences__conference">
            <span>
              {c.conference}
            </span>
            <div className="divisions">
              {c.divisions.map(d => (
                <div key={`${teams[i].conference.toLowerCase()}${d.division.toLowerCase()}${d.id}`} className="division">
                  <span>
                    {d.division}
                  </span>
                  <div className="division__teams">
                    {d.teams.map(t => (
                      <div
                        key={`${t.shortName}${t.id}`}
                        className={`division__team division__team--${t.shortName}`}
                      >
                        {
                          team !== null && team === t.shortName
                          ? <ButtonArrow label="Next" team={team} />
                          : null
                        }
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Choose.propTypes = {
  teams: PropTypes.array,
};

export default Choose;
