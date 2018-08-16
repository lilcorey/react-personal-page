import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectDesc from './project_desc';

class HomeProjects extends Component {
  
  renderProjects(){
    return(
      <div className="col-md row">
        <ProjectDesc/>
        <hr></hr>
      </div>
    );

  }

  render(){
    return(
      <div className="container-fluid proj-main">
        <div className="container max-w">
          <h2> Projects</h2>
          <hr></hr>
          <div className="col-md row">
            <ProjectDesc selection="blog"/>
          </div>
          <hr></hr>
          <div className="col-lg row">
            <ProjectDesc selection="specials"/>
          </div>
          <hr></hr>
          <div className="col-md row">
            <ProjectDesc selection=""/>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default HomeProjects;