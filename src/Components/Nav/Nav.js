import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = props => {
  const { team } = props;
  return (
    <div className="nav">
      <Link to="/" className={`nav__item ${team}`}>
        <svg className="nav__home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.1 19">
          <path class={team} d="M9.4 0L0 9.4h1.7V19h15.4V9.4h1.9L9.4 0zM7.6 17.7V12h3.8v5.7H7.6zM15.8 17.7h-3.1v-6c0-0.6-0.5-1-1-1H7.3c-0.6 0-1 0.5-1 1v6H3.1V8.2l6.3-6.3 6.5 6.2V17.7z"/>
          <path class={team} d="M6.8 6.7c0 1.5 1.2 2.8 2.8 2.8 1.5 0 2.8-1.2 2.8-2.8S11 4 9.5 4C8 4 6.8 5.2 6.8 6.7zM9.5 5.3c0.8 0 1.4 0.6 1.4 1.4s-0.6 1.4-1.4 1.4c-0.8 0-1.4-0.6-1.4-1.4S8.7 5.3 9.5 5.3z"/>
        </svg>
        <div className={`nav__label ${team}`}>Home</div>
      </Link>
      <Link to="/options" className={`nav__item ${team}`}>
        <svg className="nav__restart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.1 19">
          <path class={team} d="M3.1 13.4l-1.1 0.7c0.1 0.2 0.3 0.4 0.4 0.6l1.1-0.8C3.3 13.8 3.2 13.6 3.1 13.4z"/>
          <path class={team} d="M5.8 17.7c0.5 0.2 0.9 0.4 1.4 0.6L7.6 17c-0.4-0.1-0.8-0.3-1.2-0.5L5.8 17.7z"/>
          <path class={team} d="M3.3 15.9c0.4 0.4 0.8 0.7 1.2 1l0.8-1.1c-0.4-0.3-0.7-0.5-1-0.9L3.3 15.9z"/>
          <path class={team} d="M17.5 9.4l1.3 0c0-0.5-0.1-1-0.2-1.5l-1.3 0.2C17.4 8.5 17.5 8.9 17.5 9.4z"/>
          <path class={team} d="M13.9 16l0.7 1.1c0.4-0.3 0.8-0.6 1.2-0.9l-0.9-1C14.6 15.5 14.3 15.8 13.9 16z"/>
          <path class={team} d="M15.9 14.3l1 0.8c0.3-0.4 0.6-0.8 0.8-1.3l-1.2-0.6C16.4 13.5 16.1 13.9 15.9 14.3z"/>
          <path class={team} d="M9.7 17.3c-0.3 0-0.6 0-0.9 0l-0.1 1.3c0.3 0 0.6 0.1 1 0.1 0.2 0 0.4 0 0.6 0l-0.1-1.3C10.1 17.2 9.9 17.3 9.7 17.3z"/>
          <path class={team} d="M17.1 12l1.2 0.4c0.2-0.5 0.3-1 0.4-1.5l-1.3-0.2C17.3 11.1 17.2 11.5 17.1 12z"/>
          <path class={team} d="M11.5 17.1l0.3 1.3c0.5-0.1 1-0.3 1.5-0.5l-0.5-1.2C12.4 16.8 11.9 17 11.5 17.1z"/>
          <path class={team} d="M17.9 5.6c-1.5-3.1-4.7-5.2-8.2-5.2 -3.4 0-6.4 1.9-8 4.8L1.6 4 0.3 4.2l0.6 3.9 4-1.5L4.4 5.4 2.8 6c1.3-2.6 3.9-4.3 6.9-4.3 3 0 5.7 1.7 7 4.4l0 0c0.1 0.2 0.2 0.4 0.2 0.6l1.2-0.5C18.1 6.1 18 5.8 17.9 5.6"/>
        </svg>
        <div className={`nav__label ${team}`}>Restart</div>
      </Link>
    </div>
  )
}

Nav.propTypes = {
  team: PropTypes.string,
}

export default Nav;
