import { PackagePresetType } from 'lib/package_presets';
import { Paper, Title, Text, Box, Grid, Image, Button } from '@mantine/core';
import React from 'react';
import useAppState from 'contexts/AppState';
import { Actions } from 'contexts/reducer';

export default function PackagePreset({ description, items, name, price }: PackagePresetType) {
    const { dispatch } = useAppState();
    const choosePackage = () => {
        dispatch({
            type: Actions.choose_package,
            payload: { description, items, name, price }
        });
    };
    return (
        <Paper
            withBorder
            shadow='md'
            p='2rem'
            style={{ width: 'min(470px, 90vw)', height: 'auto' }}>

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
                        style={{
                            width: `${width}in`,
                            height: `${height}in`,
                        }}
                        key={index}
                        src={"https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1201514204?k=20&m=1201514204&s=612x612&w=0&h=5404qm1GUfoty4aStYBUFAiCCHwxMy5y3z6cFuV-Qnw="} alt='photo id placeholder' />
                ))}
            </Box>

            <Button
                onClick={choosePackage}
                mt='2rem'
                style={{ float: 'right' }}>
                Select and continue
            </Button>
        </Paper>
    );
}
