import React from "react";
import ReactDOM from "react-dom";
import './scss/app.scss';

import Header from './components/Header';
import Footer from './components/Footer';

class HelloMessage extends React.Component {
  render() {
    return [
      <div key='main'>
      <Header/>
      <div className="container">
        <h1>Hello {this.props.name}</h1>
      </div>
    </div>,
    <Footer key='footer'/>
    ]
  }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Yomi"/>, App);
