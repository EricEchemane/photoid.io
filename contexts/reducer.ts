import { GlobalStateType } from "contexts/initial_values";

export enum Actions {
    choose_package = 'choose_package',
    change_tab = 'change_tab'
}

export interface Action {
    type: Actions;
    payload: any;
};

function reducer(state: GlobalStateType, { type, payload }: Action): GlobalStateType {
    switch (type) {
        case Actions.choose_package:
            return { ...state, selectedPackage: payload };
        case Actions.change_tab:
            return { ...state, activeTab: payload };
        default:
            return state;
    }
}

export default reducer;