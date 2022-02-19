import AddChallengeModal from '../AddChallengeModal';
import Root from '../../Root';
import { mount } from 'enzyme';
import React from 'react';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <AddChallengeModal />
        </Root>

    )
})

afterEach(() => {
    wrapped.unmount();
})

it('have two input field and one button', () => {
    expect(wrapped.find('input').length).toEqual(5);
    expect(wrapped.find('button').length).toEqual(1);
    expect(wrapped.find('button').text()).toEqual('Add');
})
