import React from 'react';
import styles from './EventList.module.css';
function EventList({events, handleClick}) {
  return (
    events.map((event, idx) => (
              <div className={styles.card} key={event.id}>
                <h2>{idx}-{event.title}</h2>
                <button onClick={()=> handleClick(event.id)}>Delete me.</button>
              </div>
            ))       
  )
}
export default EventList