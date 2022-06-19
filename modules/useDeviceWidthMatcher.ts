import { useMediaQuery } from '@mantine/hooks';

export default function useDeviceWidthMatcher(width: number) {
    const matches = useMediaQuery(`(max-width: ${width}px)`, false);
    return matches;
}
