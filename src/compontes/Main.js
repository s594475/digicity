import React, { PropTypes } from 'react';
import One from './main/one';
import Two from './main/two';
import Three from './main/three';
import Four from './main/four';
import Five from './main/five';
import Six from './main/six';
import Seven from './main/seven';
class Main extends React.Component {
  render () {
        return(
          <div>
              <One />
              <Two />
              <Three />
              <Four />
              <Five />
              <Six />
              <Seven />
          </div>
        )
  }
}

export default Main;
