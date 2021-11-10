import React, { useState } from 'react';
import './App.css';

function App () {

 const [counter, setCounter] = useState(0);
 const [text, setText] = useState();
  
 const handleCounter= (e)=>{
  let message = e.target.value
  let size= message.length  
  setText(message)
  setCounter(size)

}  
    return (
      <div className="container">
        <textarea value={text} onChange={handleCounter} rows="3"></textarea>
        <div className="counter">{counter}</div>
      </div>
    );
  
}

export default App;

