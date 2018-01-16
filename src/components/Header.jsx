// @flow
import React from 'react';
import {Link} from 'react-router-dom';
import Routes from '../Routes';

const Header = () => (
  <div>
    <ul>
      <li><Link to={Routes.HOME}>Acasa</Link></li>
      <li><Link to={Routes.ABOUT}>Despre</Link></li>
    </ul>
  </div>
);

export default Header;