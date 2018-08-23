import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Tile from '../../components/tile/tile-component';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import store from '../../store'

Enzyme.configure({ adapter: new Adapter() });

describe('<Tile />', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Tile/>
      </Provider>
    )
    expect(wrapper).to.have.lengthOf(1)
  })
});
