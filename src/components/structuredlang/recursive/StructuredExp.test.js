import React from 'react';
import { shallow } from 'enzyme';

import StructuredExp from './StructuredExp.js';

describe('<StructuredExp />', () => {
    const WrapStructuredExp = (props) => (
        <div>
            <StructuredExp {...props} />
        </div>
    )

    xit('renders a single span for item with empty `args` array', () => {
        const item = {
            name: 'myItem',
            args: [],
        };
        const props = {
            sExp: item,
        };
        const wrapper = shallow(WrapStructuredExp(props));

        const expected = <span>myItem</span>;
        expect(wrapper).toContainReact(expected);
    });

    xit('renders two spans (without parentheses) for item with single "bare" element in `args`', () => {
        const inner = {
            name: 'inner',
            args: [],
        };
        const outer = {
            name: 'outer',
            args: [inner],
        };
        const props = {
            sExp: outer,
        };
        const wrapper = shallow(WrapStructuredExp(props));

        const expected = (
            <span>
            outer <span>inner</span>
            </span>
        );
        expect(wrapper).toContainReact(expected);
    });

    xit('renders three spans (with parentheses) for item with single "non-bare" element in `args`', () => {
        const arg = {
            name: 'arg',
            args: [],
        };
        const inner = {
            name: 'inner',
            args: [arg],
        };
        const outer = {
            name: 'outer',
            args: [inner],
        };
        const props = {
            sExp: outer,
        };
        const wrapper = shallow(WrapStructuredExp(props));

        const expected = (
            <span>
            outer (
                <span>
                inner <span>arg</span>
                </span>
            )
            </span>
        );
        expect(wrapper).toContainReact(expected);
    });

    xit('renders four spans (with parentheses) for item with single "non-bare" element in `args`', () => {
        const arg1 = {
            name: 'arg1',
            args: [],
        };
        const arg2 = {
            name: 'arg2',
            args: [],
        };
        const inner = {
            name: 'inner',
            args: [arg1, arg2],
        };
        const outer = {
            name: 'outer',
            args: [inner],
        };
        const props = {
            sExp: outer,
        };
        const wrapper = shallow(WrapStructuredExp(props));

        const expected = (
            <span>
            outer (
                <span>
                inner
                {' '}
                    <span>arg1</span>
                {' '}
                    <span>arg2</span>
                </span>
            )
            </span>
        );
        expect(wrapper).toContainReact(expected);
    });

    xit('renders two "bare" items, surrounded with parentheses and separated by comma, on a tuple', () => {
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
            sExp: tuple,
        };
        const wrapper = shallow(WrapStructuredExp(props));

        const expected = (
            <span>
            (
                <span>item1</span>
                {', '}
                <span>item2</span>
            )
            </span>
        );
        expect(wrapper).toContainReact(expected);
    });

    xit('renders an outer span and two "bare" items in a tuple, surrounded with single set of parentheses and separated by comma', () => {
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
        const outer = {
            name: 'outer',
            args: [tuple]
        };
        const props = {
            sExp: outer,
        };
        const wrapper = shallow(WrapStructuredExp(props));

        const expected = (
            <span>
                outer
                {' '}
                    <span>
                    (
                        <span>item1</span>
                        {', '}
                        <span>item2</span>
                    )
                    </span>
            </span>
        );
        expect(wrapper).toContainReact(expected);
    });

    xit('renders an outer span and an inner span, surrounded by a wrapping span with brackets, for an array in `args`', () => {
        const inner = {
            name: 'inner',
            args: [],
        };
        const outer = {
            name: 'outer',
            args: [[inner]],
        };
        const props = {
            sExp: outer,
        };
        const wrapper = shallow(WrapStructuredExp(props));

        const expected = (
            <span>
            outer
            {' '}
                <span>
                [
                    <span>inner</span>
                ]
                </span>
            </span>
        );
        expect(wrapper).toContainReact(expected);
    });

    xit('renders an outer span and two inner spans, surrounded by brackets and separated by semicolon, for an array in `args`', () => {
        const inner1 = {
            name: 'inner1',
            args: [],
        };
        const inner2 = {
            name: 'inner2',
            args: [],
        };
        const outer = {
            name: 'outer',
            args: [[inner1, inner2]],
        };
        const props = {
            sExp: outer,
        };
        const wrapper = shallow(WrapStructuredExp(props));

        const expected = (
            <span>
            outer
            {' '}
                <span>
                [
                    <span>inner1</span>
                    {'; '}
                    <span>inner2</span>
                ]
                </span>
            </span>
        );
        expect(wrapper).toContainReact(expected);
    });
});
