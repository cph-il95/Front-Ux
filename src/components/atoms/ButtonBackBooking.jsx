import React from 'react'
import { Button } from '@mantine/core';
import Link from 'next/link';

export default function ButtonBackBooking() {
  return (
    <Link href="/booking/start">
    <Button 
    variant="filled" 
    color="rgba(38, 18, 18, 1)" 
    size="xl" 
    radius="xs"
    >Back</Button>
    </Link>
  )
};