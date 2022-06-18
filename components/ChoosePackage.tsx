import { Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import package_presets from 'lib/package_presets';

import React from 'react';
import PackagePreset from './PackagePreset';

export default function ChoosePackage() {
    const smallDevice = useMediaQuery('(max-width: 500px)', false);
    return (
        <Box
            style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center',
                flexDirection: smallDevice ? 'column' : 'row'
            }}>

            <Box style={{
                width: 'min(50%, 100vw)',
                display: 'flex',
                gap: '2rem',
                flexDirection: 'column'
            }}>
                <PackagePreset {...package_presets[0]} />
                <PackagePreset {...package_presets[2]} />
                <PackagePreset {...package_presets[4]} />
            </Box>

            <Box style={{
                width: 'min(50%, 100vw)',
                display: 'flex',
                gap: '2rem',
                flexDirection: 'column'
            }}>
                <PackagePreset {...package_presets[1]} />
                <PackagePreset {...package_presets[3]} />
            </Box>
        </Box >
    );
}
