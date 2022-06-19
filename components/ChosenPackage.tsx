import { Paper, Grid, Title, Box, Text, Image } from '@mantine/core';
import useAppState, { AppStateType } from 'contexts/AppState';
import { PackagePresetType } from 'lib/package_presets';
import React from 'react';

export default function ChosenPackage({ description, items, name, price }: PackagePresetType) {
    const { state }: AppStateType = useAppState();
    return (
        <Paper
            withBorder
            shadow='md'
            p='2rem'
            style={{
                width: '100%',
                height: 'auto',
            }}>

            <Grid align={'center'} gutter='xl'>
                <Grid.Col span={1}>
                    <Title> {name} </Title>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Text> {description} </Text>
                </Grid.Col>
                <Grid.Col span={5}>
                    <Text align='right' size='lg' weight={500} color='blue'> &#8369; {price} </Text>
                </Grid.Col>
            </Grid>

            <Box mt='1rem' style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
            }}>
                {items.map(({ height, width }, index: number) => (
                    <Image
                        key={index}
                        style={{
                            width: `${width}in`,
                            height: `${height}in`,
                            overflow: 'hidden'
                        }}
                        src={state.photoUrl} alt='photo id placeholder' />
                ))}
            </Box>
        </Paper>
    );
}
