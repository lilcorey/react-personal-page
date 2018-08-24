import React, { Component } from 'react';

import '../style/home_page.css';

export default class HomeHeader extends Component {
  
  chooseHeader(path) {
    const homeHeader = {colorName: "gradient",
    navlinks: ["about", "resume", "projects", "contact"],
    headerBig: "Corey Edelman",
    headerText: `The likely reason I'm an engineer is because I get a dopamine rush when solving problems with `};

    const resumeHeader = {colorName: "gradient-resume",
    navlinks: [""],
    headerBig: "Resume",
    headerText: "Need to come up with something to say about this..."};

    const uhohHeader = {colorName: "gradient-blog",
    navlinks: [""],
    headerBig: "Uh Oh",
    headerText: "This page doesnt exist (404)"};

    const postsHeader = {colorName: "gradient-blog",
    navlinks: [""],
    headerBig: "My Thots",
    headerText: "This blog is strictly a place for me to form my thoughts on topics I find interesting."};

    if(path === "/"){
      return homeHeader;
    }
    else if(path === "/blog"){
      return postsHeader;
    }
    else if(path.startsWith("/blog/post")){
      return postsHeader;
    }
    else if(path === "/resume"){
      return resumeHeader;
    }
    else{
      return uhohHeader;
    }
  }
  render() {
    //const { headerAttr } = this.props;
    if(!this.props.currPath){
      return( <div> Loading...</div>);
    }
    const headerAttr = this.chooseHeader(this.props.currPath);

    return(
      <div className={headerAttr.colorName}>
        <header id="header">
          <h1 className="text-center">{headerAttr.headerBig}</h1>
          <p className="container text-center header-p">
           {headerAttr.headerText}
           {headerAttr.colorName === "gradient" ? <kbd>code</kbd>: ''}

          </p>
        </header>
        <div id="myNav">
          <nav className="nav text-center">
            <div className="container max-w">
              {headerAttr.navlinks.map( link => 
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