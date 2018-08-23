import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TileListTop from '../../components/tile-list-top/tile-list-top-component';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import store from '../../store'

Enzyme.configure({ adapter: new Adapter() });

describe('<TileListTop />', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <TileListTop
          imageSetNuanced="SET_IS_ENLARGED_TOP"
          imageSet="test"
          key="test"
          id='test'
          isEnlarged='test'
          eachImage='test'
        />
      </Provider>
    )
    expect(wrapper).to.have.lengthOf(1)
  })
})
