import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ButtonBack from "@/components/atoms/ButtonBack";
import Link from "next/link";
import { Grid, GridCol } from "@mantine/core";
import SeeBookings from "@/components/organisms/SeeBookings";

export default function mybookings() {
  const router = useRouter();

  // Sikre siden mod adgang hvis man ikke er logget ind
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (!email) {
      router.push("/signup");
    }
  }, []);

  return (
    <>
    <div>
      <SeeBookings></SeeBookings>
      <Grid>
      <GridCol span={2} offset={1} style={{position:"absolute", top:"650px", left:"50px"}}>
        <Link href="/booking/start">
        < ButtonBack />
        </Link>
      </GridCol>
    </Grid>
    </div>
    
  </>
  );
}
