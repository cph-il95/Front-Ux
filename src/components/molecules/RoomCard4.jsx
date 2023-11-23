import React, {useEffect, useState} from 'react'
import { Text, Paper} from '@mantine/core';
import ButtonSelectRoom from '../atoms/ButtonSelectRoom';
import ButtonRoomSelected from '../atoms/ButtonRoomSelected';

const RoomCard4 = ({selected, onClick}) => {

    const [roomState, setRoomState] = useState('select');

    useEffect(() => {
        setRoomState(selected ? 'selected' : 'select');
    }, [selected]);

    const handleButtonClick = () => {
        if (!selected) {
            setRoomState('selected');
            onClick('Room4');
        }
        
    };
  return (
    <Paper shadow="xs" p="xl">
        <img src="/5-kompri.png" alt="room 2.208" height={160} />
        <Text fw={500}>Room 2.208</Text>
      <Text size="sm" c="dimmed">
        8 persons
      </Text>
      <div>
        {roomState === 'select' && <ButtonSelectRoom onClick={handleButtonClick} selected={selected} />}
        {roomState === 'selected' && <ButtonRoomSelected onClick={handleButtonClick}/>}
      </div>
    </Paper>
  )
}

export default RoomCard4


