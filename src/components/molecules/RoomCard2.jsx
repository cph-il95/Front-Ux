import React from 'react'
import { Text, Paper} from '@mantine/core';
import ButtonSelectRoom from '../atoms/ButtonSelectRoom';

export default function RoomCard2() {
  return (
    <Paper shadow="xs" p="xl">
        <img src="/3-kompri.png" alt="room 3.312" height={160} />
        <Text fw={500}>Room 3.312</Text>
      <Text size="sm" c="dimmed">
        6 persons
      </Text>
      <ButtonSelectRoom/>
    </Paper>
  )
}




