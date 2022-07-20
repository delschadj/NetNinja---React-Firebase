import React from "react"
import { useState } from "react"

import logo from './logo.svg';
import './App.css';

function App() {

  // IMPORTANT! Everytime we change states, the function App () runs again!
  const [showEvents, setShowEvent] = useState (true)
  const [events, setEvents] = useState ([
    {title: "mario´s birhtday bash", id: 1},
    {title: "bowser´s live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  const handleClick = (id) => {
    setEvents ( (prevState) => {
      return prevState.filter ((event) => {
        if (event.id == id)
          return false
  
        else
          return true
      })
    } )
  }

  return (
    <div className="App">

      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2> {index} - {event.title} </h2>
          <button onClick={ () => handleClick (event.id) }> Delete </button>
        </div>
      ))}

      <div>
        {
          showEvents==false && <button onClick={ () => setShowEvent (true) }> Show </button>
        }
        {
          showEvents==true  && <button onClick={ () => setShowEvent (false) }> Hide </button>
        }
        
      </div>

    </div>
  );
}

export default App;
