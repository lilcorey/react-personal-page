import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createPost } from '../actions';
import HomeHeader from './home_header';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;
    
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : undefined}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/blog');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    const hdrAttr = {colorName: "gradient-blog",
    navlinks: [""],
    headerBig: "New Post",
    headerText: "Let it all out."};

    return(
      <div>
      <HomeHeader headerAttr={hdrAttr}/>
      <div className="container">
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} style={{paddingTop: '50px'}}>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/blog" className="btn btn-danger">Cancel</Link>
      </form>
      </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {}

  if(!values.title){
    errors.title = "Enter a Title.";
  }
  if(!values.content){
    errors.content = "Enter some content.";
  }

  return errors;
}
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);