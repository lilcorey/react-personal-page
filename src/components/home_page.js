import React, { Component } from 'react';
import '../style/home_page.css';

import HomeProjects from './home_projects';
import MarkdownLoader from './markdown_loader';

class HomePage extends Component {

  render() {    
    return(
    <div>
      <div className="" style={{paddingTop: '0px'}}>
        <div className="container max-w">
        <MarkdownLoader filePath="home_about"/>
        </div>
        <HomeProjects/>
      </div>
    </div>
    );
  }
}

export default HomePage;