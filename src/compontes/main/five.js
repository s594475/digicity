import React, { PropTypes } from 'react'
import One from './five/one';
import Two from './five/two';
import Three from './five/three';
import '../../style/five.css';
class Five extends React.Component {
  render () {
    let styles={
        div:{

          marginTop:'5rem',
          backgroundColor:'#eeeeee'
        }
    }
      return(
        <div>
            <div style={styles.div}>
              <One />
              <Two />
              <Three />
            </div>
        </div>
      )
  }
}

export default Five;
