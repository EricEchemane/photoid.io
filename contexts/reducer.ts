import { GlobalStateType } from "contexts/initial_values";

export enum Actions {
    choose_package = 'choose_package'
}

export interface Action {
    type: Actions;
    payload: any;
};

function reducer(state: GlobalStateType, { type, payload }: Action): GlobalStateType {
    switch (type) {
        case Actions.choose_package:
            return {
                ...state,
                selectedPackage: payload
            };
        default:
            return state;
    }
}

export default reducer;