import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './Footer.css';
 const Footer = () => {
  return (
    <Container>
        <Row>
        <div className="Footer">
      <span className="Foot-logo">IGSTUDIO</span>
    <div className="nav-items">
   <a href='/home'>Home</a>
  <a href='/Attorneys'>Attorneys</a>
  <a href='/PracticeArea'>Practice Area</a>
  <a href='/about us'>About us</a> 
  </div>
  </div>
  <Footer><p style={{color:'white'}}>@2020 All rights reserved privacy policy terms of service</p></Footer>
        </Row>

        
         
    </Container>
   

   
  )
}

export default Footer;
