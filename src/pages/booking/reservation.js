import ButtonBack from '@/components/atoms/ButtonBack'
import Link from 'next/link'
import React from 'react'

export default function reservation() {
  return (

    <>
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
