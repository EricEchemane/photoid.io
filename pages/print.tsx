import Head from "next/head";
import { useLocalStorage } from '@mantine/hooks';
import { photoPlaceHolderUrl } from "contexts/initial_values";
import { Image, Paper } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Print() {
    const [localPhotoUrl, _] = useLocalStorage({
        key: 'photoUrl',
        defaultValue: photoPlaceHolderUrl,
        getInitialValueInEffect: true,
    });
    const [localPackage, __] = useLocalStorage({
        key: 'package',
        defaultValue: '{"description":"4 pcs. 2x2"}',
        getInitialValueInEffect: true
    });

    const [selectedPackage, setSelectedPackage] = useState<any>(null);

    useEffect(() => {
        setSelectedPackage(JSON.parse(localPackage));
    }, [localPackage]);

    useEffect(() => {
        if (selectedPackage?.items) print();
    }, [selectedPackage]);

    if (selectedPackage === null) return <>Loading...</>;

    return (
        <>
            <Head> <title> Printing in PhotoId.IO </title> </Head>
            <Paper
                withBorder
                style={{
                    width: '8.26772in',
                    height: '11.75in',
                    display: 'flex',
                }}>
                {selectedPackage?.items?.map(({ height, width }: any, index: number) => (
                    <Image
                        key={index}
                        style={{
                            width: `${width}in`,
                            height: `${height}in`,
                            overflow: 'hidden',
                            border: '1px solid hsla(0,0%,0%,.3)'
                        }}
                        src={localPhotoUrl} alt='photo id placeholder' />
                ))}
            </Paper>
        </>
    );
}
