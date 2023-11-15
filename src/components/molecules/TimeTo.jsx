import React from 'react'
import { useRef } from 'react';
import { ActionIcon, rem } from '@mantine/core';
import { TimeInput } from '@mantine/dates';

export default function TimeTo() {
    const ref = useRef(null);

    const pickerControl = (
        <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
        </ActionIcon>
      );
      
  return (
    <TimeInput label="To" 
    withAsterisk 
    ref={ref} 
    rightSection={pickerControl}
    step={180}
    minTime={{hours: 9, minutes: 0}}
    maxTime={{hours: 12, minutes: 0}}
    />
  )
}
