import React from 'react';
import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';
import {MockedProvider} from '@apollo/client/testing';
import {ApartmentsScreen} from '../Apartments';
import {GET_APARTMENTS_QUERY} from '../../graphql';
import {PriceFilterModal} from '../../components/PriceFilterModal';
import {RoomFilterModal} from '../../components/RoomFilterModal';

const mocks = [
  {
    request: {
      query: GET_APARTMENTS_QUERY,
      variables: {
        offset: 0,
        limit: 12,
        priceGte: 25000,
        priceLte: 500000,
        pricePerSqmGte: 1000,
        pricePerSqmLte: 5000,
        sqmGte: 80,
        sqmLte: 150,
        numberOfBedroom: 3,
        numberOfBathroom: 2,
      },
    },
  },
];

export const withApollo = (children: any) => (
  <MockedProvider mocks={mocks}>{children}</MockedProvider>
);

const testProps = {
  navigation: jest.fn,
};

describe('ApartmentsScreen', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper, mountWrapper: ReactWrapper;
    beforeEach(() => {
      wrapper = shallow(withApollo(<ApartmentsScreen {...testProps} />));
      mountWrapper = mount(withApollo(<ApartmentsScreen />));
    });

    it('should render a <ApartmentsScreen />', () => {
      expect(wrapper.find(ApartmentsScreen)).toHaveLength(1);
    });

    it('renders FlatList with apartment-list testId', () => {
      expect(
        mountWrapper.findWhere(
          (node) => node.prop('testID') === 'apartment-list',
        ),
      ).toExist();
    });

    it('renders PriceFilterModal with price-filter-modal testId', () => {
      expect(mountWrapper.find(PriceFilterModal)).toHaveLength(1);
    });

    it('renders RoomFilterModal with room-filter-modal testId', () => {
      expect(mountWrapper.find(RoomFilterModal)).toHaveLength(1);
    });
  });
});
