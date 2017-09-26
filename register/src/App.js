import React, { Component } from 'react';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RegistrationForm from './components/RegistrationForm'
import AppHeader from './components/AppHeader'
import registerApp from "./reducers/index"

import {
    send,
} from './actions/RegistrationFormActions'






class App extends Component {
    render() {
        return (<MuiThemeProvider>
            <div>

                <AppHeader />
                <RegistrationForm />
            </div>
        </MuiThemeProvider>
        );
    }
}

export default App;