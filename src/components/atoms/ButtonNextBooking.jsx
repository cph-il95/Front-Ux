import React from 'react'
import { Button } from '@mantine/core';
import Link from 'next/link';

export default function ButtonNextBooking() {
  return (
    <Link href="/booking/bookroom">
    <Button 
    variant="filled" 
    color="rgba(44, 46, 51, 1)" 
    size="md" 
    radius="xs" 
    style={{ marginLeft: '1000px', marginTop: '5px' }}
    >Next</Button>
      </Link>

  )
};
