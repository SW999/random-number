// <reference path='../index.d.ts'/>
import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';
import Footer from './components/Footer';
import MainContainer from './containers/MainContainer';
import * as serviceWorker from './serviceWorker';
import './scss/style.scss';

type AppProps = {
  name: string;
  title: string;
};

const App: FunctionComponent<AppProps> = ({ name, title }) => (
  <>
    <MainContainer name={name} title={title} />
    <Footer />
  </>
);

render(
  <App
    name="Random number generator"
    title="Generator of random positive integers in a given range"
  />,
  document.getElementById('app')
);

serviceWorker.register();
