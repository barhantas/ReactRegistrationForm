import { combineReducers } from "redux";


import RegistrationForm from "./RegistrationFormReducer"

const registerApp = combineReducers({
    RegistrationForm,
})

export default registerApp;

