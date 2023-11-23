import React from 'react';
import { Text, Paper} from '@mantine/core';
import ButtonSelectRoom from '../atoms/ButtonSelectRoom';

export default function RoomCard1() {
  return (
    <Paper shadow="xs" p="xl">
        <img src="/2-kompri.png" alt="room 1.102" height={160} />
        <Text fw={500}>Room 1.102</Text>
      <Text size="sm" c="dimmed">
        4 persons
      </Text>
      <ButtonSelectRoom/>
    </Paper>
  )
}




