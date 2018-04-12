import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Result.css';

import Data from '../data';

import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';

/**
 * Component: Result.Main
 */
class Main extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      preparedResults: null
    };
  }

  componentWillMount() {
    const dataResults = Data.results;
    const preparedResults = [];

    let i = 0;

    dataResults.forEach(function(item){
      preparedResults.push(
        <div className="post-preview">
          <h4>
            <NavLink to="post">{item.title}</NavLink>
          </h4>
          <small className="post-meta">
            <NavLink to="post">{item.author}</NavLink>,&nbsp;
            <NavLink to="category">{item.category}</NavLink>,&nbsp;
            <NavLink to="post">{item.published}</NavLink>
          </small>
          <p>
            {item.excerpt}
          </p>
        </div>
      );
      if(i < (dataResults.length - 1)) {
        preparedResults.push(<hr/>);
      }
      i++;
    });
    this.setState({preparedResults: preparedResults});
  }

  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 col-md-10">
            <h1 className="mb-4">Search</h1>
            <form name="sentKeyword">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Please type keywords..." />
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </form>
            {this.state.preparedResults}
          </div>
        </div>
        <Pagination dataHref="result" />
      </div>
    );
  }
}

/**
 * Component: Result.Page
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

const Result = {Main, Page};

export default Result;
