import { PackagePresetType } from 'lib/package_presets';
import { Paper, Title, Text, Box, Grid, Image, Button, Group } from '@mantine/core';
import React from 'react';
import useAppState, { AppStateType, Actions } from 'contexts/AppState';
import { ArrowNarrowRight } from 'tabler-icons-react';

// const photoUrl = "https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1201514204?k=20&m=1201514204&s=612x612&w=0&h=5404qm1GUfoty4aStYBUFAiCCHwxMy5y3z6cFuV-Qnw=";

function PackagePreset({ description, items, name, price }: PackagePresetType) {
    const { state, dispatch }: AppStateType = useAppState();
    const thisIsSelected = state.selectedPackage?.name === name;

    const choosePackage = () => {
        if (thisIsSelected)
            dispatch({
                type: Actions.change_tab,
                payload: 'edit'
            });
        else
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
            style={{
                width: 'min(470px, 90vw)',
                height: 'auto',
                border: thisIsSelected ? '1px solid dodgerblue' : 'none'
            }}>

            <Grid align={'center'} gutter='xl'>
                <Grid.Col span={2}>
                    <Title> {name} </Title>
                </Grid.Col>
                <Grid.Col span={5}>
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
                            border: '1px solid hsla(0,0%,0%,.3)',
                            overflow: 'hidden',
                        }}
                        src={state.photoUrl}
                        alt='photo id placeholder' />
                ))}
            </Box>

            <Group style={{ justifyContent: 'flex-end' }}>
                <Button
                    onClick={choosePackage}
                    mt='2rem'
                    rightIcon={thisIsSelected ? <ArrowNarrowRight /> : null}
                    variant={thisIsSelected ? 'light' : 'filled'}>
                    {thisIsSelected
                        ? 'Continue'
                        : 'Select'}
                </Button>
            </Group>
        </Paper>
    );
}

export default React.memo(PackagePreset);