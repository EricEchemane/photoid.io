import { Button, useMantineColorScheme } from '@mantine/core';
import React from 'react';

export default function Home() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div style={{ margin: '5rem' }}>
      <Button onClick={() => toggleColorScheme()}> {colorScheme} </Button>
    </div>
  );
}
