import React, { Component } from 'react';
import DOMPurify from 'dompurify';

import './About.css';

import Data from '../data';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

/**
 * Component: About.Main
 */
class Main extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      preparedAbout: {}
    }
  }

  componentWillMount() {
    const dataAbout = Data.about;
    this.setState({preparedAbout: dataAbout});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <h1>{this.state.preparedAbout.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.state.preparedAbout.content) }} />
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Component: About.Page
 */
class Page extends Component
{
  render() {
    return (
      <div>
        <Navbar/>
        <div class="d-flex">
          <Menu/>
          <div class="content p-4">
            <Main/>
          </div>
        </div>
      </div>
    );
  }
}

const About = {Main, Page};

export default About;
