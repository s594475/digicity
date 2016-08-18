import React, { PropTypes } from 'react'
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
class Word extends React.Component {
  render () {
    let styles={
          title:{
            padding:'5px'
          },
          p:{
            fontSize:'1.5rem',
            color:'#aaa',
            textAlign:"center",
            marginTop:'2rem'
          },
          span:{
            fontSize:'1.7rem',
            color:'#000',
            width:'10rem'
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

            }
        }
        return(
          <div>
            <p style={styles.p}><span style={styles.span}>企业项目实战教学,学习=工作</span>课程内容根据企业招聘雪球更新,毕业即可顺利进入工作状态</p>
            <div className='work-container'>
                    <Card className="work-card">
                      <img src="http://oboi4l44j.bkt.clouddn.com/xm_41.jpg" />
                    </Card>
                    <Card className="work-card">
                      <img src="http://oboi4l44j.bkt.clouddn.com/syxm_43.jpg" />
                    </Card>
                    <Card className="work-card">
                      <img src="http://oboi4l44j.bkt.clouddn.com/htmlxm_45.png" />
                    </Card>
                    <Card className="work-card">
                      <img src="http://oboi4l44j.bkt.clouddn.com/dsxm_47.jpg" />
                    </Card>
                    <Card className="work-card">
                      <img src="http://oboi4l44j.bkt.clouddn.com/appxm_52.jpg" />
                    </Card>
                    <Card className="work-card">
                      <img src="http://oboi4l44j.bkt.clouddn.com/ipadxm_53.jpg" />
                    </Card>
                    <Card className="work-card">
                      <img src="http://oboi4l44j.bkt.clouddn.com/webxm_54.jpg" />
                    </Card>
                    <Card className="work-card">
                      <img src="http://oboi4l44j.bkt.clouddn.com/ylxm_55.jpg" />
                    </Card>

                  </div>
                  <a style={styles.a}>点击申请免费在线试听课程></a>
              </div>
        )
}
}
export default Word;
