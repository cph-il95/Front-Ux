import ButtonBack from '@/components/atoms/ButtonBack'
import { Stepper, Grid, GridCol } from '@mantine/core';
import Link from 'next/link'
import React, {useState} from 'react'


export default function reservation() {

    const [active] = useState(2);
    // const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    // const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    
  return (
    <>
    <Grid>
        <GridCol span={6} offset={3}>
            <Stepper size='xs' active={active}  allowNextStepsSelect={false}>
                <Stepper.Step label="Step 1">
                </Stepper.Step>
                <Stepper.Step label="Step 2">
                </Stepper.Step>
                <Stepper.Step label="Step 3">
                </Stepper.Step>
            </Stepper>
        </GridCol>
    </Grid>
    

      <Grid>
        <GridCol span={12}>
            <h4>Your reservation</h4>
        </GridCol>
        <GridCol span={12}>
            <text>Please confirm your reservation</text>
        </GridCol>
        <GridCol span={12}>
            <div className='reservations-info'>"Her skal der være info om brugeren ud fra login:))"</div>
        </GridCol>
      </Grid>

    
   

    <Link href="/booking/bookroom">
        <ButtonBack/>
    </Link>
    
    </>
    
  )
}

