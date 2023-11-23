import React, {useState} from 'react'
import { Button, CheckIcon } from '@mantine/core';

export default function ButtonSelectRoom() {

  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
      setIsSelected(!isSelected);
  
  };



  return (
    <Button onClick={handleClick} variant="filled" color="rgba(44, 46, 51, 1)" size="sm" radius="sm">{isSelected ? <CheckIcon style={{padding: 15, margin: '0 5px', color: 'white' }} /> : 'Select Room'}</Button>
    
  )
}
