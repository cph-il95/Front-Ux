import { Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import React from 'react'

export default function Timefrom() {
  return (
    <>
    <label htmlFor="">From</label>
    
    <Input
      component="select" withAsterisk
      rightSection={<IconChevronDown size={14} stroke={1.5} />}
      pointer
      mt="md"
    >
      <option value="1" disabled>-</option>
      <option value="2">9</option>
      <option value="3">10</option>
    </Input>
  </>
  )
}



