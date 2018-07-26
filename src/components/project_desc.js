import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import specials from '../style/specials.png';

class ProjectDesc extends Component {
  render(){
    const content = {"": "../style/specials.png"};
    return(
      <div>
        <section>
          <article className="float-right col-sm-6" style={{display: 'inline-block'}}>
            <h3> Clemson Specials </h3>
            <p>
              Clemson specials provides a one stop shop to find food specials
              in the Clemson area. Find restaurants, deals, hours, and more.
            </p>
            <p>
              Specs: Clemson specials is hosted on Heroku cloud platform and developed
              using the Django Framework. The pages are server rendered using the Jinja
              templating language. 
            </p>
          </article>
          <aside className="float-left col-sm-6" style={{display: 'inline-block'}}>
            <img src={specials} className="img-fluid" style={{maxWidth: '100%'}}/>
          </aside>
        </section>
              </div>
      
    );
  }
}

export default ProjectDesc;