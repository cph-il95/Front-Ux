import ButtonBack from "@/components/atoms/ButtonBack";
import ButtonConfirm from "@/components/atoms/ButtonConfirm";
import { Stepper, Grid, GridCol, LoadingOverlay } from "@mantine/core";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";
import { useDisclosure } from '@mantine/hooks';

export default function Reservation() {
  // State hooks til at gemme brugerdata og reservationsspecifik information
  const [email, setEmail] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState([]);
  const [error, setError] = useState("Please confirm your reservation");
  const [active] = useState(2);
  const [visible, { toggle }] = useDisclosure(false);

  const router = useRouter();

  const supabase = createClient(
    "https://mviilvaebgkbuyuwkrgd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12aWlsdmFlYmdrYnV5dXdrcmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMzY0MTMsImV4cCI6MjAxNTcxMjQxM30.dD4TGrVJHss_rKckmilVjQC2n2kOv2V2GFUPO0VOwyY"
  );

  // Sikre siden mod adgang hvis man ikke er logget ind
  useEffect(() => {
    // Effekt hook til at sikre siden mod uautoriseret adgang og hente brugerdata og tjekke reservation
    const email = JSON.parse(localStorage.getItem("email"));
    if (!email) {
      router.push("/signup");
    } else {
      setEmail(email);
      fetchUserData();
      checkBooking();
    }

    if (typeof window !== "undefined") {
      const storedSelectedDate = JSON.parse(
        localStorage.getItem("selectedDate")
      );
      const storedSelectedRoom = JSON.parse(
        localStorage.getItem("selectedRoom")
      );
      if (storedSelectedDate && storedSelectedRoom) {
        setSelectedDate(storedSelectedDate);
        setSelectedRoom(storedSelectedRoom);
      }
    } else {
      router.push("/booking/start");
    }
  }, []);

    // Funktion til at hente brugerdata fra Supabase
  async function fetchUserData() {
    const loggedInEmail = JSON.parse(localStorage.getItem("email"));
    const { data, error } = await supabase
      .from("users")
      .select(firstname, surname, email)
      .eq("email", loggedInEmail);
    console.log(data);
    if (data && data.length > 0) {
      if (loggedInEmail == data[0].email) {
        setFirstname(data[0].firstname);
        setSurname(data[0].surname);
      }
    } else {
      console.log("error fethcing data", error);
    }
  }

  // Funktion til at tjekke om valgt dato og rum allerede er booket
  async function checkBooking() {
    const date = JSON.parse(localStorage.getItem("selectedDate"));
    const room = JSON.parse(localStorage.getItem("selectedRoom"));
    const { data, error } = await supabase
      .from("bookings")
      .select()
      .eq("selectedDate", date)
      .eq("selectedRoom", room);
    console.log(data);
    if (data && data.length > 0) {
      setError(
        "The room is already booked on this date, please choose a new room or date"
      );

      console.log("there is something in the array");
    } else {
      console.log("there is nothing in the array", error);
    }
  }

  // Funktion til at håndtere bekræftelsesklik og indsætte reservation i databasen
  async function handleConfirmClick() {
    toggle();
    setTimeout(async () => {
      try {
      const { error } = await supabase
        .from("bookings")
        .insert({ firstname, surname, email, selectedDate, selectedRoom });

      if (error) {
        setError("An error occurred during conformation");
      } else {
        router.push("/succes");
      }
      } catch (error) {
      setError("An error occurred during confirmation");
      } finally {
      toggle();
      }
    }, 2000);    
  }
  return (
    <>
    <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "md", blur: 2 }}/>

      <Grid className="reservation-steps">
        <GridCol span={6} offset={3}>
          <Stepper size="xs" active={active} allowNextStepsSelect={false}>
            <Stepper.Step label="Step 1"></Stepper.Step>
            <Stepper.Step label="Step 2"></Stepper.Step>
            <Stepper.Step label="Step 3"></Stepper.Step>
          </Stepper>
        </GridCol>
      </Grid>

      <Grid className="reservation-info" style={{ margin: "100px 0 0 130px" }}>
        <GridCol span={12}>
          <h4>Your reservation</h4>
        </GridCol>
        <GridCol span={12}>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </GridCol>
        <GridCol span={12}>
          <div
            className="reservations-info"
            style={{
              color: "rgba(24, 100, 171, 1)",
              display: "flex",
              flexDirection: "row",
              fontWeight: "500",
              justifyContent: "space-between",
              width: "50%",
              marginTop: "20px",
            }}
          >
            {/* <h2>Reservation Details</h2> */}
            <div className="date-room">
              <p style={{ padding: "20px 0" }}> {selectedDate}</p>
              <p style={{ padding: "20px 0" }}>{selectedRoom} </p>
            </div>

            <div className="name-email">
              <p style={{ padding: "20px 0" }}>
                {" "}
                {firstname} {surname}{" "}
              </p>
              <p style={{ padding: "20px 0" }}> {email}</p>
            </div>

            {/* <p>Time:</p> */}
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
          <Link href="/booking/confirmation" onClick={handleConfirmClick && toggle}>
            <ButtonConfirm />
          </Link>
        </GridCol>
      </Grid>
    </>
  );
}
