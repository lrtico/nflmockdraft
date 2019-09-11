import React from 'react';
import PropTypes from 'prop-types';

const Simulator = props => {
  return (
    <div className="simulator-wrapper">
      <div className="simulator">
        <div className="team-ribbon team-ribbon--redskins" />
        <div>
          <div className="team-needs">
            <div className="team-needs__team-name redskins">Washington Redskins</div>
            <div className="step">Team needs</div>
            <div className="team-needs__list">
              <div className="team-needs__need">
                <span className="team-needs__need__label redskins">OT</span>
                <span className="team-needs__need__check team-needs__need__check--is-filled redskins"></span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><circle class="team-needs__outer-circle team-needs__outer-circle--is-filled redskins" fill="none" stroke="#808080" stroke-width=".5" stroke-miterlimit="10" cx="11" cy="11" r="10"></circle></svg>
              </div>
              <div className="team-needs__need">
                <span>TE</span>
                <span className="team-needs__need__check"></span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><circle class="team-needs__outer-circle" fill="none" stroke="#808080" stroke-width=".5" stroke-miterlimit="10" cx="11" cy="11" r="10"></circle></svg>
              </div>
              <div className="team-needs__need">
                <span>ILB</span>
                <span className="team-needs__need__check"></span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><circle class="team-needs__outer-circle" fill="none" stroke="#808080" stroke-width=".5" stroke-miterlimit="10" cx="11" cy="11" r="10"></circle></svg>
              </div>
              <div className="team-needs__need">
                <span>WR</span>
                <span className="team-needs__need__check"></span>
                <span className="team-needs__need__number">2</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><circle class="team-needs__outer-circle" fill="none" stroke="#808080" stroke-width=".5" stroke-miterlimit="10" cx="11" cy="11" r="10"></circle></svg>
              </div>
              <div className="team-needs__need">
                <span>S</span>
                <span className="team-needs__need__check"></span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><circle class="team-needs__outer-circle" fill="none" stroke="#808080" stroke-width=".5" stroke-miterlimit="10" cx="11" cy="11" r="10"></circle></svg>
              </div>
            </div>
          </div>
          <div className="tables">
            <div className="tables__players">
              <div className="players__filter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.8 16.8">
                  <polygon class="st0" points="16.1 0.7 0.7 0.7 5.6 8 5.6 8 5.6 16.1 11.1 16.1 11.1 8 11.2 8 "/>
                  <polyline class="st1" points="4.9 3.3 7.8 7.4 7.8 13.2 "/>
                </svg>
                <ul class="players__filters">
                  <li>ALL</li>
                  <li>QB</li>
                  <li>RB</li>
                  <li>WR</li>
                  <li>TE</li>
                  <li>OT</li>
                  <li>G</li>
                  <li>C</li>
                  <li>DE</li>
                  <li>DT</li>
                  <li>ILB</li>
                  <li>OLB</li>
                  <li>S</li>
                  <li>CB</li>
							  </ul>
              </div>
              <div className="step table-name">Available players</div>
              <div className="players__table">
                <div className="table-header">
                  <div className="table__overall-rank table-header--is-sorted">OR</div>
                  <div className="table__position">Pos</div>
                  <div className="table__name">Name</div>
                  <div className="table__school">School</div>
                  <div className="table__player-rank">PR</div>
                </div>
                <div className="table__rows">
                  <div className="table__row">
                    <div className="table__overall-rank">1</div>
                    <div className="table__position">QB</div>
                    <div className="table__name">Tua Tagovailoa</div>
                    <div className="table__school">Alabama</div>
                    <div className="table__player-rank">1</div>
                  </div>
                  <div className="table__row table__row--select-open">
                    <div className="table__row__select-player-btns">
                      <button className="btn-wrapper"><span className="btn-solid">Yes!</span></button>
                      <button>
                        <span className="btn-solid__label">Cancel</span>
                        <div className="btn-fill-bg"><span className="btn-fill-bg__fill" /></div>
                      </button>
                    </div>
                    <div className="table__row__select-player">
                      Select
                      <span className="table__row__select-player-name"> Tua Tagovailoa</span>
                      ?
                    </div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">2</div>
                    <div className="table__position">Edge</div>
                    <div className="table__name">A.J. Epenesa</div>
                    <div className="table__school">Iowa</div>
                    <div className="table__player-rank">1</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">3</div>
                    <div className="table__position">DL</div>
                    <div className="table__name">Derrick Brown</div>
                    <div className="table__school">Auburn</div>
                    <div className="table__player-rank">1</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">4</div>
                    <div className="table__position">WR</div>
                    <div className="table__name">Jerry Jeudy</div>
                    <div className="table__school">Alabama</div>
                    <div className="table__player-rank">1</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">5</div>
                    <div className="table__position">Edge</div>
                    <div className="table__name">Raekwon Davis</div>
                    <div className="table__school">Alabama</div>
                    <div className="table__player-rank">2</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">6</div>
                    <div className="table__position">OT</div>
                    <div className="table__name">Tristan Wirfs</div>
                    <div className="table__school">Iowa</div>
                    <div className="table__player-rank">1</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">7</div>
                    <div className="table__position">OT</div>
                    <div className="table__name">Andrew Thomas</div>
                    <div className="table__school">Georgia</div>
                    <div className="table__player-rank">2</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">8</div>
                    <div className="table__position">QB</div>
                    <div className="table__name">Justin Herbert</div>
                    <div className="table__school">Oregon</div>
                    <div className="table__player-rank">2</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">9</div>
                    <div className="table__position">S</div>
                    <div className="table__name">Grant Delpit</div>
                    <div className="table__school">LSU</div>
                    <div className="table__player-rank">1</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">10</div>
                    <div className="table__position">CB</div>
                    <div className="table__name">Bryce Hall</div>
                    <div className="table__school">Virginia</div>
                    <div className="table__player-rank">1</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">11</div>
                    <div className="table__position">CB</div>
                    <div className="table__name">Kristian Fulton</div>
                    <div className="table__school">LSU</div>
                    <div className="table__player-rank">2</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">12</div>
                    <div className="table__position">QB</div>
                    <div className="table__name">Jake Fromm</div>
                    <div className="table__school">Georgia</div>
                    <div className="table__player-rank">3</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">13</div>
                    <div className="table__position">Edge</div>
                    <div className="table__name">Chase Young</div>
                    <div className="table__school">Ohio State</div>
                    <div className="table__player-rank">3</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">14</div>
                    <div className="table__position">Edge</div>
                    <div className="table__name">Julian Okwara</div>
                    <div className="table__school">Notre Dame</div>
                    <div className="table__player-rank">4</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">15</div>
                    <div className="table__position">OT</div>
                    <div className="table__name">Walker Little</div>
                    <div className="table__school">Stanford</div>
                    <div className="table__player-rank">3</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">16</div>
                    <div className="table__position">WR</div>
                    <div className="table__name">Tee Higgins</div>
                    <div className="table__school">Clemson</div>
                    <div className="table__player-rank">2</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">17</div>
                    <div className="table__position">CB</div>
                    <div className="table__name">A.J. Terrell</div>
                    <div className="table__school">Clemson</div>
                    <div className="table__player-rank">3</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">18</div>
                    <div className="table__position">LB</div>
                    <div className="table__name">Isaiah Simmons</div>
                    <div className="table__school">Clemson</div>
                    <div className="table__player-rank">1</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">19</div>
                    <div className="table__position">Edge</div>
                    <div className="table__name">Terrell Lewis</div>
                    <div className="table__school">Alabama</div>
                    <div className="table__player-rank">5</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">20</div>
                    <div className="table__position">DL</div>
                    <div className="table__name">Javon Kinlaw</div>
                    <div className="table__school">South Carolina</div>
                    <div className="table__player-rank">2</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">21</div>
                    <div className="table__position">DL</div>
                    <div className="table__name">Rashard Lewis</div>
                    <div className="table__school">LSU</div>
                    <div className="table__player-rank">3</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">22</div>
                    <div className="table__position">RB</div>
                    <div className="table__name">Jonathan Taylor</div>
                    <div className="table__school">Wisconsin</div>
                    <div className="table__player-rank">1</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">23</div>
                    <div className="table__position">Edge</div>
                    <div className="table__name">Anfernee Jennings</div>
                    <div className="table__school">Alabama</div>
                    <div className="table__player-rank">6</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">24</div>
                    <div className="table__position">OT</div>
                    <div className="table__name">Trey Adams</div>
                    <div className="table__school">Washington</div>
                    <div className="table__player-rank">4</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">25</div>
                    <div className="table__position">CB</div>
                    <div className="table__name">CJ Henderson</div>
                    <div className="table__school">Florida</div>
                    <div className="table__player-rank">4</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">26</div>
                    <div className="table__position">G</div>
                    <div className="table__name">Ben Bredeson</div>
                    <div className="table__school">Michigan</div>
                    <div className="table__player-rank">1</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">27</div>
                    <div className="table__position">Edge</div>
                    <div className="table__name">Curtis Weaver</div>
                    <div className="table__school">Boise State</div>
                    <div className="table__player-rank">7</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">28</div>
                    <div className="table__position">G</div>
                    <div className="table__name">Alex Leatherwood</div>
                    <div className="table__school">Alabama</div>
                    <div className="table__player-rank">2</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">29</div>
                    <div className="table__position">OT</div>
                    <div className="table__name">Trey Smith</div>
                    <div className="table__school">Tennessee</div>
                    <div className="table__player-rank">5</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">30</div>
                    <div className="table__position">LB</div>
                    <div className="table__name">Paddy Fisher</div>
                    <div className="table__school">Northwestern</div>
                    <div className="table__player-rank">2</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">31</div>
                    <div className="table__position">TE</div>
                    <div className="table__name">Albert Okwuegbunam</div>
                    <div className="table__school">Missouri</div>
                    <div className="table__player-rank">1</div>
                  </div>
                  <div className="table__row">
                    <div className="table__overall-rank">32</div>
                    <div className="table__position">DL</div>
                    <div className="table__name">Lorenzo Neal</div>
                    <div className="table__school">Purdue</div>
                    <div className="table__player-rank">4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tables__user-picks">
              <div className="tables__user-picks__team-logo redskins" />
              <div className="step table-name">Your picks</div>
              <div className="players__table">
                <div className="table-header">
                  <div className="table__player-round">Rnd.</div>
                  <div className="table__player-round-number">#</div>
                  <div className="table__position">Pos</div>
                  <div className="table__name">Name</div>
                  <div className="table__school">School</div>
                  <div className="table__overall-rank table-header--is-sorted">OR</div>
                  <div className="table__player-rank">PR</div>
                </div>
                <div className="table__rows">
                  <div className="table__row">
                    <div className="table__player-round">1</div>
                    <div className="table__player-round-number">1</div>
                    <div className="table__position">QB</div>
                    <div className="table__name">Tua Tagovailoa</div>
                    <div className="table__school">Alabama</div>
                    <div className="table__overall-rank">1</div>
                    <div className="table__player-rank">1</div>
                  </div>
                  <div className="table__row">
                    <div className="table__player-round">2</div>
                    <div className="table__player-round-number">33</div>
                    <div className="table__position">CB</div>
                    <div className="table__name">Bryce Hall</div>
                    <div className="table__school">Virginia</div>
                    <div className="table__overall-rank">10</div>
                    <div className="table__player-rank">1</div>
                  </div>
                  <div className="table__row">
                    <div className="table__player-round">3</div>
                    <div className="table__player-round-number">66</div>
                    <div className="table__position">OT</div>
                    <div className="table__name">Walker Little</div>
                    <div className="table__school">Stanford</div>
                    <div className="table__overall-rank">15</div>
                    <div className="table__player-rank">3</div>
                  </div>
                  <div className="table__row">
                    <div className="table__player-round">4</div>
                    <div className="table__player-round-number">99</div>
                    <div className="table__position">Edge</div>
                    <div className="table__name">Terrell Lewis</div>
                    <div className="table__school">Alabama</div>
                    <div className="table__overall-rank">19</div>
                    <div className="table__player-rank">5</div>
                  </div>
                  <div className="table__row">
                    <div className="table__player-round">5</div>
                    <div className="table__player-round-number">122</div>
                    <div className="table__position">Edge</div>
                    <div className="table__name">Anfernee Jennings</div>
                    <div className="table__school">Alabama</div>
                    <div className="table__overall-rank">23</div>
                    <div className="table__player-rank">6</div>
                  </div>
                  <div className="table__row">
                    <div className="table__player-round">6</div>
                    <div className="table__player-round-number">155</div>
                    <div className="table__position">G</div>
                    <div className="table__name">Ben Bredeson</div>
                    <div className="table__school">Michigan</div>
                    <div className="table__overall-rank">26</div>
                    <div className="table__player-rank">1</div>
                  </div>
                  <div className="table__row">
                    <div className="table__player-round">7</div>
                    <div className="table__player-round-number">188</div>
                    <div className="table__position">G</div>
                    <div className="table__name">Alex Leatherwood</div>
                    <div className="table__school">Alabama</div>
                    <div className="table__overall-rank">28</div>
                    <div className="table__player-rank">2</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tables__picks">
              <div className="step table-name">Round <span>1</span> picks</div>
              <div className="players__table">
                <div className="table-header">
                  <div className="table__player-round-number">#</div>
                  <div className="table__position">Pos</div>
                  <div className="table__name">Name</div>
                </div>
                <div className="table__rows">
                  <div className="table__row">
                    <div className="tables__picks__team dolphins" />
                    <div className="table__player-round-number">1</div>
                    <div className="table__position">QB</div>
                    <div className="table__name">Tua Tagovailoa</div>
                  </div>
                  <div className="table__row">
                    <div className="tables__picks__team lions" />
                    <div className="table__player-round-number">2</div>
                    <div className="table__position">Edge</div>
                    <div className="table__name">A.J. Epenesa</div>
                  </div>
                  <div className="table__row">
                    <div className="tables__picks__team jaguars" />                    
                    <div className="table__player-round-number">3</div>
                    <div className="table__position">DL</div>
                    <div className="table__name">Derrick Brown</div>
                  </div>
                  <div className="table__row">
                    <div className="tables__picks__team redskins" />                    
                    <div className="table__player-round-number">4</div>
                    <div className="table__position">OT</div>
                    <div className="table__name">Tristan Wirfs</div>
                  </div>
                  <div className="table__row">
                    <div className="tables__picks__team jets" />                    
                    <div className="table__player-round-number">5</div>
                    <div className="table__position">Edge</div>
                    <div className="table__name">Raekwon Davis</div>
                  </div>
                  <div className="table__row">
                    <div className="tables__picks__team browns" />                    
                    <div className="table__player-round-number">6</div>
                    <div className="table__position">WR</div>
                    <div className="table__name">Jerry Jeudy</div>
                  </div>
                  <div className="table__row">
                    <div className="tables__picks__team texans" />                    
                    <div className="table__player-round-number">7</div>
                    <div className="table__position">OT</div>
                    <div className="table__name">Andrew Thomas</div>
                  </div>
                  <div className="table__row">
                    <div className="tables__picks__team bengals" />
                    <div className="table__player-round-number">8</div>
                    <div className="table__position">QB</div>
                    <div className="table__name">Justin Herbert</div>
                  </div>
                  <div className="table__row">
                    <div className="tables__picks__team cardinals" />
                    <div className="table__player-round-number">9</div>
                    <div className="table__position">S</div>
                    <div className="table__name">Grant Delpit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="toast toast--on-the-clock">
        <span>You are on the clock!</span>
      </div>
    </div>
  )
}

Simulator.propTypes = {

};

export default Simulator;
