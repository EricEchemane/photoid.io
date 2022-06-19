import { Button, Grid, Group, Stack, Text } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import useAppState, { Actions, AppStateType } from 'contexts/AppState';
import useDeviceWidthMatcher from 'modules/useDeviceWidthMatcher';
import React from 'react';
import ChosenPackage from './ChosenPackage';
import { PhotoDropAndUpload } from './PhotoDropAndUpload';
import { Printer } from 'tabler-icons-react';
import { photoPlaceHolderUrl } from 'contexts/initial_values';
import { PrintingError } from 'lib/notifications';
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
    const [_, setSavedPhotoUrl] = useLocalStorage({ key: 'photoUrl', defaultValue: "" });
    const [__, setSavedPackage] = useLocalStorage({ key: 'package', defaultValue: "" });
    const span = smallDevice ? 12 : 6;

    if (state.selectedPackage === null) return (
        <Stack align='center'>
            <Text color='gray'> No package is selected </Text>
            <Button size='md' variant='light' onClick={() => {
                dispatch({ type: Actions.change_tab, payload: 'choose' });
            }}> Choose One </Button>
        </Stack>
    );

    const openPrintPage = () => {
        if (state.photoUrl === photoPlaceHolderUrl) {
            PrintingError.show();
            return;
        }
        // save the photourl and current selected package in the localstorage
        setSavedPhotoUrl(state.photoUrl);
        setSavedPackage(JSON.stringify(state.selectedPackage));

        window.open(window.location.href + 'print');
    };

    return (
        <>
            <Grid justify='center' gutter={30}>
                <Grid.Col span={span}>
                    <ChosenPackage {...state.selectedPackage} />
                </Grid.Col>
                <Grid.Col span={span}>
                    <PhotoDropAndUpload />
                </Grid.Col>
            </Grid>

            <Group py={20} style={{ justifyContent: 'flex-end' }}>
                <Button
                    onClick={openPrintPage}
                    variant='light'
                    size='lg'
                    leftIcon={<Printer />}>
                    Print now
                </Button>
            </Group>
        </>
    );
}
