import React, {useState, useEffect} from 'react';
import { Text, Paper} from '@mantine/core';
import ButtonSelectRoom from '../atoms/ButtonSelectRoom';
import ButtonRoomSelected from '../atoms/ButtonRoomSelected';

const RoomCard1 = ({ selected, onClick }) => {

  const [roomState, setRoomState] = useState('select');

  useEffect(() => {
    setRoomState(selected ? 'selected' : 'select');
  }, [selected]);

  const handleButtonClick = () => {
    if (!selected) {
      setRoomState(roomState === 'selected');
      onClick('Room1');
    }
      
  };
  return (
    <>
    <Paper shadow="xs" p="xl">
        <img src="/2-kompri.png" alt="room 1.102" height={160} />
        <Text fw={500}>Room 1.102</Text>
      <Text size="sm" c="dimmed">
        4 persons
      </Text>
      <div>
        {roomState === 'select' && <ButtonSelectRoom onClick={handleButtonClick} selected={selected} />}
        {roomState === 'selected' && <ButtonRoomSelected onClick={handleButtonClick} />}
      </div>
    </Paper>
    </>
  );
};

export default RoomCard1;




