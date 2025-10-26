import './App.css';
import {useState} from 'react';
function App() {
  const [name,setName] = useState("Jiya");
  const [events,setEvents] = useState([
    {title:"Birthday Party",id:1},
    {title:"Conference",id:2},
    {title:"Wedding",id:3}
  ]);
  const handleClick=()=>{
    setName("Arshiya");
    console.log(name);
  }
  return (
    <div className="App">
    <h1>My name is {name}</h1>
    <button onClick={handleClick}>Change name</button>
    {
      events.map((event,idx)=>(
        <div key={event.id}>
          <h2>{idx}-{event.title}</h2>
        </div>
      ))
    }
    </div>
  );
}

export default App;
