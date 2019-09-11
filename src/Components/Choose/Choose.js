import React from 'react';
import PropTypes from 'prop-types';

const Choose = props => {
  const { teams } = props;
  return (
    <div className="choose">
      <div className="choose__selected">
        <div className="step">
          1. Select your team
        </div>
        <div className="choose__selected-team-text">
          <span>Washington Redskins</span>
        </div>
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
                      <div key={`${t.shortName}${t.id}`} className={`division__team division__team--${t.shortName}`} />
                    ))}
                  </div>
                </div>
              ))}
              <div className="division">
                <span>
                  South
                </span>
                <div className="division__teams">
                  <div className="division__team division__team--texans" />
                  <div className="division__team division__team--colts" />
                  <div className="division__team division__team--jaguars" />
                  <div className="division__team division__team--titans" />
                </div>
              </div>
              <div className="division">
                <span>
                  East
                </span>
                <div className="division__teams">
                  <div className="division__team division__team--bills" />
                  <div className="division__team division__team--dolphins" />
                  <div className="division__team division__team--jets" />
                  <div className="division__team division__team--patriots" />
                </div>
              </div>
              <div className="division">
                <span>
                  West
                </span>
                <div className="division__teams">
                  <div className="division__team division__team--broncos" />
                  <div className="division__team division__team--chiefs" />
                  <div className="division__team division__team--raiders" />
                  <div className="division__team division__team--chargers" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Choose.propTypes = {

};

export default Choose;
