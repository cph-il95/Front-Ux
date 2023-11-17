import React from 'react'
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';



import React, { useState } from "react";
import useMyContext from "@/context/my-context";
import Link from "next/link";
import { DatePicker } from "@mantine/dates";

export default function dato() {
  const contextValue = useMyContext();
  const [value, setValue] = useState("");

  function handleChange(event) {
    contextValue.setDate(event.target.value);
  }

  return (
    <div>
      <p>Vælg dato for booking</p>
      <div>
        <DatePicker allowDeselect value={value} onChange={setValue} />;
        <input type="date" value={contextValue.date} onChange={handleChange} />
      </div>
      <Link href="/booking/">
        <button>to booking page</button>
      </Link>
    </div>
  );
}
























// // jeg laver dayPicker komponentet 
// const DayPickerComponent = () => {
// // jeg laver et state for at kunne spore den valgte dag
// const [selectedDay, setSelectedDay] = useState(null);
// // 
// const handleDayClick = (day) => {
//     setSelectedDay(day);
//   };

//   return (
//     <div>
//       <h2>Select a Day</h2>
//       <DayPicker selected={selectedDay} onDayClick={handleDayClick} />
//       {selectedDay && (
//         <p>You selected {selectedDay.toLocaleDateString()}</p>
//       )}
//     </div>
//   );
// };

// export default DayPickerComponent;