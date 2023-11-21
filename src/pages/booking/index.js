import React from 'react';
import DateRangePicker from '@/components/organisms/datePicker'; // Adjust the path as necessary
import { MantineProvider } from '@mantine/core';
import ButtonNext from '@/components/atoms/Buttonnext'
import ButtonBack from '@/components/atoms/ButtonBack'
const HomePage = () => {
  return (
    <div>
      <h1>PICK A DAY AND TIME</h1>
      <DateRangePicker />
      <MantineProvider/>
      <ButtonNext/>
      <ButtonBack/>
  
    </div>
  );
};

export default HomePage;
