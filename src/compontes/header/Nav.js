import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
class Navs extends React.Component {
  render () {
      return(
        <div>
          <Navbar inverse style={{backgroundColor:'#3e3e3e',margin:'0'}}>
          <Navbar.Header>
                <Navbar.Brand>
                </Navbar.Brand>
                <Navbar.Toggle />
          </Navbar.Header>
            <Navbar.Collapse>
                <Nav style={{marginLeft:'3rem',width:'100%'}}>
                  <NavItem eventKey={1} href="#" style={{width:'14%'}}>热门课程</NavItem>
                  <NavItem eventKey={2} href="#" style={{width:'14%'}}>专业技能</NavItem>
                  <NavItem eventKey={3} href="#" style={{width:'14%'}}>师资力量</NavItem>
                  <NavItem eventKey={4} href="#" style={{width:'14%'}}>课程设置</NavItem>
                  <NavItem eventKey={5} href="#" style={{width:'14%'}}>项目实训</NavItem>
                  <NavItem eventKey={6} href="#" style={{width:'14%'}}>明星学员</NavItem>
                  <NavItem eventKey={6} href="#" style={{width:'14%'}}>学员作品</NavItem>
                </Nav>
                <Nav pullRight />
              </Navbar.Collapse>
            </Navbar>
        </div>
      )
  }
}

export default Navs;
