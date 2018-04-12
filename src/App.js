import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Result from './containers/Result';
import Post from './containers/Post';

class App extends Component
{
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home.Page} />
          <Route path="/about" component={About.Page} />
          <Route path="/contact" component={Contact.Page} />
          <Route path="/result" component={Result.Page} />
          <Route path="/post" component={Post.Page} />
        </div>
      </Router>
    );
  }
}

export default App;
