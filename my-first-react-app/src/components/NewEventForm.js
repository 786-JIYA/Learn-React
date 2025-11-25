import React, { useState } from 'react'
import "./NewEventForm.css"
function NewEventForm({addEvent}) {

    const [title,setTitle]=useState('');
    const [date,setDate]=useState('');
    const [location,setLocation]=useState('london');

    const resetForm=()=>{
        setTitle('');
        setDate('');
        setLocation('london');
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const event={
            title:title,
            date:date,
            location:location,
            id:Math.floor(Math.random()*10000)
        }
        console.log(event);
        addEvent(event);
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
        <lable>
            <span>Location</span>
            <select onChange={(e)=> setLocation(e.target.value)}>
                <option value="london">London</option>
                <option value="newyork">New York</option>
                <option value="berlin">Berlin</option>
                <option value="paris">Paris</option>
            </select>
        </lable>
        <button>Submit</button>
        
       
    </form>
  )
}
export default NewEventForm