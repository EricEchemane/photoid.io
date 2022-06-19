import { PackagePresetType } from "lib/package_presets";

export interface GlobalStateType {
    selectedPackage: PackagePresetType | null;
    activeTab: 'choose' | 'create' | 'print';
};

const initial_values: GlobalStateType = {
    selectedPackage: null,
    activeTab: 'choose'
};

export default initial_values;