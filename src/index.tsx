import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Footer from './components/Footer';
import MainContainer from './containers/MainContainer';
import './scss/app.scss';

type AppProps = {
  name: string,
  title: string
}

class App extends React.Component<AppProps> {
  render() {
    return (
        <Fragment>
          <MainContainer
            name={ this.props.name }
            title={ this.props.title }
          />
          <Footer/>
        </Fragment>
    );
  }
}

render(
    <App name="Random number generator" title="Generator of random positive integers in a given range"/>,
    document.getElementById('app')
);
