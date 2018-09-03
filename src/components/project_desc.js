import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import specials from '../style/specials.png';
import blog from '../style/blog.png';
import weather from '../style/weather.png';

class ProjectDesc extends Component {

  renderBlog(){
    return(
      <div>
        <section>
          <article className="float-right col-sm-6" style={{display: 'inline-block'}}>
            <h3> My Blog </h3>
            <p>
            The main purpose for getting this site together is to encourage myself to continuously
            learn and to document that learning. 
            My hope is that by documenting my findings I'll retain more and 
            be more consistent in learning new things.
            </p>
            <p>
              Specs: I created this portfolio website with React/Redux. The Redux store
              is mainly used to keep state on the blog posts that are served via a
              REST API I created with Django/Python. The backend API is hosted on Heroku cloud platform 
              while the bootstrapped create-react-app is deployed using Surge. My plans for the future are
              to use Gatsby.js to play with server side rendered content and GraphQL to serve my blog.
            </p>
          </article>
          <aside className="float-left col-sm-6" style={{display: 'inline-block'}}>
            <img src={blog} className="img-fluid img-shadow" style={{maxWidth: '100%'}}/>
          </aside>
        </section>
              </div>
      
    );
  }
  renderSpecials(){
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
            <img src={specials} className="img-fluid img-shadow" style={{maxWidth: '100%'}}/>
          </aside>
        </section>
      </div>
      
    );
  }
  renderWeather(){
    return(
      <div>
        <section>
          <article className="float-right col-sm-6" style={{display: 'inline-block'}}>
            <h3> Weekly Forecast </h3>
            <p>
              This SPA gets your 5 day forecast for any given location recognized by the Google Geocode API.
            </p>
            <p>
              Specs: The Weekly Forecast weather app is built from React and utilized the Google
              Geocode API and Darksky Weather API. The static site is hosted on surge.sh. 
            </p>
          </article>
          <aside className="float-left col-sm-6" style={{display: 'inline-block'}}>
            <img src={weather} className="img-fluid img-shadow" style={{maxWidth: '100%'}}/>
          </aside>
        </section>
      </div>
      
    );
  }
  

  render(){
    //const content = {"": "../style/specials.png"};
    const { selection } = this.props;
    switch (selection){
      case "blog":
        return this.renderBlog();
      case 'specials':
        return this.renderSpecials();
      case 'weather':
        return this.renderWeather();
      default:
        return( 
          <div>
            <section>
              <article className="col-sm-6">
                <h3> Coming soon </h3>
                <p> Stay tuned for more projects. </p>
              </article>
            </section>
          </div>);
    }

  }
}

export default ProjectDesc;