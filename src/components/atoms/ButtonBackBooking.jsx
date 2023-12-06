import React from 'react'
import { Button } from '@mantine/core';
import Link from 'next/link';

export default function ButtonBackBooking() {
  return (
    <Link href="/booking/start">
    <Button 
    variant="filled" 
    color="rgba(44, 46, 51, 1)" 
    size="md" 
    radius="xs"
    >Back</Button>
    </Link>
  )
};