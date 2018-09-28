import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux"
import {startLogout} from "../actions/auth.js"


export const Header = ({startLogout}) => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <ul>
        <li><NavLink to="/dashboard"
          exact={true}
          activeClassName="is-active">Dashboard</NavLink></li>
        <li><NavLink to="/create"
          activeClassName="is-active">Add an expense</NavLink></li>
      </ul>
      <button onClick={startLogout}>Logout</button>
    </nav>
  </header>
);


const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header);
