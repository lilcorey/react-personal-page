import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import './index.css';
import HomePage from './components/home_page';
import HamburgerMenu from './components/hamburger_menu';
import PostsIndex from './components/posts_index';
import PostsNew from './components/post_new';
import PostsShow from './components/posts_show';
import Footer from './components/footer'
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <HamburgerMenu/>
      <div style={{paddingTop: '0px'}}> 
      <Switch>
        <Route path="/blog/posts/:id" component={PostsShow} />
        <Route exact path="/blog" component={PostsIndex} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      </div>
      <Footer/>
    </div>
  </BrowserRouter>
</Provider>

  , document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(
//   <div>
//   <HomeSidebar/>
//   <HomePage/>
//   </div>
// , document.getElementById('root'));
// registerServiceWorker();