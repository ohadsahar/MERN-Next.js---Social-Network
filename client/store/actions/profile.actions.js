import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from '../types/profile.types';
import { setAlert } from './alert.actions';

export const getCurrentProfile = () => async dispatch => {
    try {
        if (localStorage.getItem('token')) {
            setAuthToken(localStorage.getItem('token'));
        }
        const res = await axios.get('http://localhost:3000/profile/userProfile');
        if (res.data !== null) {
            dispatch({ type: GET_PROFILE, payload: res.data });
        }
    } catch (error) {
        dispatch({ type: PROFILE_ERROR, payload: error });
    }
}

export const updateProfile = (profileDTO, edit) => async dispatch => {
    try {
        console.log(profileDTO);
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify(profileDTO);
        const res = await axios.put('http://localhost:3000/profile', body, config);
        if (res.data !== null) {
            dispatch({ type: UPDATE_PROFILE, payload: res.data });
        }
        dispatch(setAlert(!edit ? 'Profile Created' : 'Profile Updated', 'success'));
    } catch (error) {
        dispatch(setAlert('Cannot update the profile', 'error'));
        dispatch({ type: PROFILE_ERROR });
    }
}