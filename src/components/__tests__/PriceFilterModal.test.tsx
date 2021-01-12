import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';

import {PriceFilterModal} from '../PriceFilterModal';

const testProps = {
  visible: true,
  setVisible: jest.fn,
  filterOptions: {
    price: {
      startVal: 1,
      endVal: 2,
    },
    pricePerSqm: {
      startVal: 1,
      endVal: 2,
    },
  },
  handleFilterOptions: jest.fn,
};

describe('Header', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper, mountWrapper: ReactWrapper;
    beforeEach(() => {
      wrapper = shallow(<PriceFilterModal {...testProps} />);
      mountWrapper = mount(<PriceFilterModal {...testProps} />);
    });

    it('should render a <Modal />', () => {
      expect(wrapper.find(Modal)).toHaveLength(1);
    });

    it('should render two <TouchableOpacity />', () => {
      expect(wrapper.find(TouchableOpacity)).toHaveLength(2);
    });

    it('should render nine <View />', () => {
      expect(wrapper.find(View)).toHaveLength(9);
    });

    it('should render seven <Text />', () => {
      expect(wrapper.find(Text)).toHaveLength(7);
    });

    it('renders apply button with apply-filter-button testId', () => {
      expect(
        mountWrapper.findWhere(
          (node) => node.prop('testID') === 'apply-filter-button',
        ),
      ).toExist();
    });
  });
});
