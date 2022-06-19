import { GlobalStateType } from "contexts/AppState";

export const photoPlaceHolderUrl = "https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1201514204?k=20&m=1201514204&s=612x612&w=0&h=5404qm1GUfoty4aStYBUFAiCCHwxMy5y3z6cFuV-Qnw=";

const initial_values: GlobalStateType = {
    selectedPackage: null,
    activeTab: 'choose',
    photos: [],
    photoUrl: photoPlaceHolderUrl
};

export default initial_values;