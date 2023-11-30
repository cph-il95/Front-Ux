import React from 'react'
import styles from "./BookingCard.module.css"
import { Grid } from '@mantine/core'
import Link from 'next/link'


export default function BookingCard() {
  return (
    <div className={styles.bookingCard}>
      <Grid>
        <Grid.Col span={10}></Grid.Col>
        <Grid.Col span={2}>
          <Link href="/booking/changebooking">
          <p>Edit</p>
          </Link>
        </Grid.Col>
      </Grid>
    </div>
  )
}
