import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from '../reducers';
import PostsIndex from './posts_index';
import PostsNew from './post_new';
import PostsShow from './posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
export default class BlogHome extends Component {
  render() {
    return(
      <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/blog/posts/new" component={PostsNew} />
            <Route path="/blog/posts/:id" component={PostsShow} />
            <Route exact path="/blog" component={PostsIndex} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    );

  }
}
