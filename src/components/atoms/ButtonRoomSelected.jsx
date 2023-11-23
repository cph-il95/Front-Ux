import React from 'react'
import { Button } from '@mantine/core';
import CheckIcon from '@mui/icons-material/Check';

const ButtonRoomSelected = ({ onClick}) => {
     return (
    <Button onClick={onClick} style={{paddingLeft: '47px', paddingRight: '46px'}} variant="filled" color='blue' ><CheckIcon /></Button>
  )
}
 
export default ButtonRoomSelected

