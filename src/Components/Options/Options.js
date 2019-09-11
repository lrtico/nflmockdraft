import React from 'react';
import PropTypes from 'prop-types';

const Options = props => {
  return (
    <div className="options-wrapper">
      <div className="options">
        <div className="options__team-ribbon ravens" />
        <div>
          <div className="step">
            2. How many rounds would you like to draft?
          </div>
          <div className="radios">
            <div className="radios__radio ravens">
              <input type="radio" name="rounds" value="1" />
              <span>1</span>
              <div className="radios__bg" />
            </div>
            <div className="radios__radio ravens">
              <input type="radio" name="rounds" value="2" />
              <span>2</span>
              <div className="radios__bg" />
            </div>
            <div className="radios__radio ravens">
              <input type="radio" name="rounds" value="3" />
              <span>3</span>
              <div className="radios__bg" />
            </div>
            <div className="radios__radio ravens">
              <input type="radio" name="rounds" value="4" />
              <span>4</span>
              <div className="radios__bg" />
            </div>
            <div className="radios__radio ravens">
              <input type="radio" name="rounds" value="5" />
              <span>5</span>
              <div className="radios__bg" />
            </div>
            <div className="radios__radio ravens">
              <input type="radio" name="rounds" value="6" />
              <span>6</span>
              <div className="radios__bg" />
            </div>
            <div className="radios__radio ravens">
              <input type="radio" name="rounds" value="7" />
              <span>7</span>
              <div className="radios__bg" />
            </div>
          </div>
          <div className="step">
            3. Which big board would you like to use?
          </div>
          <div className="radios">
            <div className="radios__radio ravens">
              <input type="radio" name="board" value="Walter Football" />
              <span>Walter Football</span>
              <div className="radios__bg" />
            </div>
            <div className="radios__radio ravens">
              <input type="radio" name="board" value="Gil Brandt" />
              <span>Gil Brandt</span>
              <div className="radios__bg" />
            </div>
            <div className="radios__radio ravens">
              <input type="radio" name="board" value="Scouts, Inc." />
              <span>Scouts, Inc.</span>
              <div className="radios__bg" />
            </div>
            <div className="radios__radio ravens">
              <input type="radio" name="board" value="Mel Kiper, Jr." />
              <span>Mel Kiper, Jr.</span>
              <div className="radios__bg" />
            </div>
            <div className="radios__radio ravens">
              <input type="radio" name="board" value="NFL Countdown" />
              <span>NFL Countdown</span>
              <div className="radios__bg" />
            </div>
            <div className="radios__radio ravens">
              <input type="radio" name="board" value="Daniel Jeramiah" />
              <span>Daniel Jeramiah</span>
              <div className="radios__bg" />
            </div>
          </div>
          <div className="btn-wrapper ravens">
            <div className="options__btn btn-solid">Let's Draft!</div>
          </div>
        </div>
      </div>
      <div className="text-link ravens">
        <span className="arrow-left"></span>
        Repick your team
      </div>
    </div>
  )
}

Options.propTypes = {

};

export default Options;
