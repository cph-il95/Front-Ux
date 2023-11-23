import React from 'react'
import { Button } from '@mantine/core';
import Link from 'next/link';

export default function ButtonViewBooking() {
  return (
    <Link href="/booking/mybookings">
    <Button variant="filled" color="rgba(38, 18, 18, 1)" size="xl" radius="xs">VIEW MY BOOKING</Button>
    </Link>
  )
}
