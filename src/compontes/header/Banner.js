import React, { PropTypes } from 'react'
import Carousel from 'react-bootstrap/lib/Carousel';
class Banner extends React.Component {
  render () {
        return(
          <div>
            <Carousel style={{margin:'0'}}>
              <Carousel.Item>
               <img height={500} alt="900x500" src="http://oboi4l44j.bkt.clouddn.com/banner_02.jpg"/>
               <Carousel.Caption>
                 <h3>First slide label</h3>
                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
               <img height={500} alt="900x500" src="http://oboi4l44j.bkt.clouddn.com/banner_02.jpg"/>
               <Carousel.Caption>
                 <h3>Second slide label</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
               <img height={500} alt="900x500" src="http://oboi4l44j.bkt.clouddn.com/banner_02.jpg"/>
               <Carousel.Caption>
                 <h3>Third slide label</h3>
                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
               </Carousel.Caption>
              </Carousel.Item>
              </Carousel>
          </div>
        )
  }
}

export default Banner;
