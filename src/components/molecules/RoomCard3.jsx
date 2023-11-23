import React, {useEffect, useState} from 'react'
import { Text, Paper} from '@mantine/core';
import ButtonSelectRoom from '../atoms/ButtonSelectRoom';
import ButtonRoomSelected from '../atoms/ButtonRoomSelected';

const RoomCard3 = ({selected, onClick}) => {

    const [roomState, setRoomState] = useState('select');

    useEffect(() => {
        setRoomState(selected ? 'selected' : 'select');
    }, [selected]);

  const handleButtonClick = () => {
    if (!selected) {
        setRoomState('selected');
        onClick('Room3');
    }
      
  };
  return (
    <Paper shadow="xs" p="xl">
        <img src="/4-kompri.png" alt="room 1.066" height={160} />
        <Text fw={500}>Room 1.066</Text>
      <Text size="sm" c="dimmed">
        6 persons
      </Text>
      <div>
        {roomState === 'select' && <ButtonSelectRoom onClick={handleButtonClick} selected={selected} />}
        {roomState === 'selected' && <ButtonRoomSelected onClick={handleButtonClick}/>}
      </div>
    </Paper>
  )
}

export default RoomCard3




