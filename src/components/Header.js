import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <ul>
        <li><NavLink to="/"
          exact={true}
          activeClassName="is-active">Dashboard</NavLink></li>
        <li><NavLink to="/create"
          activeClassName="is-active">Add an expense</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
