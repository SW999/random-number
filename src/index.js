import React from "react";
import ReactDOM from "react-dom";
import './scss/app.scss';

import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return [
      <div key='main'>
      <div className="container">
        <h1>{this.props.name}</h1>
        <div className="digit-wrapper">
          <ul className="digit">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>0</li>
          </ul>
        </div>
      </div>
    </div>,
    <Footer key='footer'/>
    ]
  }
}

ReactDOM.render(<App name="Random integer number generator in a given range" />, document.getElementById('app'));
