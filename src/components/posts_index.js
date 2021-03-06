import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';


class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return(
        <li className="list-group-item" key={post.id}>
          <Link to={`/blog/posts/${post.id}`}>
            {post.title}
          </Link>
          <div style={{float: 'right'}}>{post.date_created}</div>
        </li>
      );
    });
  }
  render() {

    return(
      <div>
      <div className="container max-w" style={{paddingTop: '50px'}}>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {posts: state.posts};
}
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);