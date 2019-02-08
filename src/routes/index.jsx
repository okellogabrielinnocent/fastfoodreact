import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import HomeView from '../views/homeView';
import LoginView from '../views/loginView'
import configureStore from '../redux/store/index';
const store = configureStore()

class Routes extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={ HomeView } exact />
                        <Route path="/login" component={ LoginView } />
                    </Switch>
                </BrowserRouter>
            </Provider>

        );
    }
}

export default Routes;