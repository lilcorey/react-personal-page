import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, withRouter  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import './index.css';
import HomePage from './components/home_page';
import HomeHeader from './components/home_header';
import HamburgerMenu from './components/hamburger_menu';
import PostsIndex from './components/posts_index';
import Resume from './components/resume_index';
import Page404 from './components/404';
// commented out since Im not adding posts from the blog
//import PostsNew from './components/post_new';
import PostsShow from './components/posts_show';
import Footer from './components/footer'
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const HeaderRoute = withRouter((props) => {
  return(
    <HomeHeader currPath={props.location.pathname}/>
  );
});

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <HamburgerMenu/>
      <HeaderRoute/>
      <Switch>
        <Route path="/blog/posts/:id" component={PostsShow} />
        <Route exact path="/blog" component={PostsIndex} />
        <Route path="/resume" component={Resume} />
        <Route exact path="/" component={HomePage} />
        <Route component={Page404} />
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
</Provider>

  , document.getElementById('root'));
registerServiceWorker();
