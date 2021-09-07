import React from 'react';
import Accordion from './components/Accordion';
import {data} from './util/data'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Random Facts</h1>
        {
          data.map((dropdown, index) => {
            const {title, content} = dropdown;
            return (
              <Accordion key={index} title={title} content={content}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
