import React, { PropTypes } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import '../../style/main.css';
class One extends React.Component {
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
          marginTop:'2rem'
        },
        box:{
          marginTop:'2rem',
          marginBottom:'2rem',
          width:'70%',
          margin:'0 auto',
          textAlign:'center'
        },
        col:{
          width:'50%'
        },
        h3:{
          fontSize:'2rem',
          lineHeight:'3rem',
          backgroundColor:'red',
          margin:'0',
          borderRadius:'1rem',
          width:'100%',
          display:'black'
        }
    }
      return(
        <div>
            <div style={styles.div}>
              <p style={styles.p}><span style={styles.span}>互联网+时代</span>/不懂IT技术迟早被淘汰</p>
              <h6 style={styles.h6}>INTERNET+AGE DONT UNDERSTAND IT TECHNOLOGY TO BE</h6>
              <h6 style={styles.h6}>EUMNATED SOONER ORLATER</h6>
              <p style={styles.p}>______</p>
            </div>
            <div>
            <Grid>
              <Row>
                <Col xs={6} md={4} className="col1">
                      <h3 style={styles.h3}>薪资高,让同龄人遥不可及</h3>
                      <p>web前端开发源于传统的互联网,互联网普及让人才需求量居高不下,随着移动互联网的告诉发展,移动终端的开发也越来越收到重视,因此薪水自然也高,据智联招聘,51job,拉钩猫聘网等招聘网站得到的数据,web前端工程师的平均薪资都在万元以上是真正的高新职业.</p>
                  <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/web_05.jpg">
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4} className="col2">
                      <h3 style={styles.h3}>人才缺口大 现在是入行最佳时机</h3>
                      <p>在互联网高速发展的今天,web前端工程师是市场上紧缺的高技能热菜,每天有数完家企业招聘该岗位,一北京威力,迈腾就有近9000条web前端工程师职位招聘,可以说web前端工程师就业前景广阔,符合未来发展趋势</p>
                  <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/webt_07.jpg">
                  </Thumbnail>
                </Col>
              </Row>
            </Grid>
            </div>
        </div>
      )
  }
}

export default One;
