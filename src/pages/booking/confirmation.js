import React from "react";
import ButtonBack from "@/components/atoms/ButtonBack";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Stepper, Grid, GridCol } from "@mantine/core";

export default function confirmation() {
  const router = useRouter();

  // Sikre siden mod adgang hvis man ikke er logget ind
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (!email) {
      router.push("/signup");
    }
  }, []);

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

     <div>Her skal der vises en bekræftelse på hvad der er blevet reserveret</div>

     <Link href="/booking/reservation">
            <ButtonBack />
          </Link>

     </>
  )
  
  
  
 
}
