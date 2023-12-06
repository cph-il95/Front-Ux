import React, { useState } from "react";
import { Grid, GridCol, Stepper } from "@mantine/core";
import RoomCard1 from "@/components/molecules/RoomCard1";
import RoomCard2 from "@/components/molecules/RoomCard2";
import RoomCard3 from "@/components/molecules/RoomCard3";
import RoomCard4 from "@/components/molecules/RoomCard4";
import ButtonBack from "@/components/atoms/ButtonBack";
import ButtonNext from "@/components/atoms/ButtonNext";
import Link from "next/link";
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";

const BookRoom = () => {
  const [selectedRoom, setSelectedRoom] = useState({});
  const [error, setError] = useState("false");
  // const [selectedDate, setSelectedDate] = useState(null);
  const router = useRouter();
  console.log(
    "Setting selectedDate in localstorage:",
    JSON.stringify(selectedRoom)
  );
  

  // forbinder supabase auth
  const supabase = createClient(
    "https://mviilvaebgkbuyuwkrgd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12aWlsdmFlYmdrYnV5dXdrcmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMzY0MTMsImV4cCI6MjAxNTcxMjQxM30.dD4TGrVJHss_rKckmilVjQC2n2kOv2V2GFUPO0VOwyY"
  );

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);

    localStorage.setItem("selectedRoom", JSON.stringify(room));
  };

  const handleNextClick = () => {
    if (selectedRoom) {
      router.push("/booking/reservation");
    } else  {
      setError("Please select a room before proceeding.")
    }
    
    // chechAvailability();
  };

  
  const [active] = useState(1);

  // Sikre siden mod adgang hvis man ikke er logget ind
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (!email) {
      router.push("/signup");
    }
  }, []);

  // async function chechAvailability() {
  //   const date = JSON.parse(localStorage.getItem("selectedDate"));
  //   const room = JSON.parse(localStorage.getItem("selectedRoom"));
  //   const { data, error } = await supabase
  //     .from("bookings")
  //     .select(selectedDate, selectedRoom);
  //   if (date && room == selecetedDate && selectedRoom) {
  //     console.log("the room is already booked that date");
  //   }
  // }

  return (
    <>
      <Grid className="bookroom-steps">
        <GridCol span={6} offset={3}>
          <Stepper size="xs" active={active} allowNextStepsSelect={false}>
            <Stepper.Step label="Step 1"></Stepper.Step>
            <Stepper.Step label="Step 2"></Stepper.Step>
            <Stepper.Step label="Step 3"></Stepper.Step>
          </Stepper>
        </GridCol>
      </Grid>

      <h4 className="h4-choose-room">CHOOSE A ROOM</h4>

      <Grid className="RoomCards1234">
        <GridCol span={3}>
          <RoomCard1
            selected={selectedRoom === "Room 1.102"}
            onClick={() => handleRoomSelect("Room 1.102")}
          />
        </GridCol>

        <GridCol span={3}>
          <RoomCard2
            selected={selectedRoom === "Room 3.312"}
            onClick={() => handleRoomSelect("Room 3.312")}
          />
        </GridCol>

        <GridCol span={3}>
          <RoomCard3
            selected={selectedRoom === "Room 1.066"}
            onClick={() => handleRoomSelect("Room 1.066")}
          />
        </GridCol>

        <GridCol span={3} error={error}>
          <RoomCard4
            selected={selectedRoom === "Room 2.208"}
            onClick={() => handleRoomSelect("Room 2.208")}
          />
        </GridCol>
      </Grid>

      <Grid className="knapFremOgTilbage" 
      style={{
        display:"flex", 
        justifyContent:"space-between", 
        width:"95%", 
        padding:"0px 99px"
      }} >
        <GridCol span={2}>
          <Link href="/booking">
            <ButtonBack />
          </Link>
        </GridCol>
        <GridCol 
        span={1} 
        style={{
          marginLeft:"888px",
          marginTop:"4px"
          }}>
          <Link href="/booking/reservation" onClick={handleNextClick}>
            <ButtonNext disabled={!selectedRoom} />
          </Link>
        </GridCol>
      </Grid>
    </>
  );
};

export default BookRoom;
