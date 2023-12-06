import React from 'react'
import styles from "./BookingCard.module.css"
import { Grid } from '@mantine/core'
import Link from 'next/link'


export default function BookingCard({bookingCard}) {

  

  return (
    <>
    <div className={styles.bookingCard}>
      <Grid style={{fontWeight:"600", margin:"5px", height:"70px", display:"flex", alignItems:"center"}}>
        <label style={{padding:"10px"}} className="selectedDate" htmlFor='bookingCard.selectedDate'>{bookingCard.selectedDate}</label>
        <label style={{padding:"10px"}} className="selectedRoom" htmlFor='bookingCard.selectedRoom'>{bookingCard.selectedRoom}</label>
        <Grid.Col span={2} >
          <Link style={{color:"black", textDecorationLine:"none", fontWeight:"400", fontSize:"16px"}} href="/booking/changebooking">
          <p>Edit</p>
          </Link>
        </Grid.Col>
      </Grid>
    </div>
    </>
  )
}
