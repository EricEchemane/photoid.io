import { Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import useAppState, { AppStateType } from 'contexts/AppState';
import package_presets from 'lib/package_presets';
import React from 'react';
import PackagePreset from './PackagePreset';

export default function ChoosePackage() {
    const smallDevice = useMediaQuery('(max-width: 500px)', false);
    const { state }: AppStateType = useAppState();
    return <>
        <Box
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: smallDevice ? 'column' : 'row'
            }}>

            <Box style={{
                width: 'min(50%, 100vw)',
                display: 'flex',
                gap: '2rem',
                flexDirection: 'column',
            }}>
                <PackagePreset {...package_presets[0]} photoUrl={state.photoUrl} />
                <PackagePreset {...package_presets[2]} photoUrl={state.photoUrl} />
                <PackagePreset {...package_presets[4]} photoUrl={state.photoUrl} />
            </Box>

            <Box style={{
                width: 'min(50%, 100vw)',
                display: 'flex',
                gap: '2rem',
                flexDirection: 'column'
            }}>
                <PackagePreset {...package_presets[1]} photoUrl={state.photoUrl} />
                <PackagePreset {...package_presets[3]} photoUrl={state.photoUrl} />
            </Box>
        </Box >
    </>;
}