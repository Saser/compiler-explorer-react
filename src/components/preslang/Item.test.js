import React from 'react';
import { mount } from 'enzyme';

import Item from './Item.js';

describe('<Item />', () => {
    const WrapItem = ({ name, args, trace }) => (
        <div>
            <Item name={name} args={args} trace={trace} />
        </div>
    )

    it('renders a single span for item with empty `args` array', () => {
        const props = {
            name: 'myItem',
            args: [],
        };
        const wrapper = mount(WrapItem(props));

        const expected = <span>myItem</span>;
        expect(wrapper.contains(expected)).toEqual(true);
    });
});
