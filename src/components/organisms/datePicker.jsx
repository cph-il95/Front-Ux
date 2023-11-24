import React, { useState, useEffect } from 'react';
import { DatePicker } from '@mantine/dates';
import { Grid, PasswordInput, TextInput, Stack } from "@mantine/core";



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
      times.push(`${i.toString().padStart(2, '07')}:00`);
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

// en knap til at trykke på næste side 

//   const handleButtonClick = () => {
//     // Handle button click logic here
//     console.log('Button clicked!');
//   };


  if (!startDate || !endDate || !selectedDate) {
    return null; // or some loading placeholder
  }



 
  return (

    <Grid gutter="md" style={{ marginTop: '150px' }}>
      
      <Grid.Col span={3}  offset={4}> 
      <h1 style={{ fontSize: '20px' }}>PICK A DAY AND TIME </h1>
        <label>Date:</label>
        <DatePicker
          value={selectedDate}
          onChange={setSelectedDate}
        />
      </Grid.Col>
      <Stack h={150}>
      <Grid.Col span={12}>
        <label>Start Time:</label>
        <select value={startDate.getHours() + '07:00'} onChange={handleStartTimeChange}>
          {generateTimes().map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </Grid.Col>
     
      
      <Grid.Col span={12}>
        <label>End Time:</label>
        <select value={endDate.getHours() + ':00'} onChange={handleEndTimeChange}>
          {generateTimes().map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </Grid.Col>
      </Stack>
      <Grid.Col span={12} offset={4}>
        <p>
          You selected {selectedDate.toLocaleDateString()} from{' '}
          {startDate.toLocaleTimeString()} to {endDate.toLocaleTimeString()}
        </p>
      </Grid.Col>
      {/* Add your button here */}
      {/* <Grid.Col span={12}>
        <Button variant="filled" color="rgba(38, 18, 18, 1)" size="xl">Next</Button>
      </Grid.Col> */}
    </Grid>
  );
};


export default DateRangePicker;
