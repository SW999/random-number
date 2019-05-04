import React from 'react';
import ReactDOM from 'react-dom';
import github from '../img/github.svg';

export default class Footer extends React.Component {
  render() {
    return ReactDOM.createPortal(<span><a href="https://github.com/SW999/random-number" rel="nofollow" title="Github page"><img src={github} alt="github" width="24" height="24"/></a> © SW999 2019</span>, document.getElementById('footer'));
  }
}
