import React, { useEffect, useState } from 'react'
// import styles from "../backgroundImage.module.css"
import styles from "./SeeBooking.module.css"
import { Center, Stack } from '@mantine/core';
import { createClient } from "@supabase/supabase-js";
import Link from 'next/link';


export default function SeeBookings() {
  const [email, setEmail] = useState([]);
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedRoom, setSelectedRoom] = useState("")

  const supabase = createClient(
    "https://mviilvaebgkbuyuwkrgd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12aWlsdmFlYmdrYnV5dXdrcmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMzY0MTMsImV4cCI6MjAxNTcxMjQxM30.dD4TGrVJHss_rKckmilVjQC2n2kOv2V2GFUPO0VOwyY"
  );

      // Sikre siden mod adgang hvis man ikke er logget ind
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (!email) {
      router.push("/signup");
    } else {
      fetchUserData();
    }
  }, []);

  async function fetchUserData() {
    const loggedInEmail = JSON.parse(localStorage.getItem("email"));
    const { data, error } = await supabase
    .from("bookings")
    .select(selectedDate, selectedRoom, email)
    .eq("email", loggedInEmail)
    console.log(data)
  }



  return (
    <div className={styles.background}>
        <Center h="90vh">

            <div className="box">
                <Stack h={400}>
                    <h2>MY BOOKINGS</h2>
                    <div className={styles.bookingCard}>
                          <p>{selectedDate}</p>
                          <p>{selectedRoom}</p>
                          <Link href="/booking/changebooking">
                          <p>Edit</p>
                          </Link>
                    </div>
                </Stack>
            </div>
        </Center>
    </div>
  );
}