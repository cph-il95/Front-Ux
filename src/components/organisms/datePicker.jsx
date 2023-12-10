import React, { useState, useEffect } from 'react';
import { DatePicker } from '@mantine/dates';
import { Grid, PasswordInput, TextInput, Stack } from "@mantine/core";



const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null); 
  // Definerer en state variabel for startdatoen med en setter-funktion, initialiseret til null.
  const [endDate, setEndDate] = useState(null);
  // Definerer en state variabel for slutdatoen med en setter-funktion, initialiseret til null.
  const [selectedDate, setSelectedDate] = useState(null);
// Definerer en state variabel for den valgte dato med en setter-funktion, initialiseret til 

  useEffect(() => {
    const now = new Date();// Opretter en ny Date objekt, der repræsenterer (nuværende tidspunkt.)
    setStartDate(now); // start dato til nuverende tidspunkt
    setEndDate(now);// slut dato til nuverende tidspunkt
    setSelectedDate(now); // valgte dato til nuverende tid
  }, []);

  const generateTimes = () => {
    const times = [];
    for (let i = 0; i < 24; i++) {
      times.push(`${i.toString().padStart(2, '07')}:00`); // Tilføjer hver time som en streng til arrayet, formateret med to cifre.
    }
    return times;
  };

  const handleStartTimeChange = (event) => {
    const newTime = new Date(startDate);
    const [hours,] = event.target.value.split(':');
    // // Splitter den valgte værdi ved kolon og tager kun timer-delen.
    newTime.setHours(hours, 0, 0); // Sætter timer, minutter og sekunder for den nye tid.
    setStartDate(newTime); // Opdaterer startdatoen med den nye tid.
  };
  
  const handleEndTimeChange = (event) => {
    const newTime = new Date(endDate); 
    const [hours,] = event.target.value.split(':'); //Splitter den valgte værdi ved kolon og tager kun timer-delen.
    newTime.setHours(hours, 0, 0); // Sætter timer, minutter og sekunder for den nye tid.
    setEndDate(newTime);  // Opdaterer slutdatoen med den nye tid.
  };

// en knap til at trykke på næste side 

//   const handleButtonClick = () => {
//     // Handle button click logic here
//     console.log('Button clicked!');
//   };


  if (!startDate || !endDate || !selectedDate) {
    return null; // or some loading placeholder
  } else {
    localStorage.setItem("selectedDate", JSON.stringify(selectedDate));
    //Returnerer null, hvilket betyder, at intet renderes, hvis en af datoerne ikke er sat.
  }



 
  return (

    <Grid gutter="md" style={{ marginTop: '150px' }}>
      
      <Grid.Col span={3}  offset={4}> 
      {/* div til at holde datepicker */}
      <h1 style={{ fontSize: '20px' }}>PICK A DAY AND TIME </h1>
        <label>Date:</label>
        <DatePicker
          value={selectedDate}
          onChange={setSelectedDate}
        />
      </Grid.Col>
      <Stack h={150}>
      <Grid.Col span={12}>
        {/* Div til at holde starttidsvælgeren. */}
        <label>Start Time:</label>
        <select value={startDate.getHours() + '07:00'} onChange={handleStartTimeChange}>
          {/* Mapper gennem tider genereret af generateTimes funktion. */}
          {generateTimes().map(time => (
            <option key={time} value={time}>{time}</option> //Hver time som en option i dropdown.
          ))}
        </select>
      </Grid.Col>
     
      
      <Grid.Col span={12}>
        {/*  Div til at holde sluttidsvælgeren. */}
        <label>End Time:</label>
        <select value={endDate.getHours() + ':00'} onChange={handleEndTimeChange}>
          {/* Mapper gennem tider genereret af generateTimes funktion */}
          {generateTimes().map(time => (
            <option key={time} value={time}>{time}</option> 
            // Hver time som en option i dropdown.
          ))}
        </select>
      </Grid.Col>
      </Stack>
      <Grid.Col span={12} offset={4}>
        {/*  Paragraph til at vise den valgte dato og tid. */}
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
//  Eksporterer DateRangePicker komponenten
