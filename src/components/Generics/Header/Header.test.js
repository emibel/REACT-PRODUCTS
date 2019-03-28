import React from 'react';
import Header from './Header';

import Enzyme, { render, shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });
// const getDefaultProps = () => ({});

it('renders without crashing', () => {
  shallow(<Header/>);
});
