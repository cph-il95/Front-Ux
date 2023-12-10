import React from 'react'
import styles from "./BookingCard.module.css"
import { Grid } from '@mantine/core'
import Link from 'next/link'

// Definerer og eksporterer BookingCard-funktionen som en React-komponent
export default function BookingCard({ bookingCard, onDelete }) {

  // Returnerer JSX til komponenten
  return (
    <>
      <div className={styles.bookingCard}>
        <Grid style={{ fontWeight: "600", margin: "5px", height: "70px", display: "flex", alignItems: "center" }}>
           {/* Label for at vise den valgte dato, med specifik styling */}
          <label style={{ padding: "10px" }} className="selectedDate" htmlFor='bookingCard.selectedDate'>{bookingCard.selectedDate}</label>
           {/* Label for at vise det valgte værelse, med specifik styling */}
          <label style={{ padding: "10px" }} className="selectedRoom" htmlFor='bookingCard.selectedRoom'>{bookingCard.selectedRoom}</label>
          <Grid.Col span={2}>
            {/* Knap for at slette bookingen, aktiverer onDelete-funktionen når den klikkes */}
            <button style={{ color: "black", textDecorationLine: "none", fontWeight: "400", fontSize: "16px" }} onClick={() => onDelete(bookingCard.id)}>
              Delete
            </button>
          </Grid.Col>
        </Grid>
      </div>
    </>
  )
}
