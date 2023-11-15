import React from 'react'
import Timefrom from '@/components/molecules/Timefrom'
import ButtonBack from '@/components/atoms/ButtonBack'
import ButtonNext from '@/components/atoms/Buttonnext'

export default function mybookings() {
  return (
    <div className='mybookings'>
    <Timefrom/>
    <ButtonBack/>
    <ButtonNext/>
    </div>
  )
}
