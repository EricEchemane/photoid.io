import { Center, Container, Paper, SegmentedControl, Space } from '@mantine/core';
import { useLocalStorage, useLogger } from '@mantine/hooks';
import ChoosePackage from 'components/ChoosePackage';
import EditPhoto from 'components/EditPhoto';
import { photoPlaceHolderUrl } from 'contexts/initial_values';
import useAppState, { AppStateType, Actions } from 'contexts/AppState';
import useDeviceWidthMatcher from 'modules/useDeviceWidthMatcher';
import Head from 'next/head';
import React from 'react';

const actions: { label: string, value: string; }[] = [
  { value: 'choose', label: 'Choose package' },
  { value: 'edit', label: 'Edit Photo' },
  // { value: 'print', label: 'Printing' },
];

export default function Home() {
  const smallDevice = useDeviceWidthMatcher(500);
  const { state, dispatch }: AppStateType = useAppState();
  const [value, setValue] = useLocalStorage({ key: 'photoUrl', defaultValue: photoPlaceHolderUrl });

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
          {state.activeTab === 'edit' && <EditPhoto />}
        </Paper>
      </Container>
    </>
  );
}