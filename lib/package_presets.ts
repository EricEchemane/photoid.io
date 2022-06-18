type PackageItem = {
    // this will be the dimension of photo in "inches"
    width: number;
    height: number;
};

export type PackagePresetType = {
    name: string;
    description: string;
    price: number;
    items: PackageItem[];
};

const package_presets: PackagePresetType[] = [
    {
        description: '6 pcs. 1x1',
        name: 'A',
        price: 29.00,
        items: [
            { width: 1, height: 1 },
            { width: 1, height: 1 },
            { width: 1, height: 1 },
            { width: 1, height: 1 },
            { width: 1, height: 1 },
            { width: 1, height: 1 },
        ]
    },
    {
        description: '4 pcs. 2x2',
        name: 'B',
        price: 29.00,
        items: [
            { width: 2, height: 2 },
            { width: 2, height: 2 },
            { width: 2, height: 2 },
            { width: 2, height: 2 },
        ]
    },
    {
        description: '4 pcs. Passport size',
        name: 'C',
        price: 29.00,
        items: [
            { width: 1.4, height: 1.8 },
            { width: 1.4, height: 1.8 },
            { width: 1.4, height: 1.8 },
            { width: 1.4, height: 1.8 },
        ]
    },
    {
        description: '2 pcs. 2x2 - 4 pcs. 1x1',
        name: 'D',
        price: 35.00,
        items: [
            { width: 2, height: 2 },
            { width: 2, height: 2 },
            { width: 1, height: 1 },
            { width: 1, height: 1 },
            { width: 1, height: 1 },
            { width: 1, height: 1 },
        ]
    },
    {
        description: '1 pc. 2x2 - 4 pcs. 1x1',
        name: 'E',
        price: 30.00,
        items: [
            { width: 2, height: 2 },
            { width: 1, height: 1 },
            { width: 1, height: 1 },
            { width: 1, height: 1 },
            { width: 1, height: 1 },
        ]
    }
];

export default package_presets;