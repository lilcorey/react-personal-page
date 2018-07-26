import React, { Component } from 'react';

import '../style/home_page.css';

export default class HomeHeader extends Component {
  render() {
    return(
      <div className={this.props.headerAttr.colorName}>
        <header id="header">
          <h1 className="text-center">{this.props.headerAttr.headerBig}</h1>
          <p className="container text-center header-p">
           {this.props.headerAttr.headerText}
           {this.props.headerAttr.colorName === "gradient" ? <kbd>code</kbd>: ''}
           
          </p>
        </header>
        <div id="myNav">
          <nav className="nav text-center">
            <div className="container max-w">
              {this.props.headerAttr.navlinks.map( link => 
                <div key={link} className="col-sm-3">
                  <a className="nav-link" href={"/#"+link}>{link}</a>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}