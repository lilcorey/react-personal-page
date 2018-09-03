import React, { Component } from 'react';
import '../style/home_page.css';

import ProjectDesc from './project_desc';

class HomePage extends Component {

  componentDidUpdate() {
    const node = this.refs.projs;
    node && node.scrollIntoView({block: 'end', behavior: 'smooth'});
  }
  render() {    
    return(
    <div>
      <div className="" style={{paddingTop: '0px'}}>
        <div id="about" className="container max-w">
          <h2>About Me</h2>
          <hr/>
          <p>Hey, I'm Corey. I currently work as a Software Developer in Seattle. I enjoy learning all things software engineering. With that said, this site is a project to brush up on developing web technologies and a place (blog) to keep track of programming topics I read about.</p>
          <p>You can find me on GitHub <a rel="noopener noreferrer" target="_blank" href="https://github.com/lilcorey">@lilcorey</a> and LinkedIn <a rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/corey-edelman">@corey-edelman</a></p>
          <p>Want to chat? Have a question? Feel free to <a rel="noopener noreferrer" href="mailto:cedelma@g.clemson.edu?subject=edelman.io">email</a> me</p>
        </div>
        <div id="projects" ref="projs">
        <div className="container-fluid proj-main">
        <div className="container max-w">
          <h2> Projects</h2>
          <hr></hr>
          <div className="col-md row proj-padding">
            <ProjectDesc selection="blog"/>
          </div>
          <hr></hr>
          <div className="col-lg row proj-padding">
            <ProjectDesc selection="specials"/>
          </div>
          <hr></hr>
          <div className="col-lg row proj-padding">
            <ProjectDesc selection="weather"/>
          </div>
          <hr></hr>
          <div className="col-md row proj-padding">
            <ProjectDesc selection=""/>
          </div>
          <hr></hr>
        </div>
      </div>
        </div>
      </div>
    </div>
    );
  }
}

export default HomePage;