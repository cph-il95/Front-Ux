import React, { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { Grid } from '@mantine/core';
import 'react-day-picker/lib/style.css';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';




// jeg laver komponentet DatPicker 
const MyDatePicker = () => {

// status for at spore den valgte dato og klokkeslæt
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

// Funktionen til at håndtere dato og tidsændring
  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
  };



  
  return (

    <div>
    <h2>Select a date and time</h2>
    <div>
    <DatePicker
      value={selectedDateTime}
      onChange={handleDateTimeChange}
      />
     </div>

     {selectedDateTime && (
        <p>
          You selected {selectedDateTime.toLocaleDateString()} at{' '}
          {selectedDateTime.toLocaleTimeString()}
        </p>
      )}
      </div>
  );
};

export default MyDatePicker;






























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