import TZDate from '@src/time/date';
import { addDate, setTimeStrToDate } from '@src/time/datetime';

import type { MockedWeekViewEvents } from '@stories/mocks/types';

const today = new TZDate();
const sunday = addDate(today, -today.getDay());
const monday = addDate(sunday, 1);
const tuesday = addDate(sunday, 2);
const wednesday = addDate(sunday, 3);
const thursday = addDate(sunday, 4);
const friday = addDate(sunday, 5);
const saturday = addDate(sunday, 6);

export const mockWeekViewEvents: MockedWeekViewEvents[] = [
  {
    id: '1',
    calendarId: 'cal1',
    title: 'event1',
    category: 'allday',
    isAllday: true,
    start: sunday,
    end: tuesday,
  },
  {
    id: '2',
    calendarId: 'cal1',
    title: 'event2',
    category: 'allday',
    isAllday: true,
    start: tuesday,
    end: thursday,
  },
  {
    id: '3',
    calendarId: 'cal1',
    title: 'event3',
    category: 'allday',
    isAllday: true,
    start: thursday,
    end: saturday,
  },
  {
    id: '4',
    calendarId: 'cal1',
    title: 'two-view event',
    category: 'time',
    isAllday: false,
    start: setTimeStrToDate(addDate(sunday, -1), '10:00'),
    end: setTimeStrToDate(sunday, '06:00'),
  },
  {
    id: '5',
    calendarId: 'cal1',
    title: 'short time event',
    category: 'time',
    isAllday: false,
    start: setTimeStrToDate(wednesday, '04:00'),
    end: setTimeStrToDate(wednesday, '06:00'),
  },
  {
    id: '6',
    calendarId: 'cal1',
    title: 'long time event',
    category: 'time',
    isAllday: false,
    start: setTimeStrToDate(friday, '10:00'),
    end: setTimeStrToDate(saturday, '06:00'),
  },
  {
    id: '7',
    calendarId: 'cal1',
    title: 'short + duration',
    category: 'time',
    isAllday: false,
    start: setTimeStrToDate(tuesday, '05:00'),
    end: setTimeStrToDate(tuesday, '06:00'),
    goingDuration: 60,
    comingDuration: 120,
  },
  {
    id: '8',
    calendarId: 'cal1',
    title: 'same start and end',
    category: 'time',
    isAllday: false,
    start: setTimeStrToDate(monday, '05:00'),
    end: setTimeStrToDate(monday, '05:00'),
  },
  {
    id: '9',
    calendarId: 'cal1',
    title: 'duplicate event',
    category: 'time',
    isAllday: false,
    start: setTimeStrToDate(monday, '06:00'),
    end: setTimeStrToDate(monday, '07:00'),
    comingDuration: 30,
  },
  {
    id: '9',
    calendarId: 'cal2',
    title: 'duplicate event with attendee',
    category: 'time',
    isAllday: false,
    start: setTimeStrToDate(monday, '06:00'),
    end: setTimeStrToDate(monday, '07:00'),
    attendees: ['a', 'b', 'c'],
  },
  {
    id: '9',
    calendarId: 'cal3',
    title: 'duplicate event with durations',
    category: 'time',
    isAllday: false,
    start: setTimeStrToDate(monday, '06:00'),
    end: setTimeStrToDate(monday, '07:00'),
    goingDuration: 30,
    comingDuration: 60,
  },
  {
    id: '9-1',
    calendarId: 'cal3',
    title: 'not duplicate event',
    category: 'time',
    isAllday: false,
    start: setTimeStrToDate(monday, '06:00'),
    end: setTimeStrToDate(monday, '07:00'),
    goingDuration: 30,
    comingDuration: 60,
  },
  {
    id: '10',
    calendarId: 'cal1',
    title: 'duplicate event',
    category: 'time',
    isAllday: false,
    start: setTimeStrToDate(monday, '09:00'),
    end: setTimeStrToDate(monday, '10:00'),
    goingDuration: 30,
  },
  {
    id: '10',
    calendarId: 'cal2',
    title: 'duplicate event with attendee',
    category: 'time',
    isAllday: false,
    start: setTimeStrToDate(monday, '09:00'),
    end: setTimeStrToDate(monday, '10:00'),
    attendees: ['a', 'b', 'c'],
  },
  {
    id: '10',
    calendarId: 'cal3',
    title: 'duplicate event with durations',
    category: 'time',
    isAllday: false,
    start: setTimeStrToDate(monday, '09:00'),
    end: setTimeStrToDate(monday, '10:00'),
    goingDuration: 30,
    comingDuration: 60,
  },
];
