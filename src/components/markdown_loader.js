import React, { Component }from 'react';
import ReactMarkdown from 'react-markdown';

class MarkdownLoader extends Component {
  constructor(props) {
    super(props);
    this.state = { terms: null};
  }

  componentWillMount() {
    const md = require(`../mds/${this.props.filePath}.md`);
    fetch(md).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    });
  }
   render() {
     if(!this.state.terms){
       return <div>Loading...</div>;
     }
     return(
      <div>
        {console.log(this.state.terms)}
        <ReactMarkdown source={this.state.terms}/>
      </div>
     );
   }

  
}

export default MarkdownLoader;