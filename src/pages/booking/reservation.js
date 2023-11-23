import ButtonBack from '@/components/atoms/ButtonBack'
import { Stepper, Button, Group } from '@mantine/core';
import Link from 'next/link'
import React, {useState} from 'react'


export default function reservation() {

    const [active, setActive] = useState(2);
    // const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    // const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    
  return (
    <>
    
    <Stepper size='xs' active={active}  allowNextStepsSelect={false}>
        <Stepper.Step label="Step 1">
          
        </Stepper.Step>
        <Stepper.Step label="Step 2">
        
        </Stepper.Step>
        <Stepper.Step label="Step 3">
        </Stepper.Step>
      </Stepper>

    <h4>Your reservation</h4>
    <text>
        Please confirm your reservation
    </text>

    <Link href="/booking/bookroom">
        <ButtonBack/>
    </Link>
    
    </>
    
  )
}


function Demo() {
  

  return (
    <>
      

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}