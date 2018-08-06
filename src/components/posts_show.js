import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const {id} = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/blog');
    });
  }

  render() {
    const {post} = this.props;
 
    if(!post){
      return(
        <div>Loading...</div>
      );
    }
    return(
      <div>
      <div className="container max-w" style={{paddingTop: '50px'}}>
        <Link className="pull-xs-right" to="/blog">Back to Index</Link>
        <h3>{ post.title }</h3>
        <ReactMarkdown source={post.content}/>
      </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);