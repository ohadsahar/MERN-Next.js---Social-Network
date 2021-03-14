import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { AUTH_ERROR, REGISTER_FAILED, REGISTER_SUCCESS, USER_LOADED, LOGIN_SUCCESS, LOGOUT, CLEAR_PROFILE } from '../types/register.types';
import { setAlert } from './alert.actions';

export const registerSuccess = (data) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const body = JSON.stringify(data);
        const res = await axios.post("http://localhost:3000/auth/register", body, config);
        console.log(res);
        if (res !== null) {
            dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        }
    } catch (error) {
        dispatch({ type: REGISTER_FAILED, });
        dispatch(setAlert('wrong cred', 'error'));
    }
}

export const loadUser = () => async dispatch => {
    try {
        if (localStorage.getItem('token')) {
            setAuthToken(localStorage.getItem('token'));
        }
        const res = await axios.get("http://localhost:3000/auth/me");
        if (res) {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}


export const login = (data) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        const body = JSON.stringify(data);
        const res = await axios.post('http://localhost:3000/auth/login', body, config);
        if (res.data !== null) {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        }
        dispatch(loadUser());
    } catch (error) {
        dispatch(setAlert('Wrong Crediantls', 'error'));
        dispatch({ type: AUTH_ERROR });
    }
}

export const disconnect = () => async dispatch => {
    dispatch({ type: LOGOUT });
    dispatch({ type: CLEAR_PROFILE })
}
