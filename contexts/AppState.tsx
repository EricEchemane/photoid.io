import reducer from "contexts/reducer";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import initial_values from "contexts/initial_values";
import { PackagePresetType } from "lib/package_presets";

const AppState = createContext<any>({});

export interface GlobalStateType {
    selectedPackage: PackagePresetType | null;
    activeTab: 'choose' | 'create' | 'print';
};

export enum Actions {
    choose_package = 'choose_package',
    change_tab = 'change_tab'
}

export interface Action {
    type: Actions;
    payload: any;
};

type params = {
    type: Actions,
    payload: any;
};

export interface AppStateType {
    state: GlobalStateType,
    dispatch: ({ type, payload }: params) => GlobalStateType;
}

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