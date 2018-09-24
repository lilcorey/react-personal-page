import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Page404 extends Component{
  render(){


    return(
      <div className="container max-w">
        <h1 className="css404">404</h1>
        <h2 className="pageNotFound">The page was not found</h2>
        <Link className="pageNotFound" to="/">Take me back to the homepage!</Link>
      </div>
    );
  }

}
