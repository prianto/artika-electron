import React, { Component } from 'react';

import './Home.css';
import Data from '../data';

import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';

/**
 * Component: Home.Main
 */
class Main extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      preparedArticles: null
    };
  }

  componentWillMount() {
    const dataArticles = Data.articles;
    const preparedArticles = [];
    dataArticles.forEach(function(item) {
      preparedArticles.push(
        <Portfolio
          dataImage={item.image}
          dataTitle={item.title}
          dataAuthor={item.author}
          dataCategory={item.category}
          dataPublished={item.published}
          dataExcerpt={item.excerpt}
        />
      );
    });
    this.setState({preparedArticles: preparedArticles});
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.preparedArticles}
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Component: Home.Page
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

const Home = {Main, Page};

export default Home;
