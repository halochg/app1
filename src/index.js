import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { useState } from "react";

import {NameForm} from './funForm.js'

const App = (props) => {
  return (

    <div>
      {/*javascript code comnents */}
      <h1 title={props.title}>Welcome to React {props.title}...</h1>
      <p></p>
    </div>
  )
    
}

class App3 extends React.Component {
  
  render (){
    return <h1>class component</h1>
  }
}

const App2 = (props) => {
  const [name, setName] = useState("");
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Frirst Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
    
}



ReactDOM.render(
  <NameForm />,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
