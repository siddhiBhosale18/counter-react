import { useState } from 'react' //for hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(1)

  // let counter= 15;

  const addValue=()=>{
    
    // counter=counter+1; 
    setCount(counter+1);
    console.log("value Added",counter); 
  }

  const removeValue=()=>{
    setCount(counter - 1 );
  }

  return (
    <>
      <h1>Heyy, it's REACT</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value : {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
