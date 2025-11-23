import './App.css';
import { useState } from 'react';
import React from 'react';
import Title from './components/Title'; 
import Modal from './components/Modal';
import EventList from './components/EventList';
function App() {
  const [showModal,setShowModal]=useState(false);
  const [showEvents,setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "Birthday Party", id: 1 },
    { title: "Conference", id: 2 },
    { title: "Wedding", id: 3 },
     { title: "Event", id: 4 }
  ]);
  console.log(showModal );

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event)=>{
      return id !== event.id
    })
    });
  }
  const handleClose=()=>{
    setShowModal(false);
  }
  return (
    <div className="App">
      {!showModal && 
      <button onClick={()=> setShowModal(true)}>Show Modal</button>
      }
      {showModal && <Modal handleClose={handleClose}>
        <h2>This is a Modal</h2>
        <p>We are trying to implement Modal using React</p>
      </Modal>}
      <Title title="This is for Props today..."/>
      {showEvents && (<div>
        <button onClick={()=> setShowEvents(false)}>Hide Events</button>
      </div>)}

      {!showEvents &&(<div>
        <button onClick={()=> setShowEvents(true)}>Show Events</button>
      </div>)}
      
      {showEvents && <EventList events={events} handleClick={handleClick}></EventList>
      }

    </div>
  );
}

export default App;
