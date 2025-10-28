import './App.css';
import { useState } from 'react';
function App() {
  const [showEvents,setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "Birthday Party", id: 1 },
    { title: "Conference", id: 2 },
    { title: "Wedding", id: 3 }
  ]);
  console.log(showEvents);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event)=>{
      return id !== event.id
    })
    });
  }
  return (
    <div className="App">
      {showEvents && (<div>
        <button onClick={()=> setShowEvents(false)}>Hide Events</button>
      </div>)}

      {!showEvents &&(<div>
        <button onClick={()=> setShowEvents(true)}>Show Events</button>
      </div>)}
      
      {showEvents && events.map((event, idx) => (
          <div key={event.id}>
            <h2>{idx}-{event.title}</h2>
            <button onClick={()=> handleClick(event.id)}>Delete me.</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
