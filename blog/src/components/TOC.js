import React, { Component } from "react";


class TOC extends Component {
  render(name,color,style,isSpecial){

    return(
        <div>
          <ul style={{listStyle:this.props.style}}>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">{this.props.name}</a></li>
            <li><a href="3.html">{this.props.color}</a></li>
          </ul>
          <b style={{color:this.props.color}} >{this.props.isSpecial? 'spe*' : '*cial'}</b> 
        </div>
    );
  }

  
}

TOC.defaultProps = {
  //공백시 디폴트값 부여(null 방지)
  name: '',
  color: 'purple'
}

export default TOC;