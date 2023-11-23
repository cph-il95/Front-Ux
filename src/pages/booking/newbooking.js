import React from 'react'
import ButtonBack from '@/components/atoms/ButtonBack'
import ButtonNext from '@/components/atoms/Buttonnext'
import RoomCard1 from '@/components/molecules/RoomCard1'
import RoomCard2 from '@/components/molecules/RoomCard2'
import { Grid, GridCol } from '@mantine/core'

export default function newbookings() {
  return (
    <div className='mybookings'>
    
    <ButtonBack/>
    <ButtonNext/>
    <Grid>
      <GridCol span={3}><RoomCard1/></GridCol>
      <GridCol span={3}><RoomCard2/></GridCol>
      <GridCol span={3}><RoomCard3/></GridCol>
      <GridCol span={3}><RoomCard4/></GridCol>

    </Grid>
    
    </div>
  )
}
