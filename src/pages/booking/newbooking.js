import React from 'react'
import TimeFrom from '@/components/molecules/TimeFrom'
import ButtonBack from '@/components/atoms/ButtonBack'
import ButtonNext from '@/components/atoms/Buttonnext'

export default function newbookings() {
  return (
    <div className='mybookings'>
    <TimeFrom/>
    <ButtonBack/>
    <ButtonNext/>
    </div>
  )
}
