import { Center, Container, Paper, SegmentedControl } from '@mantine/core';
import ChoosePackage from 'components/ChoosePackage';
import Head from 'next/head';
import React, { useState } from 'react';

const actions: { label: string, value: string; }[] = [
  { value: 'choose', label: 'Choose Package' },
  { value: 'create', label: 'Create Custom Package' },
  { value: 'print', label: 'Print Now' },
];

export default function Home() {
  const [currentTab, setCurrentTab] = useState('choose');

  return (
    <>
      <Head>
        <title> PhotoId.IO </title>
      </Head>
      <Container>
        <Paper withBorder p='2rem' shadow='lg'>
          <Center>
            <SegmentedControl
              value={currentTab}
              onChange={setCurrentTab}
              data={actions}
              transitionDuration={200}
              color={'blue'} />
          </Center>
          {currentTab === 'choose' && <ChoosePackage />}
        </Paper>
      </Container>
    </>
  );
}