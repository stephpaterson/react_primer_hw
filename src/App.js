import React from 'react';
import './App.css';

function App() {
  const name = "Steph"
  const age = 21

  return(
    <div>
      <h1 className='title'>Hello World</h1>
      <p>My name is {name} and I am {age} years old</p>
    </div>
    
  );
}

export default App;
