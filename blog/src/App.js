import React, { Component } from 'react';
import TOC from "./components/TOC";
import Count from "./components/Count";
import './App.css';

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}
class Content extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.sub}
      </article>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Subject title="WEB" sub="Hello React :)"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC name="Hello" color="pink" isSpecial></TOC>
                {/* isSpecial="true" 생략가능 */}
        <Content title="HTML is" sub="HyperText Markup Language"></Content>
        <Content title="React is" sub="description_"></Content>
        
        <Count/>
      </div>

    )

  }    
}

export default App;
