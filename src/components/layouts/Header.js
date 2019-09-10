import React from 'react';
import './css/header.css';
import logo from './img/exacto_icon.png';
import profile from './img/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Header = ({name}) => {
  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt='exacto_icon' />
        </div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faBell} className='fa_bell' />
            <p>
              <span></span>
            </p>
          </li>
          <li>
            <img src={profile} alt='profile' />
          </li>
          <li>
            <a href='/'>{name}</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faAngleDown} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
