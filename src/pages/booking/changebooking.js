import { Grid } from "@mantine/core";
import Link from "next/link";
import React from "react";
import ButtonBack from "@/components/atoms/ButtonBack";

export default function changeBooking() {
  return (
    <div>
      <Grid className="reservation-info">
        <Grid.Col span={12}>
          <h4>Your reservation</h4>
        </Grid.Col>
        <Grid.Col span={12}>
          <text>Please confirm your reservation</text>
        </Grid.Col>
        <Grid.Col span={12}>
          <div className="reservations-info">
            "Her skal der være info om brugeren ud fra login:))"
          </div>
        </Grid.Col>
      </Grid>

      <Grid className="knapTilbageOgConfirm">
        <Grid.Col span={2} offset={1}>
          <Link href="/booking/mybookings">
            <ButtonBack />
          </Link>
        </Grid.Col>
        <Grid.Col span={2} offset={7}></Grid.Col>
      </Grid>
    </div>
  );
}
