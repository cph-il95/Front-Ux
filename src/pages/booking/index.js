import React from 'react';
import DateRangePicker from '@/components/organisms/datePicker'; // Adjust the path as necessary
import { MantineProvider } from '@mantine/core';
import ButtonBackBooking from '@/components/atoms/ButtonBackBooking';
const HomePage = () => {
  return (
    <div>
    <h1 style={{ marginLeft: '490px',fontSize: '20px' }}>PICK A DAY AND TIME</h1>
      <DateRangePicker />
      <MantineProvider/>
      <ButtonBackBooking/>
      
  
    


    </div>
  );
};

export default HomePage;
