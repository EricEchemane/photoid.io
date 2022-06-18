import { Center, Container, Paper, SegmentedControl, Space } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ChoosePackage from 'components/ChoosePackage';
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
  return (
    <>
      <Head>
        <title> PhotoId.IO by Eric Echemane </title>
      </Head>
      <Container style={{ maxWidth: '1080px' }}>
        <Paper p='1rem'>
          <Center>
            <SegmentedControl
              value={currentTab}
              onChange={setCurrentTab}
              data={actions}
              // orientation={smallDevice ? 'vertical' : 'horizontal'}
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