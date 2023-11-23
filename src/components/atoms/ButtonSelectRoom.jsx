import React from 'react'
import { Button} from '@mantine/core';

const ButtonSelectRoom = ({onClick, selected}) => {
  return (
    <Button  variant="filled" onClick={onClick} color={selected ? 'gray' : 'gray'} >Select room</Button>
  )
}

export default ButtonSelectRoom