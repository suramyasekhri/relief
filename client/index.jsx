import '@babel/polyfill';
import React, { useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import './sass/styles.scss';

const App = () => {
  useEffect(() => {

  }, []);
  const onClick = async () => {
    try {
      const res = await axios.get('/api');
      console.log(res);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  return (
    <div id="app">
      <div>Hello, World</div>
      <button onClick={onClick}>Click here</button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
