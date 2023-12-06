import React from 'react'
import styles from "./BookingCard.module.css"
import { Grid } from '@mantine/core'
import Link from 'next/link'


export default function BookingCard({bookingCard}) {

  

  return (
    <>
    <div className={styles.bookingCard}>
      <Grid style={{fontWeight:"500", padding:"5px", margin:"5px", height:"80px", display:"flex", alignItems:"center"}}>
        <label className="selectedDate" htmlFor='bookingCard.selectedDate'>{bookingCard.selectedDate}</label>
        <label className="selectedRoom" htmlFor='bookingCard.selectedRoom'>{bookingCard.selectedRoom}</label>
        <Grid.Col span={2}>
          <Link href="/booking/changebooking">
          <p>Edit</p>
          </Link>
        </Grid.Col>
      </Grid>
    </div>
    </>
  )
}
