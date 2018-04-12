import React, { Component } from 'react';

import $ from 'jquery';
import './Menu.css';

import MenuItem from './MenuItem';
import Data from '../data';

/**
 * Component: Menu
 */
class Menu extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      preparedMenu: null
    }
  }

  componentDidMount() {
    $('.sidebar-toggle').on('click', function () {
      $('.sidebar').toggleClass('toggled');
    });
    var active = $('.sidebar .active');
    if (active.length && active.parent('.collapse').length) {
      var parent = active.parent('.collapse');
      parent.prev('a').attr('aria-expanded', true);
      parent.addClass('show');
    }
  }

  componentWillMount() {
    const dataMenu = Data.menu;
    const preparedMenu = [];
    dataMenu.forEach(function (item) {
      preparedMenu.push(<MenuItem dataHref={item.href} dataIcon={item.icon} dataLabel={item.label} />);
    });
    this.setState({preparedMenu: preparedMenu});
  }

  render() {
    return (
      <nav class="sidebar bg-dark">
        <ul class="list-unstyled">
          {this.state.preparedMenu}
          <li><a href="https://github.com/prianto/artika-electron"><i class="fa fa-fw fa-cloud-download"></i> Download</a></li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
