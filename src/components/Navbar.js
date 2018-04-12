import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

/**
 * Component: Navbar
 */
class Navbar extends Component
{
  render() {
    return (
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a class="sidebar-toggle text-light mr-3"><i class="fa fa-bars"></i></a>
        <NavLink to="/" className="navbar-brand">
          <i class="fa fa-code-branch"></i>
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
