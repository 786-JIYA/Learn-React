import './App.css';
import {useState} from 'react';
function App() {
  const [name,setName] = useState("Jiya");
  const handleClick=()=>{
    setName("Arshiya");
    console.log(name);
  }
  return (
    <div className="App">
    <h1>My name is {name}</h1>
    <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default App;
