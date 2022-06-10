import { Button, Paper, useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

export default function Home() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const largeScreen = useMediaQuery('(min-width: 900px)', false);

  return (
    <div>
      <Paper p='2rem' m='2rem' shadow='md'>
        <Button onClick={() => toggleColorScheme()}>
          {colorScheme}
        </Button>

        <h1> {largeScreen ? 'large' : 'small'} </h1>
      </Paper>
    </div>
  );
}
