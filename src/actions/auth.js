import { AUTH } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const signin = (formData, history) => async (dispatch) => {
  try {
    // login the user and get the data
    const { data } = await api.signIn(formData)
    // if sign-in not successful, return error msg, else go to home page
    if (data?.message) {
      return data
    } else {
      dispatch({ type: AUTH, data })
      history.push('/')
    }
  } catch (error) {
    console.log(error)
  }
}

export const signup = (formData, history) => async (dispatch) => {
  try {
    // create a new user
    const { data } = await api.signUp(formData)
    // if sign-up not successful, return error msg, else go to home page
    if(data?.message){
      return data
    } else {
      // pass data to reducer
      dispatch({ type: AUTH, data })
      //navigate to the home page
      history.push('/')
    }
  } catch (error) {
    console.log(error)
  }
}
