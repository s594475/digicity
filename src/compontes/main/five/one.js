import React, { PropTypes } from 'react';
class One extends React.Component {
  render () {
    let styles={
        p:{
          fontSize:'1.5rem',
          color:'#aaa',
        },
        span:{
          fontSize:'1.7rem',
          color:'#000',

        },
        div:{
          width:'80%',
          marginLeft:'10%',
          paddingTop:'5rem',
          borderBottom:'#cccccc solid 1px',

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
          marginLeft:'43%',
          marginTop:'2rem',
          marginBottom:'2rem',

        }
    }
        return(
          <div>
            <div style={styles.div}>
              <p style={styles.p}><span style={styles.span}>pc端模块:</span>div + css网站重构,浏览器兼容,网站交互特效,数据交互技术,面向对象变成思想及模块化开发原理</p>
              <p style={styles.p}><span style={styles.span}>移动端模块:</span>css3动画,响应式设计,H5开发,微信场景开发技术,web app开发</p>
              <p style={styles.p}><span style={styles.span}>全站模块:</span>最新mean技术栈,es6,nodejs,reactjs组件化开发等技术</p>
              <span style={styles.span}>全国首创ui+web前端课程,熟悉完整工作流程,减少沟通阻力,实现与ui设计师工作完美对接</span>
              <a style={styles.a}>了解详细课程内容></a>
            </div>
          </div>
        )
  }
}

export default One;
