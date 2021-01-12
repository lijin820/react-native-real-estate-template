import React from 'react';
import Modal from 'react-native-modal';
import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';
import {RoomFilterModal} from '../RoomFilterModal';

const testProps = {
  visible: true,
  setVisible: jest.fn,
  filterOptions: {
    numberOfBedrooms: {
      value: 1,
    },
    numberOfBathrooms: {
      value: 2,
    },
  },
  handleFilterOptions: jest.fn,
};

describe('RoomFilterModal', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper, mountWrapper: ReactWrapper;
    beforeEach(() => {
      wrapper = shallow(<RoomFilterModal {...testProps} />);
      mountWrapper = mount(<RoomFilterModal {...testProps} />);
    });

    it('should render a <Modal />', () => {
      expect(wrapper.find(Modal)).toHaveLength(1);
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
