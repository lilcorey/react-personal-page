import React, { Component } from 'react';
import '../style/home_page.css';

import HomeProjects from './home_projects';
import MarkdownLoader from './markdown_loader';

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
        <MarkdownLoader filePath="home_about"/>
        </div>
        <div id="projects" ref="projs">
          <HomeProjects/>
        </div>
      </div>
    </div>
    );
  }
}

export default HomePage;