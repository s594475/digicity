import React, { PropTypes } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
class Four extends React.Component {
  render () {
      let styles={
        span:{
          color:'red',
          fontSize:'3rem'
        },
        p:{
          fontSize:'3rem'
        },
          div:{
            width:'80%',
            marginLeft:'10%',
            paddingTop:'5rem',
            textAlign:'center',
            borderBottom:'#cccccc solid 1px',

          },
          col:{
            width:'24%',

          },
          thum:{
            backgroundColor:"#cccccc"
          },
          box:{
            marginTop:'2rem',
            marginBottom:'2rem',
            width:'100%',
            margin:'0 auto',
            textAlign:'center',

          },
          a:{
            display:'block',
            width:'15rem',
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

          },
          col:{
            margin:'0 auto'
          }
        }
    return(
      <div>
          <div style={styles.div}>
              <Grid>
                        <Row>
                        <Col xs={5} md={3}>
                        <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/haoxiaojun_89.jpg" alt="242x200">
                        <div className="caption">
                              <h5>郝小军</h5>
                              <p>就职:乐视</p>
                              <p>薪资:<span style={styles.span}>1500元</span>/月</p>
                              <p>毕业院校:河北科技师范学院</p>
                            </div>
                        </Thumbnail>
                        </Col>
                        <Col xs={5} md={3}>
                        <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/daijinming_91.jpg" alt="242x200">
                          <div className="caption">
                              <h5>戴金明</h5>
                              <p>就职:北京链家地产</p>
                              <p>薪资:<span style={styles.span}>1200元</span>/月</p>
                              <p>毕业院校:河北科技师范学院</p>
                            </div>
                        </Thumbnail>
                        </Col>
                        <Col xs={5} md={3}>
                        <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/jiangwen_96.jpg" alt="242x200">
                        <div className="caption">
                            <h5>姜文</h5>
                              <p>就职:百度</p>
                              <p>薪资:<span style={styles.span}>1300元</span>/月</p>
                              <p>毕业院校:东北石油</p>
                          </div>
                        </Thumbnail>
                        </Col>
                        <Col xs={5} md={3}>
                        <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/sunlulu_93.jpg" alt="242x200">
                          <div className="caption">
                              <h5>孙路路</h5>
                                <p>就职:优酷土豆</p>
                                <p>薪资:<span style={styles.span}>1500元</span>/月</p>
                                <p>毕业院校:河北科技师范学院</p>
                            </div>
                        </Thumbnail>
                        </Col>
                        </Row>
                    </Grid>
                    <Grid>
                              <Row>
                              <Col xs={5} md={3}>
                              <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/yuhao_102.jpg" alt="242x200">
                              <div className="caption">
                                <h5>余浩</h5>
                                  <p>就职:网易</p>
                                  <p>薪资:<span style={styles.span}>30万</span>/年</p>
                                  <p>毕业院校:武汉大学</p>
                              </div>
                              </Thumbnail>
                              </Col>
                              <Col xs={5} md={3}>
                              <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/zhangjunya_103.jpg" alt="242x200">
                                <div className="caption">
                                <h5>张君雅</h5>
                                      <p>就职:HTC</p>
                                      <p>薪资:<span style={styles.span}>1500元</span>/月</p>
                                      <p>毕业院校:南京艺术师范学校</p>
                                  </div>
                              </Thumbnail>
                              </Col>
                              <Col xs={5} md={3}>
                              <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/wangshaojun_104.jpg" alt="242x200">
                              <div className="caption">
                              <h5>王少静</h5>
                                  <p>就职:小米科技</p>
                                  <p>薪资:<span style={styles.span}>1500元</span>/月</p>
                                  <p>毕业院校:河北理工学校</p>
                                </div>
                              </Thumbnail>
                              </Col>
                              <Col xs={5} md={3}>
                              <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/kongyu_105.jpg" alt="242x200">
                                <div className="caption">
                                <h5>孔越</h5>
                                    <p>就职:乐视</p>
                                    <p>薪资:<span style={styles.span}>1200元</span>/月</p>
                                    <p>毕业院校:沈阳大学</p>
                                  </div>
                              </Thumbnail>
                              </Col>
                              </Row>
                          </Grid>
                          <a style={styles.a}>了解更多就业学员信息></a>
                        <p style={styles.p}>他们已经实现了<span style={styles.span}>完美蜕变</span>,月薪万元<span style={styles.span}>只需一个电话</span></p>
          </div>
        </div>
        )
  }
}

export default Four;
