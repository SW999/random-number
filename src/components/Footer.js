import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {
  render() {
    return ReactDOM.createPortal(<span>© <a href="https://github.com/SW999/random-number" rel="nofollow">SW999</a> 2019</span>, document.getElementById('footer'));
  }
}
