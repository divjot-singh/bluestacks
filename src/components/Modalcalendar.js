import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Modalcalendar(props){
    return (
        <FullCalendar dateClick={this.handleDateClick} defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
      )
}