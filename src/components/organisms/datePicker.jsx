import React, { useState, useEffect } from 'react';
import { DatePicker } from '@mantine/dates';
import { Button, Grid, PasswordInput, Stack, TextInput } from "@mantine/core";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const now = new Date();
    setStartDate(now);
    setEndDate(now);
    setSelectedDate(now);
  }, []);

  const generateTimes = () => {
    const times = [];
    for (let i = 0; i < 24; i++) {
      times.push(`${i.toString().padStart(2, '0')}:00`);
    }
    return times;
  };

  const handleStartTimeChange = (event) => {
    const newTime = new Date(startDate);
    const [hours,] = event.target.value.split(':');
    newTime.setHours(hours, 0, 0); // Set minutes and seconds to 0
    setStartDate(newTime);
  };
  
  const handleEndTimeChange = (event) => {
    const newTime = new Date(endDate);
    const [hours,] = event.target.value.split(':');
    newTime.setHours(hours, 0, 0); // Set minutes and seconds to 0
    setEndDate(newTime);
  };

  if (!startDate || !endDate || !selectedDate) {
    return null; // or some loading placeholder
  }

  return (
    <div>

      <h2>Select a Date, Start Time, and End Time</h2>
      <div>
        <label>Date:</label>
        <DatePicker
          value={selectedDate}
          onChange={setSelectedDate}
    
        />
      </div>
      <div>
        <label>Start Time:</label>
        <select value={startDate.getHours() + ':00'} onChange={handleStartTimeChange}>
          {generateTimes().map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <div>
        <label>End Time:</label>
        <select value={endDate.getHours() + ':00'} onChange={handleEndTimeChange}>
          {generateTimes().map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <p>
        You selected {selectedDate.toLocaleDateString()} from{' '}
        {startDate.toLocaleTimeString()} to {endDate.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default DateRangePicker;
