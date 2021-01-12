import React from 'react';
import {View} from 'react-native';
import {shallow, ShallowWrapper} from 'enzyme';

import {Header} from '../Header';

describe('Header', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(<Header />);
    });

    it('should render a <View />', () => {
      expect(wrapper.find(View)).toHaveLength(1);
    });
  });
});
