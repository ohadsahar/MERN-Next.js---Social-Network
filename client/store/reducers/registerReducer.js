import { REGISTER_SUCCESS, REGISTER_FAILED, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGOUT } from '../types/register.types';

const accessLocalStorage = typeof window === "undefined";

const initialState = {
    token: !accessLocalStorage ? localStorage.getItem('token') : null,
    isAuth: null,
    loading: true,
    user: null
}

export const registerReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.data);
            return { ...state, token: payload.data, loading: false, isAuth: true };
        case USER_LOADED:
            return {
                ...state, isAuth: true, loading: false, user: payload.data
            }
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.data);
            return { ...state, ...payload, isAuth: true, loading: false };
        case REGISTER_FAILED:
            localStorage.removeItem('token');
            return { ...state, token: null, isAuth: false, loading: false };
        case LOGOUT:
            localStorage.removeItem('token');
            return { ...state, token: null, isAuth: false, loading: false, user:null };
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return { ...state, token: null, isAuth: false, loading: false };
        default:
            return state;
    }
}
