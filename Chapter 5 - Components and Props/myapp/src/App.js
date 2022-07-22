import React from "react"
import { useState } from "react"
import Title from "./components/Title";
import Modal from "./components/Modal"

import logo from './logo.svg';
import './App.css';
import EventList from "./components/EventList";

function App() {

  const subtitle1 = "This is subtitle 1"
  const subtitle2 = "This is subtitle 2"

  // IMPORTANT! Everytime we change states, the function App () runs again!
  const [showModal, setShowModal] = useState (false)
  const [showEvents, setShowEvent] = useState (true)
  const [events, setEvents] = useState ([
    {title: "mario´s birhtday bash", id: 1},
    {title: "bowser´s live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  const handleClose = () => {
    setShowModal (false)
  }

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

      <Title title="Events in your area" subtitle={subtitle1} />
      

      {showEvents && <EventList events={events} handleClick={handleClick}/>}

      <div>
        {
          showEvents==false && <button onClick={ () => setShowEvent (true) }> Show </button>
        }
        {
          showEvents==true  && <button onClick={ () => setShowEvent (false) }> Hide </button>
        }
        
      </div>

      {showModal &&  <Modal handleClose={handleClose}>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal>}

      <div>
        <button onClick={ () => {
          setShowModal (true)
        } }> SHOW MODAL </button>
      </div>


    </div>
  );
}

export default App;
