import React, { PropTypes } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
class Four extends React.Component {
  render () {
    let styles={
        span:{
          color:'#000',
          fontSize:'2.5rem',
          fontWeight:'bload'
        },
        p:{
          fontSize:'2.5rem',
          marginBottom:'4rem'
        },
        div:{
          textAlign:'center',
          marginTop:'2rem',
          marginBottom:'4rem'
        },
        box:{
          marginTop:'2rem',
          marginBottom:'2rem',
          width:'70%',
          margin:'0 auto',
          textAlign:'center'
        },
        col:{
          width:'33%'
        }
    }
    return(
      <div>
          <div style={styles.div}>
            <p style={styles.p}>茫茫人海中 <span style={styles.span}>你是哪一个</span></p>
              <Grid>
                        <Row>
                        <Col xs={6} md={4}>
                        <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/zaixiao_14.jpg" alt="242x200">
                          <p>你为大学学的课程和企业要求不匹配而烦恼吗?</p>
                              <p>你担心大学毕业后找不到理想工作而忧虑吗?</p>
                              <p>你为话了父母几万块钱脑袋空空而不开心吗?</p>
                              <p>你还在不能给父母熟悉的背影而伤心吗?</p>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/zaizhi_16.jpg" alt="242x200">
                          <p>你还在企业边缘岗,每天看主管脸色吗?</p>
                              <p>你还在因为自己没有专业技能不开心吗?</p>
                              <p>你还在单位浑浑噩噩的混日子吗?</p>
                              <p>你还在为遭遇不堪而着急吗?</p>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/zaijia_18.jpg" alt="242x200">
                          <p>你还在为了毕业了没有找到工作吗?</p>
                            <p>你还在为了没有一技之长而着急吗?</p>
                            <p>你还在为不能自食其力而着急吗?</p>
                            <p>你还在为遭遇不堪而着急吗?</p>
                        </Thumbnail>
                        </Col>
                        </Row>
                    </Grid>
              <span style={styles.span}>改变现状 只需6个月</span>
          </div>
        </div>
        )
  }
}

export default Four;
