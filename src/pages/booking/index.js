import React from 'react';
import DateRangePicker from '@/components/organisms/datePicker'; // Adjust the path as necessary
import { MantineProvider } from '@mantine/core';
const HomePage = () => {
  return (
    <div>
      <h1>PICK A DAY AND TIME</h1>
      <DateRangePicker />
      <MantineProvider/>
  
    </div>
  );
};

export default HomePage;
