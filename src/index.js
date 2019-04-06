import React from "react";
import ReactDOM from "react-dom";
import Footer from './components/Footer';
import MainContainer from "./containers/MainContainer";
import './scss/app.scss';

class App extends React.Component {
  render() {
    return [
      <MainContainer
        key='main'
        title={this.props.title}
        name={this.props.name}
      />,
      <Footer key='footer'/>
    ]
  }
}

ReactDOM.render(<App name="Random number generator" title="Random integer number generator in a given range"/>, document.getElementById('app'));
