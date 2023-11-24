import React from 'react';
import DateRangePicker from '@/components/organisms/datePicker'; // Adjust the path as necessary
import { MantineProvider } from '@mantine/core';
import ButtonBackBooking from '@/components/atoms/ButtonBackBooking';
import ButtonNextBooking from '@/components/atoms/ButtonNextBooking';

const HomePage = () => {
  return (
    <div>
   
      <DateRangePicker />
      <MantineProvider/>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '95%', padding: '100px',paddingTop:'30px' }}>
     
      <ButtonBackBooking />
      <ButtonNextBooking />
      </div>

      
  
    


    </div>
  );
};

export default HomePage;
