import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import getQuote from './actions/getQuote';
import rand from './helpers/randomNumber';

const mapStateToProps = (state) => {
  return ({
    quote: state.quote.quote.text,
    author: state.quote.quote.author,
    updating: state.quote.updating,
    error: state.quote.error,
    quotes: state.quote.quotes
  })
}

class App extends Component {

  componentDidMount() {
    if(!this.props.quote) this.props.dispatch(getQuote());
  }

  render() {
    return (
      <div className="App">
        <main className={"Quotebox color-" + rand(10)}id="quote-box">
          <div className="Quote">
            <div id="text">{ this.props.quote }</div>
            <div id="author">- { this.props.author }</div>
          </div>
          <div className="Controls">
            <div className="Social">
              <a id="tweet-quote" className="button" href={'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + this.props.quote + '" ' + this.props.author)} target="_blank"><i className="fab fa-twitter"></i></a>
            </div>
            <button className="New-Quote" id="new-quote" onClick={ e => {
              this.props.dispatch(getQuote(this.props.quotes));
              e.target.blur();
            }}><i className="fa fa-sync-alt"></i></button>
          </div>
        </main>
      </div>
    );
  }
}

App = connect(mapStateToProps)(App);

export default App;
