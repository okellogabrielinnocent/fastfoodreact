import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('renders without crashing', () => {
    it('it renders the app component', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});