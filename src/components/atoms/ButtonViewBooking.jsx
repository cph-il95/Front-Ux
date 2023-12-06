import React from 'react'
import { Button } from '@mantine/core';
import Link from 'next/link';

export default function ButtonViewBooking() {
  return (
    <Link href="/booking/mybookings">
    <Button variant="filled" color="rgba(44, 46, 51, 1)" size="md" radius="xs">VIEW MY BOOKING</Button>
    </Link>
  )
}
