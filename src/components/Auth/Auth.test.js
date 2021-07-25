import React from 'react';
import {Auth} from './Auth';
import { configure, fireEvent, render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Testing Auth component', () => {
    const initialState = {authData: null }
    const mockStore = configureStore();
    let store;

    test('Check header title', () => {
        store = mockStore(initialState)
        const component = render(<Provider store={store}><Auth/></Provider>);
        const headerEl = component.getByTestId('header');

        expect(headerEl.textContent).toBe('InstaPic')
    })

    test('Switch from Login to Sign up mode', () => {
        store = mockStore(initialState);
        const component = render(<Provider store={store}><Auth/></Provider>);
        const headerEl = component.getByTestId('switchMode');

        fireEvent.doubleClick(headerEl);

        expect(headerEl.textContent).toBe('Sign up');
    })

    test('Switch from Sign up to Login mode', () => {
        store = mockStore(initialState);
        const component = render(<Provider store={store}><Auth/></Provider>);
        const headerEl = component.getByTestId('switchMode');

        fireEvent.click(headerEl);

        expect(headerEl.textContent).toBe('Login');
    })
})