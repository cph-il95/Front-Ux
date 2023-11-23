import React from 'react'
import { Text, Paper} from '@mantine/core';
import ButtonSelectRoom from '../atoms/ButtonSelectRoom';

export default function RoomCard4() {
  return (
    <Paper shadow="xs" p="xl">
        <img src="5-kompri.png" alt="room 2.208" height={160} />
        <Text fw={500}>Room 2.208</Text>
      <Text size="sm" c="dimmed">
        8 persons
      </Text>
      <ButtonSelectRoom/>
    </Paper>
  )
}


