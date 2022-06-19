import { Group, Text, useMantineTheme, MantineTheme, Stack } from '@mantine/core';
import { Upload, Photo, X, Icon as TablerIcon } from 'tabler-icons-react';
import { Dropzone, DropzoneStatus } from '@mantine/dropzone';
import useAppState, { Actions, AppStateType } from 'contexts/AppState';
import convertFileToDataUrl from 'modules/convertFileToDataUrl';

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
    return status.accepted
        ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
        : status.rejected
            ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
            : theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[7];
}

function ImageUploadIcon({
    status,
    ...props
}: React.ComponentProps<TablerIcon> & { status: DropzoneStatus; }) {
    if (status.accepted) {
        return <Upload {...props} />;
    }

    if (status.rejected) {
        return <X {...props} />;
    }

    return <Photo {...props} />;
}

export const dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme) => (
    <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
        <ImageUploadIcon status={status} style={{ color: getIconColor(status, theme) }} size={80} />

        <Stack align='center' spacing={0}>
            <Text size="xl" inline>
                Drag your photo here or click to select one
            </Text>
            <Text size="sm" color="dimmed" inline mt={7} align='center'>
                {'Attach a clean and formal photo of you, file should not exceed 5mb and must be in jpg/png format'}
            </Text>
        </Stack>
    </Group>
);

export function PhotoDropAndUpload() {
    const theme = useMantineTheme();
    const { dispatch }: AppStateType = useAppState();

    const handleDrop = async (files: File[]) => {
        const photo = files[0];
        try {
            const photoUrl = await convertFileToDataUrl(photo);
            dispatch({ type: Actions.set_photo_url, payload: photoUrl });
        } catch (error) {
            alert('Error uploaded your file');
        }
    };

    return (
        <Dropzone
            multiple={false}
            onDrop={handleDrop}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={15 * 1024 ** 2}
            accept={['image/jpg', 'image/jpeg', 'image/png']}
        >
            {(status) => dropzoneChildren(status, theme)}
        </Dropzone>
    );
}