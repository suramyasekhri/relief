import '@babel/polyfill';
import React, { useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

import './sass/styles.scss';

import Login from './components/Login';
import App from './App.jsx';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

render(
  <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={App} />
        </Switch>
     </Router>
  </div>, document.getElementById('root')
)



// const App = () => {
//   useEffect(() => {

//   }, []);
//   const onClick = async () => {
//     try {
//       const res = await axios.get('/api');
//       console.log(res);
//     } catch (err) {
//       console.log(err);
//       throw err;
//     }
//   };
//   return (
//     <div id="app">
//       <div>Hello, World</div>
//       <button onClick={onClick}>Click here</button>
//     </div>
//   );
// };

// render(<App />, document.getElementById('root'));
