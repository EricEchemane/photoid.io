import { Center, Container, Paper, SegmentedControl, Space } from '@mantine/core';
import { useLogger, useMediaQuery } from '@mantine/hooks';
import ChoosePackage from 'components/ChoosePackage';
import useAppState from 'contexts/AppState';
import Head from 'next/head';
import React, { useState } from 'react';

const actions: { label: string, value: string; }[] = [
  { value: 'choose', label: 'Choose package' },
  { value: 'create', label: 'Custom package' },
  { value: 'print', label: 'Print now' },
];

export default function Home() {
  const [currentTab, setCurrentTab] = useState('choose');
  const smallDevice = useMediaQuery('(max-width: 500px)', false);
  const { state } = useAppState();
  useLogger('App', [state]);
  return (
    <>
      <Head>
        <title> PhotoId.IO by Eric Echemane </title>
      </Head>
      <Container style={{ maxWidth: '1080px' }}>
        <Paper >
          <Center>
            <SegmentedControl
              mt={20}
              value={currentTab}
              onChange={setCurrentTab}
              data={actions}
              size={smallDevice ? 'xs' : 'md'}
              transitionDuration={200}
              color={'blue'} />
          </Center>
          <Space h={40} />
          {currentTab === 'choose' && <ChoosePackage />}
        </Paper>
      </Container>
    </>
  );
}