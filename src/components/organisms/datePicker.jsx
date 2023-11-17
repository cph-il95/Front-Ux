import React from 'react'
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';



// jeg laver dayPicker komponentet 
const DayPickerComponent = () => {
// jeg laver et state for at kunne spore den valgte dag
const [selectedDay, setSelectedDay] = useState(null);
// 
const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      <h2>Select a Day</h2>
      <DayPicker selected={selectedDay} onDayClick={handleDayClick} />
      {selectedDay && (
        <p>You selected {selectedDay.toLocaleDateString()}</p>
      )}
    </div>
  );
};

export default DayPickerComponent;