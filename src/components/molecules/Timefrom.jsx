import { useRef } from 'react';
import { ActionIcon, rem } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';

export default function Timestamp() {
  const ref = useRef(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  );

  return (
    <TimeInput label="From" 
    withAsterisk 
    ref={ref} 
    rightSection={pickerControl}
    step={180}
    minTime={{hours: 9, minutes: 0}}
    maxTime={{hours: 12, minutes: 0}}
    />
  );
}


