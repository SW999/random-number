import React from 'react';
import ReactDOM from 'react-dom';

const FooterInner = () => (
    <span>© <a href="https://sw999.github.io" rel="nofollow">SW999</a> 2019</span>
);

export default class Footer extends React.Component {
  render() {
    return ReactDOM.createPortal(<FooterInner/>, document.getElementById('footer'));
  }
}
