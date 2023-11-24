import React from 'react'
import { Button } from '@mantine/core';
import Link from 'next/link';

export default function ButtonNextBooking() {
  return (
    <Link href="/booking/bookroom">
    <Button 
    variant="filled" 
    color="rgba(38, 18, 18, 1)" 
    size="xl" 
    radius="xs" 
    style={{ marginLeft: '1000px', marginTop: '5px' }}
    >Next</Button>
      </Link>

  )
};
