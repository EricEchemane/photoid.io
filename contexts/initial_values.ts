import { PackagePresetType } from "lib/package_presets";

export interface GlobalStateType {
    selectedPackage: PackagePresetType | null;
};

const initial_values: GlobalStateType = {
    selectedPackage: null
};

export default initial_values;