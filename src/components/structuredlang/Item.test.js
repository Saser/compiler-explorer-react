import React from 'react';
import { mount } from 'enzyme';

import Item from './Item.js';

describe('<Item />', () => {
    const WrapItem = (props) => (
        <div>
            <Item {...props} />
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

    it('renders two spans (without parentheses) for item with single "bare" element in `args`', () => {
        const inner = {
            name: 'inner',
            args: [],
        };
        const props = {
            name: 'outer',
            args: [inner],
        };
        const wrapper = mount(WrapItem(props));

        const expected = (
            <span>
            outer{' '}
                <span>inner</span>
            </span>
        );
        expect(wrapper.contains(expected)).toEqual(true);
    });

    it('renders three spans (with parentheses) for item with single "non-bare" element in `args`', () => {
        const innerArg = {
            name: 'arg',
            args: [],
        };
        const inner = {
            name: 'inner',
            args: [innerArg],
        };
        const props = {
            name: 'outer',
            args: [inner],
        };
        const wrapper = mount(WrapItem(props));

        const expected = (
            <span>
            outer (
                <span>inner</span>
                {' '}
                <span>arg</span>
            )
            </span>
        );
        expect(wrapper).toContainReact(expected);
    });

    it('renders two "bare" items, surrounded with parentheses and separated by comma, on a tuple', () => {
        const fst = {
            name: 'item1',
            args: [],
        };
        const snd = {
            name: 'item2',
            args: [],
        };
        const props = {
            isTuple: true,
            elements: [fst, snd],
        };
        const wrapper = mount(WrapItem(props));

        const expected = (
            <span>
            (
                <span>item1</span>
                {', '}
                <span>item2</span>
            )
            </span>
        );
        expect(wrapper.contains(expected)).toEqual(true);
    });

    it('renders an outer span and two "bare" items in a tuple, surrounded with single set of parentheses and separated by comma', () => {
        const fst = {
            name: 'item1',
            args: [],
        };
        const snd = {
            name: 'item2',
            args: [],
        };
        const tuple = {
            isTuple: true,
            elements: [fst, snd],
        };
        const props = {
            name: 'outer',
            args: [tuple]
        };
        const wrapper = mount(WrapItem(props));

        const expected = (
            <span>
                outer
                    <span>
                    (
                        <span>item1</span>
                        {', '}
                        <span>item2</span>
                    )
                    </span>
            </span>
        );
        expect(wrapper.contains(expected)).toEqual(true);
    });

    it('renders an outer span and an inner span, surrounded by brackets, for an array in `args`', () => {
        const inner = {
            name: 'inner',
            args: [],
        };
        const props = {
            name: 'outer',
            args: [[inner]],
        };
        const wrapper = mount(WrapItem(props));

        const expected = (
            <span>
            outer [
                <span>inner</span>
            ]
            </span>
        );
        expect(wrapper.contains(expected)).toEqual(true);
    });

    it('renders an outer span and two inner spans, surrounded by brackets and separated by semicolon, for an array in `args`', () => {
        const inner1 = {
            name: 'inner1',
            args: [],
        };
        const inner2 = {
            name: 'inner2',
            args: [],
        };
        const props = {
            name: 'outer',
            args: [[inner1, inner2]],
        };
        const wrapper = mount(WrapItem(props));

        const expected = (
            <span>
            outer [
                <span>inner1</span>
                {'; '}
                <span>inner2</span>
            ]
            </span>
        );
        expect(wrapper.contains(expected)).toEqual(true);
    });
});
