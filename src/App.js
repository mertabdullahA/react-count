import logo from './logo.svg';
import './App.css';


import { useState } from 'react'

function App() {



  const [count, setCount] = useState(0)




  return (
    <div className="App">

      <h1> Count : {count}</h1>
      <a onClick={() => setCount(count - 1)}>azalt</a>
      <br></br>
      <a onClick={() => setCount(count + 1)}>artır</a>


    </div>

  );
}


export default App;

