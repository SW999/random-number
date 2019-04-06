import React from "react";
import ReactDOM from "react-dom";
import './scss/app.scss';

import Footer from './components/Footer';
import Slot from './components/Slot';
import FormContainer from "./containers/FormContainer";
import { getRandomInt } from './services/getRandomIntagerInRange';

class App extends React.Component {
  render() {
  const randomNumber = getRandomInt(9999, 9999999);
    return [
    <div key='main'>
      <div className="container">
        <h1>{this.props.name}</h1>
        <h2>Random integer number generator in a given range</h2>
        <div>Random number: {randomNumber}</div>
        <Slot />
        <FormContainer />
      </div>
    </div>,
    <Footer key='footer'/>
    ]
  }
}

ReactDOM.render(<App name="Random number generator" />, document.getElementById('app'));
