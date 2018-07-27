import React, { Component } from 'react';
import '../style/home_page.css';

import HomeHeader from './home_header';
import HomeProjects from './home_projects';
import MarkdownLoader from './markdown_loader';

class HomePage extends Component {

  render() {
    const code = <kbd>code</kbd>;
    const headerAttr = {colorName: "gradient",
                        navlinks: ["about", "resume", "projects", "contact"],
                        headerBig: "Corey Edelman",
                        headerText: `The likely reason I'm an engineer is because I get a dopamine rush when solving problems with `};
    return(
    <div>
      <HomeHeader headerAttr={headerAttr}/>
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