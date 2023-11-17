import React from 'react';
import { Text, Paper } from '@mantine/core';
import ButtonSelectRoom from '../atoms/ButtonSelectRoom';

export default function RoomCard() {
  return (
    <Paper shadow="xs" p="xl">
        <img src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="office" height={160} />
        <Text fw={500}>Room 1.102</Text>
      <Text size="sm" c="dimmed">
        4 persons
      </Text>
      <ButtonSelectRoom/>
    </Paper>
  )
}




