import reducer from "contexts/reducer";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import initial_values from "contexts/initial_values";
import { PackagePresetType } from "lib/package_presets";

export interface GlobalStateType {
    selectedPackage: PackagePresetType | null;
    activeTab: 'choose' | 'edit' | 'print';
    photos: File[];
    photoUrl: string;
};

export enum Actions {
    choose_package = 'choose_package',
    change_tab = 'change_tab',
    add_photo = 'add_photo',
    set_photo_url = 'set_photo_url'
}

export interface Action {
    type: Actions;
    payload: any;
};

type DispatchParams = {
    type: Actions,
    payload: any;
};

export interface AppStateType {
    state: GlobalStateType,
    dispatch: ({ type, payload }: DispatchParams) => GlobalStateType;
}

const AppState = createContext<any>({});

export const AppStateProvider = ({ children }: { children: JSX.Element; }) => {
    const [state, dispatch] = useReducer<any>(reducer, initial_values);
    return (
        <AppState.Provider value={{ state, dispatch }}>
            {children}
        </AppState.Provider>
    );
};

const useAppState = () => useContext(AppState);

export default useAppState;