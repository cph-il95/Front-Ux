import ButtonBack from "@/components/atoms/ButtonBack";
import ButtonConfirm from "@/components/atoms/ButtonConfirm";
import { Stepper, Grid, GridCol } from "@mantine/core";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";


export default function Reservation() {
  const router = useRouter();
  const selectedDate = localStorage.getItem("selectedDate");
  const selectedRoom = JSON.parse(localStorage.getItem("selectedRoom"));
  const firstname = localStorage.getItem("firstname");
  console.log("firstname:", firstname);
  const surname = localStorage.getItem("surname");
  console.log("surname:", surname);
  const email = localStorage.getItem("email");
  console.log("email:", email);

 

  console.log("Selected Date:", selectedDate);
  console.log("Selected Room:", selectedRoom);


  const [active] = useState(2);


  // Sikre siden mod adgang hvis man ikke er logget ind
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (!email) {
      router.push("/signup");
    }
  }, []);

  return (
    <>
      <Grid className="reservation-steps">
        <GridCol span={6} offset={3}>
          <Stepper size="xs" active={active} allowNextStepsSelect={false}>
            <Stepper.Step label="Step 1"></Stepper.Step>
            <Stepper.Step label="Step 2"></Stepper.Step>
            <Stepper.Step label="Step 3"></Stepper.Step>
          </Stepper>
        </GridCol>
      </Grid>

      <Grid className="reservation-info">
        <GridCol span={12}>
          <h4>Your reservation</h4>
        </GridCol>
        <GridCol span={12}>
          <p>Please confirm your reservation</p>
        </GridCol>
        <GridCol span={12}>
          <div className="reservations-info">
            <h2>Reservation Details</h2>
            <p> name: {firstname} {surname} </p>
            <p> email: </p>
            <p>Date: {selectedDate}</p>
            <p>Time:</p>
            <p>Room: {selectedRoom?.roomNumber} </p>
          </div>
        
        </GridCol>
      </Grid>

      <Grid className="knapTilbageOgConfirm">
        <GridCol span={2} offset={1}>
          <Link href="/booking/bookroom">
            <ButtonBack />
          </Link>
        </GridCol>
        <GridCol span={2} offset={7}>
          <Link href="/booking/confirmation">
            <ButtonConfirm />
          </Link>
        </GridCol>
      </Grid>
    </>
  );
  };
