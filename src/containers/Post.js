import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DOMPurify from 'dompurify';

import './Post.css';

import Data from '../data';

import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

/**
 * Component: Post.Main
 */
class Main extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      preparedArticle: null
    };
  }

  componentWillMount() {
    const dataArticle = Data.article;
    this.setState({preparedArticle: dataArticle});
  }

  render() {
    return (
      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <h1>{this.state.preparedArticle.title}</h1>
              <small className="post-meta">
                <NavLink to="post">{this.state.preparedArticle.title}</NavLink>,&nbsp;
                <NavLink to="category">{this.state.preparedArticle.category}</NavLink>,&nbsp;
                <NavLink to="post">{this.state.preparedArticle.published}</NavLink>
              </small>
              <p className="subtitle">{this.state.preparedArticle.excerpt}</p>
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.state.preparedArticle.content) }} />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

/**
 * Component: Post.Page
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

const Post = {Main, Page};

export default Post;
