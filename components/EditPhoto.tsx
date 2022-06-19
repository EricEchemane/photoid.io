import { Button, Center, Stack, Text } from '@mantine/core';
import useAppState, { Actions, AppStateType } from 'contexts/AppState';
import React from 'react';
import ChosenPackage from './ChosenPackage';
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

    if (state.selectedPackage === null) return (
        <Stack align='center'>
            <Text color='gray'> No package is selected </Text>
            <Button size='md' variant='light' onClick={() => {
                dispatch({ type: Actions.change_tab, payload: 'choose' });
            }}> Choose One </Button>
        </Stack>
    );

    return (
        <Stack>
            <ChosenPackage {...state.selectedPackage} />
        </Stack>
    );
}
