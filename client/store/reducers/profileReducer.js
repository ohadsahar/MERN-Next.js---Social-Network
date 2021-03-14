import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from "../types/profile.types";
import { CLEAR_PROFILE } from "../types/register.types";

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
};

export const profileReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_PROFILE:
            return { ...state, profile: payload.data, loading: false };
        case PROFILE_ERROR:
            return { ...state, profile: null, loading: false, error: payload };
        case CLEAR_PROFILE:
            return { ...state, profile: null, loading: false };
        case UPDATE_PROFILE:
            return { ...state, profile: payload, loading: false };
        default:
            return state;
    }
}