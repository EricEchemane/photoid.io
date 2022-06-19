import Head from "next/head";
import { useLocalStorage } from '@mantine/hooks';
import { photoPlaceHolderUrl } from "contexts/initial_values";
import { Image } from "@mantine/core";

export default function Print() {
    const [savedPhotoUrl, _] = useLocalStorage({
        key: 'photoUrl',
        defaultValue: photoPlaceHolderUrl,
        getInitialValueInEffect: true
    });
    return (
        <>
            <Head> <title> Printing in PhotoId.IO </title> </Head>
            <div> print </div>
            <Image src={savedPhotoUrl} alt='img' />
        </>
    );
}
