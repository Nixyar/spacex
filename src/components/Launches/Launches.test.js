import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Launches from './Launches';

describe('Launches', () => {
  let props;
  let shallowLaunches;
  let renderedLaunches;
  let mountedLaunches;

  const shallowTestComponent = () => {
    if (!shallowLaunches) {
      shallowLaunches = shallow(<Launches {...props} />);
    }
    return shallowLaunches;
  };

  const renderTestComponent = () => {
    if (!renderedLaunches) {
      renderedLaunches = render(<Launches {...props} />);
    }
    return renderedLaunches;
  };

  const mountTestComponent = () => {
    if (!mountedLaunches) {
      mountedLaunches = mount(<Launches {...props} />);
    }
    return mountedLaunches;
  };  

  beforeEach(() => {
    props = {};
    shallowLaunches = undefined;
    renderedLaunches = undefined;
    mountedLaunches = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
