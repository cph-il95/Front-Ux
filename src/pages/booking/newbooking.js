import React from "react";
import ButtonBack from "@/components/atoms/ButtonBack";
import ButtonNext from "@/components/atoms/Buttonnext";
import RoomCard1 from "@/components/molecules/RoomCard1";
import RoomCard2 from "@/components/molecules/RoomCard2";
import RoomCard3 from "@/components/molecules/RoomCard3";
import RoomCard4 from "@/components/molecules/RoomCard4";
import { useEffect } from "react";
import { Grid, GridCol } from "@mantine/core";
import { useRouter } from "next/router";

export default function newbookings() {
  const router = useRouter();

  // Sikre siden mod adgang hvis man ikke er logget ind
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (!email) {
      router.push("/signup");
    }
  }, []);

  return (
    <div className="mybookings">
      <ButtonBack />
      <ButtonNext />
      <Grid>
        <GridCol span={3}>
          <RoomCard1 />
        </GridCol>
        <GridCol span={3}>
          <RoomCard2 />
        </GridCol>
        <GridCol span={3}>
          <RoomCard3 />
        </GridCol>
        <GridCol span={3}>
          <RoomCard4 />
        </GridCol>
      </Grid>
    </div>
  );
}
