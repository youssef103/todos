import React from 'react'
import {
    configure,
    shallow,
    render,
    mount
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
    createSerializer
} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({
    mode: 'deep'
}));


configure({
    adapter: new Adapter()
});


global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;