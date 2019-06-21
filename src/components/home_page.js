import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/home_page.css';

class HomePage extends Component {

  render() {    
    return(
      <div>
        <Link  className="header" to="/">edelman.io</Link>
        <div className="center">
          <div>
            <h3>Corey Edelman</h3>
            <p>Hey, I'm Corey. I currently work as a Software Engineer in Seattle. I enjoy learning all things software engineering. 
              I'm currently interested in graphs, ontologies, and knowledge systems.</p>
            {/* <p>The main purpose for getting this site together is to encourage myself to continuously learn and document that learning. 
              My hope is that by documenting my findings I'll retain more and be more consistent in learning new things.</p> */}
            <p>
              GitHub <a rel="noopener noreferrer" target="_blank" href="https://github.com/lilcorey">@lilcorey</a> |
              LinkedIn <a rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/corey-edelman">@corey-edelman</a> |
              Email <a rel="noopener noreferrer" href="mailto:cedelma@g.clemson.edu?subject=edelman.io">me</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;