import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import LoginView from '../views/loginView';
import RegisterView from '../views/RegisterView';
import configureStore from '../redux/store/index';
const store = configureStore()

class Routes extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/Login" component={LoginView} exact />
                        <Route path="/register" component={RegisterView} />
                    </Switch>
                </BrowserRouter>
            </Provider>

        );
    }
}

export default Routes;