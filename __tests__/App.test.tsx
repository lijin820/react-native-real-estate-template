import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {ApolloProvider} from '@apollo/client';

import App from '../App';

describe('App', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('should render a <ApolloProvider />', () => {
      expect(wrapper.find(ApolloProvider)).toHaveLength(1);
    });
  });
});
