import React from 'react'
import styles from "../backgroundImage.module.css"
import { Center, Stack } from '@mantine/core';
import BookingCard from '../molecules/BookingCard';

export default function SeeBookings() {
  return (
    <div className={styles.background}>
        <Center h="90vh">
            <div className="box">
                <Stack h={400}>
                    <h2>MY BOOKINGS</h2>
                    <BookingCard></BookingCard>
                    <BookingCard></BookingCard>
                </Stack>
            </div>
        </Center>
    </div>
  );
}