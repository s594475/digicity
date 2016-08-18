import React, { PropTypes } from 'react';
import Top from './header/Top';
import Navs from './header/Nav';
import Banner from './header/Banner';
class Header extends React.Component {
  render () {
        return(
          <div>
              <Top />
              <Navs />
              <Banner />
          </div>
        )
  }
}

export default Header;
