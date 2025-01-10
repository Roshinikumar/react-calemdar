import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { createEventModalPlugin } from '@schedule-x/event-modal'
 
import '@schedule-x/theme-default/dist/index.css'


function App() {
  const eventsService = useState(() => createEventsServicePlugin())[0]
  console.log(eventsService,'eventsService')
  const eventModal = createEventModalPlugin()
  const calendar = useCalendarApp({
    views: [ createViewWeek(), createViewMonthGrid(), 
     ],
    events: [
      {
        id: '1',
        title: 'Event 1',
        description: 'Dummy Meeting',
        start: '2025-01-10 10:00',
        end: '2025-01-10 11:00',
        location: 'Chennai'
      },
      {
        id: '1',
        title: 'Event 2',
        description: 'Dummy Meeting',
        start: '2025-01-11 12:00',
        end: '2025-01-11 14:00',
        location: 'Madurai'
      }, 
    ],
    plugins: [eventsService, eventModal]
  })
  eventModal.close();
  
    return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}

export default App