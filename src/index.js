import React from "react";
import ReactDOM from "react-dom";
import './scss/app.scss';

import Footer from './components/Footer';
import FormContainer from "./containers/FormContainer";
import SlotsContainer from "./containers/SlotsContainer";

class App extends React.Component {
  render() {
    return [
      <div key='main'>
        <div className="container">
          <h1 title={this.props.title}>{this.props.name}</h1>
          <SlotsContainer amount={6}/>
          <FormContainer/>
        </div>
      </div>,
      <Footer key='footer'/>
    ]
  }
}

ReactDOM.render(<App name="Random number generator" title="Random integer number generator in a given range"/>, document.getElementById('app'));
