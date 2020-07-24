import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Action from "./components/Action"
import { Provider } from "react-redux"
import Store from './redux/index';


const App = () => (
  <Provider store={Store}>
    <Action />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));