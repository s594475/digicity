import React, { PropTypes } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
class Two extends React.Component {
  render () {
    let styles={
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
          <div style={{width:'80%',margin:'0 auto',paddingTop:'2rem',borderBottom:'#cccccc solid 1px',}}>
            <Grid>
                  <Row>
                  <Col xs={5} md={2}>
                  <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/linxijun_24.jpg" alt="200x200" style={{backgroundColor:'#ccc'}}>
                  <h5 style={{textAlign:'center'}}>林喜军</h5>
                  <p style={{fontSize:'1rem'}}>Frank 北京第嘉传媒创始人,全国最大的CG培训基地火星时代
                    原互动媒体系创始人之一,岑任职于OgilvyOne.电筒,花样联众
                    等4A广告公司,还曾任职于新到那股份,北京巴塔教育集团等大型
                    教育培训机构,有着多年的专业广告公司从业经理,十多年的教育
                    培训景云南,尤其对大学市场有着丰富的教学与营销经验</p>
                  </Thumbnail>
                  </Col>
                  <Col xs={5} md={2}>
                  <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/liujian_24.jpg" alt="200x200" style={{backgroundColor:'#ccc'}}>
                  <h5 style={{textAlign:'center'}}>刘健</h5>
                  <p style={{fontSize:'1rem'}}>Frank 北京第嘉传媒创始人,全国最大的CG培训基地火星时代
                    原互动媒体系创始人之一,岑任职于OgilvyOne.电筒,花样联众
                    等4A广告公司,还曾任职于新到那股份,北京巴塔教育集团等大型
                    教育培训机构,有着多年的专业广告公司从业经理,十多年的教育
                    培训景云南,尤其对大学市场有着丰富的教学与营销经验</p>
                  </Thumbnail>
                  </Col>
                  <Col xs={5} md={2}>
                  <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/chenshuo_26.jpg" alt="200x200" style={{backgroundColor:'#ccc'}}>
                  <h5 style={{textAlign:'center'}}>陈硕</h5>
                  <p style={{fontSize:'1rem'}}>Frank 北京第嘉传媒创始人,全国最大的CG培训基地火星时代
                    原互动媒体系创始人之一,岑任职于OgilvyOne.电筒,花样联众
                    等4A广告公司,还曾任职于新到那股份,北京巴塔教育集团等大型
                    教育培训机构,有着多年的专业广告公司从业经理,十多年的教育
                    培训景云南,尤其对大学市场有着丰富的教学与营销经验</p>
                  </Thumbnail>
                  </Col>
                  <Col xs={5} md={2}>
                  <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/yangyong_28.jpg" alt="200x200" style={{backgroundColor:'#ccc'}}>
                  <h5 style={{textAlign:'center'}}>杨永</h5>
                  <p style={{fontSize:'1rem'}}>Frank 北京第嘉传媒创始人,全国最大的CG培训基地火星时代
                    原互动媒体系创始人之一,岑任职于OgilvyOne.电筒,花样联众
                    等4A广告公司,还曾任职于新到那股份,北京巴塔教育集团等大型
                    教育培训机构,有着多年的专业广告公司从业经理,十多年的教育
                    培训景云南,尤其对大学市场有着丰富的教学与营销经验</p>
                  </Thumbnail>
                  </Col>
                  <Col xs={5} md={2}>
                  <Thumbnail src="http://oboi4l44j.bkt.clouddn.com/peter_30.jpg" alt="200x200" style={{backgroundColor:'#ccc'}}>
                  <h5 style={{textAlign:'center'}}>Peter</h5>
                  <p style={{fontSize:'1rem'}}>
                    好多视频网站创始人,慕课网在线视频的主讲,疯狂的在线教育爱好者
                  十多年业界经验的骨灰级专家,曾在清华大学举办过沙龙,倡导广阔阅读技术,在github上有事多网的粉丝</p>
                  </Thumbnail>
                  </Col>
                  </Row>
              </Grid>
                <a style={styles.a}>查看更多师资力量></a>
        </div>
      </div>
      )
  }
}

export default Two;
