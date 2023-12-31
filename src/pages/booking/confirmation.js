import { Stepper, Grid, GridCol } from "@mantine/core";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";
import ButtonViewBooking from "@/components/atoms/ButtonViewBooking";

export default function confirmation() {
  // Oprettelse af router og state hooks til brugerinformation og reservation
  const router = useRouter();

  const [email, setEmail] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");

  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState([]);

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
      setEmail(email);
      fetchUserData();
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

  // State hook til at angive det aktive trin i stepperen
  const [active] = useState(3);
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

      <Grid className="reservation-info" style={{ margin: "100px 0 0 130px" }}>
        <GridCol span={12}>
          <h4>Reservation confirmed</h4>
        </GridCol>
        <GridCol span={12}>
          <p style={{ color: "rgba(92, 95, 102, 1)" }}>
            Remember that you can review your reservation details under "My
            bookings"
          </p>
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
          </div>
        </GridCol>
      </Grid>

      <Grid className="knapTilbageOgConfirm">
        <GridCol span={2} offset={1}>
          <ButtonViewBooking />
        </GridCol>
        <GridCol span={2} offset={7}></GridCol>
      </Grid>
    </>
  );
}
