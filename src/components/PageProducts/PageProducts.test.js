import React from 'react';
import ReactDOM from 'react-dom';
import PageProducts from './PageProducts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageProducts />, div);
  ReactDOM.unmountComponentAtNode(div);
});
