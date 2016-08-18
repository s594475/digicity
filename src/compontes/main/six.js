import React, { PropTypes } from 'react'
import One from './six/one';
import '../../style/six.css';
class Six extends React.Component {
  render () {
    let styles={
        div:{
          marginTop:'5rem',
        }
    }
      return(
        <div>
            <div style={styles.div}>
              <One />
            </div>
        </div>
      )
  }
}

export default Six;
