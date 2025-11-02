import './App.css';
import { useState } from 'react';
import React from 'react';
import Title from './components/Title'; 
function App() {
  const [showEvents,setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "Birthday Party", id: 1 },
    { title: "Conference", id: 2 },
    { title: "Wedding", id: 3 },
     { title: "Event", id: 4 }
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
      <Title title="This is for Props today..."/>
      {showEvents && (<div>
        <button onClick={()=> setShowEvents(false)}>Hide Events</button>
      </div>)}

      {!showEvents &&(<div>
        <button onClick={()=> setShowEvents(true)}>Show Events</button>
      </div>)}
      
      {showEvents && events.map((event, idx) => (
          <React.Fragment key={event.id}>
            <h2>{idx}-{event.title}</h2>
            <button onClick={()=> handleClick(event.id)}>Delete me.</button>
          </React.Fragment>
        ))
      }
    </div>
  );
}

export default App;
