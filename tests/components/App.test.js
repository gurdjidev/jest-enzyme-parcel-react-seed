import React from 'react';
import { mount } from 'enzyme';
import { App } from '../../src/components/App';
import { findDataTestAttr, storeFactory } from '../testUtils';
import { Provider } from 'react-redux';

const setup = (initialStore = {}) => {
    const store = storeFactory(initialStore);
    return mount(<Provider store={store}><App /></Provider>);
};

describe('App component', () => {
    it('should render without errors', () => {
        const wrapper = setup();
        const appComponent = findDataTestAttr(wrapper, 'app-component');
        expect(appComponent.length).toEqual(1);
    });
})