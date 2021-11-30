import { combineReducers } from 'redux'

const user = (state = "booger") => state

const cars = (state = []) => state

export default combineReducers({ user, cars })