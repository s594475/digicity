import React, { PropTypes } from 'react'
class Top extends React.Component {
  render () {
    let styles={
        h2:{
          margin:'0',
          float:'left',
          marginLeft:'10%'
        },
        input:{
          width:'69%',
          border:'1px solid red',
          float:'left'
        },
        a:{
          display:'block',
          backgroundColor:'red',
          width:'30%',
          lineHeight:'2rem',
          borderRadius:'0.4rem',
          textAlign:'center',
          textDecoration:'none',
          margin:'0',
          float:'left',
          color:'#ccc'
        }
    }
        return(
          <div style={{height:'3rem',marginTop:'2rem'}}>
              <h2 style={styles.h2}>第嘉学社</h2>
              <div style={{float:'right',width:'30%',marginEight:'10%'}}>
              <input placeholder="请输入手机号" style={styles.input}></input>
              <a href="#" style={styles.a}>领取助学金</a>
            </div>
          </div>
        )
  }
}

export default Top;
