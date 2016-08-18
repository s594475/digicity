import React, { PropTypes } from 'react'
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
class One extends React.Component {
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
            <div className='work-container-six'>
                    <Card className="work-card-six">
                      <img src="http://oboi4l44j.bkt.clouddn.com/3dzp_64.jpg" />
                    </Card>
                    <Card className="work-card-six">
                      <img src="http://oboi4l44j.bkt.clouddn.com/dszp_61.jpg" />
                    </Card>
                    <Card className="work-card-six">
                      <img src="http://oboi4l44j.bkt.clouddn.com/lhzp_67.jpg" />
                    </Card>
                    <Card className="work-card-six">
                      <img src="http://oboi4l44j.bkt.clouddn.com/blzp_76.jpg" />
                    </Card>
                    <Card className="work-card-six">
                      <img src="http://oboi4l44j.bkt.clouddn.com/txzp_78.jpg" />
                    </Card>
                    <Card className="work-card-six">
                      <img src="http://oboi4l44j.bkt.clouddn.com/grzp_81.jpg" />
                    </Card>

                  </div>
                  <a style={styles.a}>更多学员作品></a>
              </div>
        )
}
}
export default One;
