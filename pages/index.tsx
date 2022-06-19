import { Center, Container, Paper, SegmentedControl, Space } from '@mantine/core';
import { useLogger, useMediaQuery } from '@mantine/hooks';
import ChoosePackage from 'components/ChoosePackage';
import useAppState, { AppStateType, Actions } from 'contexts/AppState';
import Head from 'next/head';
import React from 'react';

const actions: { label: string, value: string; }[] = [
  { value: 'choose', label: 'Choose package' },
  { value: 'edit', label: 'Edit Photo' },
  { value: 'print', label: 'Print now' },
];

export default function Home() {
  const smallDevice = useMediaQuery('(max-width: 500px)', false);
  const { state, dispatch }: AppStateType = useAppState();

  const setCurrentTab = (value: string) => {
    dispatch({ type: Actions.change_tab, payload: value });
  };

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
              value={state.activeTab}
              onChange={setCurrentTab}
              data={actions}
              size={smallDevice ? 'xs' : 'md'}
              transitionDuration={200}
              color={'blue'} />
          </Center>
          <Space h={40} />
          {state.activeTab === 'choose' && <ChoosePackage />}
        </Paper>
      </Container>
    </>
  );
}