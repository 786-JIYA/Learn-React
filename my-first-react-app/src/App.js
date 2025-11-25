import './App.css';
import { useState } from 'react';
import React from 'react';
import Title from './components/Title'; 
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';
function App() {
  const [showModal,setShowModal]=useState(false);
  const [showEvents,setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);  

   const addEvent=(event)=>{
        setEvents((prevEvents)=>{
            return [...prevEvents,event]
        })
        setShowModal(false);
    }

  console.log(showModal );

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event)=>{
      return id !== event.id
    })
    });
  }

  return (
    <div className="App">

      {showModal && <Modal isColour={false}>
        <NewEventForm addEvent={addEvent}/>
      </Modal>}
       {!showModal && 
      <button onClick={()=> setShowModal(true)}>Show Modal</button>
      }
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
