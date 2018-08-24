import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

import myresume from '../style/Corey_Edelman.pdf';

class Resume extends Component {
  render(){
    return(
      <div className="container resume-styles">
        <Document renderMode="svg" file={myresume}>
          <Page pageNumber={1}/>
         </Document>
      </div>
    );
  }
}

export default Resume;