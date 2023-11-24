import ButtonBack from "@/components/atoms/ButtonBack";
import ButtonConfirm from "@/components/atoms/ButtonConfirm";
import { Stepper, Grid, GridCol } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function reservation() {
  const [active] = useState(2);
  // const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  // const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

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
          <text>Please confirm your reservation</text>
        </GridCol>
        <GridCol span={12}>
          <div className="reservations-info">
            "Her skal der være info om brugeren ud fra login:))"
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
}
