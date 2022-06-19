import reducer, { Actions } from "contexts/reducer";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import initial_values, { GlobalStateType } from "contexts/initial_values";

const AppState = createContext<any>({});

type params = {
    type: Actions,
    payload: any;
};

export interface AppStateType {
    state: GlobalStateType,
    dispatch: (params: params) => GlobalStateType;
}

const useAppState = () => useContext(AppState);

export const AppStateProvider = ({ children }: { children: JSX.Element; }) => {
    const [state, dispatch] = useReducer<any>(reducer, initial_values);
    return (
        <AppState.Provider value={{ state, dispatch }}>
            {children}
        </AppState.Provider>
    );
};

export default useAppState;