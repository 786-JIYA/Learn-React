import React, { useState } from 'react'
import "./NewEventForm.css"
function NewEventForm() {

    const [title,setTitle]=useState('');
    const [date,setDate]=useState('');
    const [events,setEvents]=useState([]);  

    const addEvent=(event)=>{
        setEvents((prevEvents)=>{
            return [...prevEvents,event]
        })
    }

    const handleClick=()=>{

    }

    const resetForm=()=>{
        setTitle('');
        setDate('');
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const event={
            title:title,
            date:date,
            id:Math.floor(Math.random()*10000)
        }
        console.log(event);
        resetForm();
    }

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
        <lable htmlFor="title">
            <span>Event Title : </span>
            <input type="text" 
            id="title" 
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            />
        </lable>
        <lable htmlFor="date">
            <span>Event Date : </span>
            <input type="date" 
            id="date" 
            onChange={(e)=>setDate(e.target.value)}
            value={date}
            />
        </lable>
        <button>Submit</button>
        
       
    </form>
  )
}
export default NewEventForm