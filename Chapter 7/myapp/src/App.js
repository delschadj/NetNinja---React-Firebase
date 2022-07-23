import React from "react"
import { useState } from "react"
import Title from "./components/Title"
import Modal from "./components/Modal"
import NewEventForm from "./components/NewEventForm"

import './App.css';
import EventList from "./components/EventList";

function App() {

  const subtitle1 = "This is subtitle 1"
  const isSalesModal = true

  // IMPORTANT! Everytime we change states, the function App () runs again!
  const [showModal, setShowModal] = useState (false)
  const [showEvents, setShowEvent] = useState (true)
  const [events, setEvents] = useState ([  ])

  const addEvent = (event) => {
    setEvents (oldarray => [...oldarray,event])
    setShowModal (false)
  }

  const handleClick = (id) => {
    setEvents ( (prevState) => {
      return prevState.filter ((event) => {
        if (event.id === id)
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
          showEvents===false && <button onClick={ () => setShowEvent (true) }> Show </button>
        }
        {
          showEvents===true  && <button onClick={ () => setShowEvent (false) }> Hide </button>
        }
        
      </div>

      {showModal && (
        <Modal isSalesModal={isSalesModal}  setShowModal={setShowModal}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>


    </div>
  );
}

export default App;
