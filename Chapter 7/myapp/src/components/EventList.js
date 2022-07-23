import React from 'react'
import styles from './EventList.module.css'

export default function EventList({events , handleClick}) {
  return (
    <div>
        {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2> {index} - {event.title} </h2>
          <h2> {event.location} - {event.date} </h2>
          <button onClick={ () => handleClick (event.id) }> Delete </button>
        </div>
      ))}
    </div>
  )
}
