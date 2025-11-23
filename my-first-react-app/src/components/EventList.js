import React from 'react';
function EventList({events, handleClick}) {
  return (
    events.map((event, idx) => (
              <React.Fragment key={event.id}>
                <h2>{idx}-{event.title}</h2>
                <button onClick={()=> handleClick(event.id)}>Delete me.</button>
              </React.Fragment>
            ))       
  )
}
export default EventList