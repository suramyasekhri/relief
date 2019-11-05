import '@babel/polyfill';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import './sass/styles.scss';

const App = () => {
  const [value] = useState(0);
  useEffect(() => {
    document.title = `location: ${value} `;
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
// class App extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       value: '',
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleSubmit(event) {
//     alert('A location was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
return (
    <div id="app">
      <h1>RELIEF</h1>
      <div className="option1">
        <label>
          LOCATION:
          <input type="text" value={useState.value} />
        </label>
        <button onClick={onClick}>SELECT</button>
      </div>
      <div className="option2">
        <label>
          CAUSE:
          <input type="text" />
        </label>
        <button onClick={onClick}>SELECT</button>
      </div>
      <div className="option3">
      <label>
          RATING:
          <input type="text"   />
        </label>
        <button onClick={onClick}>SELECT</button>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
