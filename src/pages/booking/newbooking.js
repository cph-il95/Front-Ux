import React from 'react'
import TimeFrom from '@/components/molecules/TimeFrom'
import ButtonBack from '@/components/atoms/ButtonBack'
import ButtonNext from '@/components/atoms/Buttonnext'
import TimeTo from '@/components/molecules/TimeTo'
import RoomCard from '@/components/molecules/RoomCard'

export default function newbookings() {
  return (
    <div className='mybookings'>
    <TimeFrom/>
    <TimeTo/>
    <ButtonBack/>
    <ButtonNext/>
    <RoomCard/>
    </div>
  )
}
