import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, history) => async(dispatch) => {
    try {
        // login the user and get the data
        const { data } = await api.signIn(formData);
        
        // pass data to reducer
        dispatch({type: AUTH, data});

        //navigate to the home page
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async(dispatch) => {
    try {
        // create a new user
        const { data } = await api.signUp(formData);
        
        // pass data to reducer
        dispatch({type: AUTH, data});
        
        //navigate to the home page
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}