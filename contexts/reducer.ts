import { Action, Actions, GlobalStateType } from "contexts/AppState";

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