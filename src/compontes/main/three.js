import React, { PropTypes } from 'react';
class Three extends React.Component {
  render () {
    let styles={
        span:{
          color:'red',
          fontSize:'3rem'
        },
        p:{
          fontSize:'3rem'
        },
        h6:{
          fontSize:'1rem'
        },
        div:{
          textAlign:'center',
          marginTop:'5rem',
          borderBottom:'#cccccc solid 1px'
        }
    }
        return(
          <div>
            <div style={styles.div}>
              <p style={styles.p}>就业岗位</p>
              <h6 style={styles.h6}>EMPLOYMENT</h6>
              <p style={styles.p}>______</p>
              <img src="http://oboi4l44j.bkt.clouddn.com/people_11.jpg"/>
            </div>
          </div>
        )
  }
}

export default Three;
