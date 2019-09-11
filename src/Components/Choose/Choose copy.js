import React from 'react';
import PropTypes from 'prop-types';

const Choose = props => {
  const { choose } = props;
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
        <div className="conferences__conference">
          <span>
            AFC
          </span>
          <div className="divisions">
            <div className="division">
              <span>
                North
              </span>
              <div className="division__teams">
                <div className="division__team division__team--ravens" />
                <div className="division__team division__team--bengals" />
                <div className="division__team division__team--browns" />
                <div className="division__team division__team--steelers" />
              </div>
            </div>
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
        <div className="conferences__conference">
          <span>
            NFC
          </span>
          <div className="divisions">
            <div className="division">
              <span>
                North
              </span>
              <div className="division__teams">
                <div className="division__team division__team--bears" />
                <div className="division__team division__team--lions" />
                <div className="division__team division__team--packers" />
                <div className="division__team division__team--vikings" />
              </div>
            </div>
            <div className="division">
              <span>
                South
              </span>
              <div className="division__teams">
                <div className="division__team division__team--falcons" />
                <div className="division__team division__team--panthers" />
                <div className="division__team division__team--saints" />
                <div className="division__team division__team--buccaneers" />
              </div>
            </div>
            <div className="division">
              <span>
                East
              </span>
              <div className="division__teams">
                <div className="division__team division__team--cowboys" />
                <div className="division__team division__team--giants" />
                <div className="division__team division__team--eagles" />
                <div className="division__team division__team--redskins" />
              </div>
            </div>
            <div className="division">
              <span>
                West
              </span>
              <div className="division__teams">
                <div className="division__team division__team--cardinals" />
                <div className="division__team division__team--rams" />
                <div className="division__team division__team--49ers" />
                <div className="division__team division__team--seahawks" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Choose.propTypes = {

};

export default Choose;
