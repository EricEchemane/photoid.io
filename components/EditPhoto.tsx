import { Box, Button, Grid, Group, Image, Stack, Text } from '@mantine/core';
import useAppState, { Actions, AppStateType } from 'contexts/AppState';
import useDeviceWidthMatcher from 'modules/useDeviceWidthMatcher';
import React from 'react';
import ChosenPackage from './ChosenPackage';
import { Upload } from 'tabler-icons-react';
import { PhotoDropAndUpload } from './PhotoDropAndUpload';
/*
Requirements
1. display the selected package
2. upload a photo
3. remove background of photo
4. adjustments for photos
5. enable changing the photo of each picture-box
*/
export default function EditPhoto() {
    const { state, dispatch }: AppStateType = useAppState();
    const smallDevice = useDeviceWidthMatcher(700);
    const span = smallDevice ? 12 : 6;

    if (state.selectedPackage === null) return (
        <Stack align='center'>
            <Text color='gray'> No package is selected </Text>
            <Button size='md' variant='light' onClick={() => {
                dispatch({ type: Actions.change_tab, payload: 'choose' });
            }}> Choose One </Button>
        </Stack>
    );

    return (
        <Grid justify='center' gutter={30}>
            <Grid.Col span={span}>
                <ChosenPackage {...state.selectedPackage} />
            </Grid.Col>
            <Grid.Col span={span}>
                <PhotoDropAndUpload />
            </Grid.Col>
        </Grid>
    );
}
