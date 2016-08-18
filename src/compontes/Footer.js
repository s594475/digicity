import React, { PropTypes } from 'react'

class Footer extends React.Component {
  render () {
    let styles={
      root:{
        width:'100%',
        background: 'url("http://oboi4l44j.bkt.clouddn.com/footerbg_110.jpg") no-repeat  center center/cover',
        height:'350px',
        position:'relative'
      },
      img:{
        width:'35%',
        height:'15rem',
        position:'absolute',
        right:'15%',
        bottom:'1px'
      }
    }
      return(
        <div>
          <div style={styles.root}>
              <div style={{paddingTop:'2.6rem',paddingLeft:'20rem',width:'50%'}}>
                <h2 style={{color:'#fff',fontSize:"3.5rem"}}>高薪就业学习就选第嘉学社</h2>
                <span style={{color:'#fff',fontSize:'1rem'}}>秦皇岛第嘉</span>
                <p style={{color:'yellow',fontSize:'1rem'}}>秦皇岛市海港区金梦海湾1号秦海璐84号4层
                电话:0335-7104491   15703387810   18733401116</p>
                <span style={{color:'#fff',fontSize:'1rem'}}>北京第嘉</span>
                <p style={{color:'yellow',fontSize:'1rem'}}>北京朝阳区建国路93号万达广场写字楼A 电话:400-600-7366</p>
                <span style={{color:'#fff',fontSize:'1rem'}}>沈阳第嘉</span>
                <p style={{color:'yellow',fontSize:'1rem'}}>沈阳市生北新区道义南大街江南第D座10-27 电话:400-600 7366</p>
                <span style={{color:'#fff',fontSize:'1rem'}}>深圳第嘉</span>
                <p style={{color:'yellow',fontSize:'1rem'}}>秦皇岛市海港区金梦海湾1号秦海璐84号4层
                电话:0335-7104491</p>
                </div>
                <img src="http://oboi4l44j.bkt.clouddn.com/katong_03.png" style={styles.img}/>
          </div>
        </div>
      )
  }
}

export default Footer;
