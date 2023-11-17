import React, { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import 'react-day-picker/lib/style.css';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';




// jeg laver komponentet DateRangPicker
const DateRangePicker = () => {


// state til at spore start og slut tid
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState( new Date ());

// state til at spore den valgte dato

const [selectedDate, setSelectedDate] = useState(new Date ());

// funktion til at klare at datoen bliver ændret

const handleDateChange = (date) => {
setSelectedDate(date);
};

// funktion til at klare ændring af start tiden
const handleStartTimeChange = (time) => {
setStartDate(time);
};

// funktion til at klare ændringer i sluttiden 

const handleEndTimeChange =(time) => {
setEndDate(time);
};

return (
    <div>
      <h2>Select a Date, Start Time, and End Time</h2>
      <div>
        <label>Date:</label>
        <DatePicker selected={selectedDate} onDayClick={handleDateChange} />
      </div>
      <div>
        <label>Start Time:</label>
        <DateTimePicker
          value={startDate}
          onChange={handleStartTimeChange}
          calendarIcon={null} // Hide the calendar icon for the start time
        />
      </div>
      <div>
        <label>End Time:</label>
        <DateTimePicker
          value={endDate}
          onChange={handleEndTimeChange}
          calendarIcon={null} // Hide the calendar icon for the end time
        />
      </div>
      {selectedDate && (
        <p>
          You selected {selectedDate.toLocaleDateString()} from{' '}
          {startDate.toLocaleTimeString()} to {endDate.toLocaleTimeString()}
        </p>
      )}
    </div>
  );
};

export default DateRangePicker;





























// import React, { useState } from 'react';
// import { DatePicker } from '@mantine/dates';
// import { Grid } from '@mantine/core';



// const MyDatePicker = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };



  
//   return (
//     <DatePicker
//       value={selectedDate}
//       onChange={handleDateChange}
//       label="Select a date"
//       placeholder="Choose date"
//       withSelect
//     />
//   );
// };

// export default MyDatePicker;