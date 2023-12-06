import ButtonViewBooking from "@/components/atoms/ButtonViewBooking";
import { Button, Center, Stack } from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../components/backgroundImage.module.css";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";

export default function Start() {
  const [email, setEmail] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");

  // forbinder supabase auth
  const supabase = createClient(
    "https://mviilvaebgkbuyuwkrgd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12aWlsdmFlYmdrYnV5dXdrcmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMzY0MTMsImV4cCI6MjAxNTcxMjQxM30.dD4TGrVJHss_rKckmilVjQC2n2kOv2V2GFUPO0VOwyY"
  );

  const router = useRouter();

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (!email) {
      router.push("/signup");
    } else {
      setEmail(email);
      fetchUserData();
    }
  }, []);

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

  return (
    <div className={styles.background}>
      <Center h={1000}>
        <div>
          <Stack justify="center">
            <h2 style={{color:"white", fontSize:"20px", textDecoration:"underline", textUnderlineOffset:"20px", textDecorationThickness:"1px", fontWeight:"400", marginLeft:"35px"}} >
              HI {firstname} {surname}
            </h2>
            <Link href="/booking">
              <Stack justify="center" h={130}>
                <Button
                  variant="filled"
                  size="md"
                  radius="xs"
                  color="rgba(44, 46, 51, 1)"
                >
                  NEW BOOKING
                </Button>
              </Stack>
            </Link>
            <ButtonViewBooking></ButtonViewBooking>
          </Stack>
        </div>
      </Center>
    </div>
  );
}
