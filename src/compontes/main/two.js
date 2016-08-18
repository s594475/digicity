import React, { PropTypes } from 'react';
import Echarts from './echarts';
class Two extends React.Component {
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
                  backgroundColor:'#eeeeee'
                },
                a:{
                  display:'block',
                  width:'12rem',
                  height:'2rem',
                  lineHeight:'2rem',
                  backgroundColor:'red',
                  textAlign:'center',
                  borderRadius:'5px',
                  textDecoration:'none',
                  cursor:'pointer',
                  marginLeft:'47%',
                  marginTop:'2rem',
                }
            }
        return(
          <div>
              <div style={styles.div}>
                <p style={styles.p}><span style={styles.span}>薪资</span>不断攀升,发展<span style={styles.span}>潜力</span>无限</p>
                <h6 style={styles.h6}>RISING WAGES AND DEVELOPMENT POTENTIAL</h6>
                <p style={styles.p}>______</p>
                <Echarts />
              </div>
          </div>
        )
  }
}

export default Two;
