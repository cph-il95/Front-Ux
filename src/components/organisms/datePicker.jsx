import React, { useState } from 'react';
import { DatePicker } from '@mantine/dates';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      value={selectedDate}
      onChange={handleDateChange}
      label="Select a date"
      placeholder="Choose date"
      withSelect
    />
  );
};

export default MyDatePicker;