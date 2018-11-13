import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import newMarkup from './actions/newMarkup';
import mdString from './helpers/mdString';

const mapStateToProps = (state) => {
  return ({
    parsedHTML: state.preview.parsedHTML
  })
}

class App extends Component {

  componentDidMount() {
    this.props.dispatch(newMarkup(this.textArea.value));
  }

  render() {
    
    this.defaultText = this.props.parsedHTML === '' ? mdString : this.textArea.value ; 

    return (
      <main className="App">
        <section id="editor-wrapper">
          <textarea id="editor" ref={ el => this.textArea = el } onChange={ e => {
            this.props.dispatch(newMarkup(e.target.value));
            console.log(this.defaultText);
          }} defaultValue={ this.defaultText }/>
        </section>
        <section id="preview" dangerouslySetInnerHTML={{__html: this.props.parsedHTML}}>
        </section>
      </main>
    );
  }
}

App = connect(mapStateToProps)(App);

export default App;
