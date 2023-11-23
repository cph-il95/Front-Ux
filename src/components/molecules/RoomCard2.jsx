import React, {useState, useEffect} from 'react'
import { Text, Paper} from '@mantine/core';
import ButtonSelectRoom from '../atoms/ButtonSelectRoom';
import ButtonRoomSelected from '../atoms/ButtonRoomSelected';

const RoomCard2 = ({selected, onClick}) => {

    const [roomState, setRoomState] = useState('select');

    useEffect(() => {
        setRoomState(selected ? 'selected' : 'select');
    }, [selected]);

  const handleButtonClick = () => {
    if (!selected) {
        setRoomState('selected');
        onClick('Room2');
    }
      
  };
  return (
    <Paper shadow="xs" p="xl">
        <img src="/3-kompri.png" alt="room 3.312" height={160} />
        <Text fw={500}>Room 3.312</Text>
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


export default RoomCard2

