import React from 'react'
import './Hero.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import hero from '../assets/law.jpg';
import { IoIosMail } from "react-icons/io";
import { FaGift } from "react-icons/fa6";
 import img from '../assets/practice1.jpeg';
 import img1 from '../assets/practice2.jpeg';
 import img2 from '../assets/practice3.jpeg';
 import img3 from '../assets/practice4.jpeg';
 import img4 from '../assets/practice5.jpeg';
import img5 from '../assets/practice6.jpeg';
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import source1 from '../assets/source1.png';
import source2 from '../assets/source2.png';
import source3 from '../assets/source3.png';
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.jpeg';
import team4 from '../assets/team4.png';
import team5 from '../assets/team5.jpeg';
import team6 from '../assets/team6.jpeg';
import Footer from './Footer';






 const Hero = () => {
  return (
    <>
     <Container>
      <Row>
        <div className="col-xl-6">You don't have to fight them alone
       <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae..</p> </div>
       <div className="col-xl-6">
        <img src={hero} alt="hero" className="hero-image" ></img>
       </div>
       </Row>
       <label> 
        <IoIosMail  className="mail" size={20}/>
        <input placeholder=" Enter your email address" className="input"/>
      
       <button type="button" className="input-button" onClick={()=>alert('verify email')}>Let's talk</button>
        </label>
        </Container>
        <Container>
        <Row>
      <div className="col-xl-6">Let’s Introduce Ourself </div>
      <div  className="col-xl-6"><h4 className="head">Criminal Lawyer</h4>
      <p className="para">Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exercitation.</p>
      </div>

      </Row>
       </Container>
       <Row>
        <container>
          <div><h3 className="center">Why Choose Us?</h3></div>
      </container>
       </Row>
       <Container>
       <Row>
    <div className="col-4" style={{border:'1px solid grey',borderRadius:'20px',color:'white'}}><span className="gift"style={{display:'flex',justifyContent:'center'}}><FaGift size={50}/></span>98% success<p>Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exercitation.</p>
<button style={{backgroundColor:'yellow',color:"black",borderRadius:"10px"}}>Read More</button></div>

    <div className="col-4" style={{border:'1px solid grey',borderRadius:'20px',color:'white'}}><span className="gift"style={{display:'flex',justifyContent:'center'}}><FaGift size={50}/></span>100% success<p>Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exercitation.</p>
    <button style={{backgroundColor:'yellow',color:"black",borderRadius:"10px"}}>Read More</button></div>
      
    <div className="col-4" style={{border:'1px solid grey',borderRadius:'20px',color:'white'}}><span className="gift"style={{display:'flex',justifyContent:'center'}}><FaGift size={50}/></span>100% success<p>Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exercitation.</p>
    <button style={{backgroundColor:'yellow',color:"black",borderRadius:"10px"}}>Read More</button></div>
</Row>
</Container>
<Container>
  <Row>
          <div><h3 className="center">Area of practices</h3></div>
          <div className="col-xl-12">
            <img src={img}  alt="" style={{width:'40rem',height:'250px'}}/>
            <img src={img1}  alt=""style={{width:'20rem',height:'250px',margin:'5px'}}/>
            <img src={img2} alt=""style={{width:'20rem',height:'250px',margin:'10px'}} />
            <img src={img3} alt=""style={{width:'40rem',height:'250px',margin:'10px'}}/>
            <img src={img4} alt=""style={{width:'40rem',height:'250px',margin:'10px',}}/>
            <img src={img5} alt="" style={{width:'20rem',height:'250px',margin:'10px'}}/>
          </div>
</Row>
</Container>
           {/* ******happy clients****** */}
<container>
  <Row>
  <div className="col-xl-6"><h4 style={{color:'white',marginTop:'10px',marginLeft:'10rem',padding:'10px'}}>What says our happy client</h4></div>
  <div className="col-xl-6"><GrFormPreviousLink style={{color:'white',border:'2px solid white', borderRadius:'50px',cursor:'pointer'}} /><GrFormNextLink style={{color:'black',border:'2px solid black', borderRadius:'50px',margin:'10px',cursor:'pointer',backgroundColor:'yellow'}}/></div>
  </Row>
  
  <Row>
    <div className="col-xl-4" style={{border:'1px solid white',borderRadius:'20px',padding:'10px'}}>
      <span><img src={source1} alt="" style={{borderRadius:'10rem',display:'flex',justifyContent:'center'}}/></span>
      <h4 style={{color:'white'}}>Jane Cooper</h4><span style={{color:'white'}}>CEO of Hunt</span>
      <p style={{color:"white"}}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia</p>
    </div>

    <div className="col-xl-4" style={{border:'1px solid white',borderRadius:'20px',padding:'10px'}}>
      <span><img src={source2} alt="" style={{borderRadius:'10rem',display:'flex',justifyContent:'center',width:'50px',height:'50px'}}/></span>
      <h4 style={{color:'white'}}>Devone Lane</h4><span style={{color:'white'}}>CEO of Hunt</span>
      <p style={{color:"white"}}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia</p>
    </div>
      
    <div className="col-xl-4"  style={{border:'1px solid white',borderRadius:'20px',padding:'10px'}}>
      <span><img src={source3} alt="" style={{borderRadius:'10rem',display:'flex',justifyContent:'center',width:'50px',height:'50px'}}/></span>
      <h4 style={{color:'white'}}>Robert Fox</h4><span style={{color:'white'}}>CEO of Hunt</span>
      <p style={{color:"white"}}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia</p>
    </div>

  </Row>
</container>
           {/* *******our Team***** */}
<container>
  <Row>
    <div className="col-xl-12" style={{display:'flex',justifyContent:'center',color:'white',margin:'50px'}}><h2>Our Team</h2></div></Row>
    <Row>
      <div className="col-xl-3"> <img src={team1}  alt="" style={{width:'50px',height:'50px' ,margin:'2px',border:'1px solid black',borderRadius:'25px',display:'column',}}/><span style={{color:'white'}}>Daniel def<p style={{color:'grey',margin:'5px'}}>301 cases</p></span></div>
      <div  className="col-xl-3"> <img src={team2}  alt="" style={{width:'50px',height:'50px' ,margin:'2px',border:'1px solid black',borderRadius:'25px',display:'column'}} /><span style={{color:'white'}}>Sanfole<p style={{color:'grey',margin:'5px'}}>850 cases</p></span></div>
         <div className="col-xl-3"><img src={team3} alt=""  style={{width:'50px',height:'50px' ,margin:'2px',border:'1px solid black',borderRadius:'25px'}}/><span style={{color:'white'}}>Cesforila<p style={{color:'grey',margin:'5px'}}>470 cases</p></span></div>
        </Row>
           
           <Row> 
      <div className='col-xl-3'><img src={team4} alt=""  style={{width:'50px',height:'50px' ,margin:'2px',border:'1px solid black',borderRadius:'25px'}}/><span style={{color:'white'}}>colleen<p style={{color:'grey',margin:'5px'}}> 180 cases</p></span> </div>  
            <div className="col-xl-3"><img src={team5} alt=""  style={{width:'50px',height:'50px' ,margin:'2px',border:'1px solid black',borderRadius:'25px'}}/><span style={{color:'white'}}>Haldone<p style={{color:'grey',margin:'5px'}}>212 cases</p></span></div>
            <div className="col-xl-3"><img src={team6} alt=""  style={{width:'50px',height:'50px' ,margin:'2px',border:'1px solid black',borderRadius:'25px'}}/><span style={{color:'white'}}>Nike jeo<p style={{color:'grey',margin:'5px'}}>350 cases</p></span></div>
            </Row>
</container>


<container>
  <Row>
    <div className="col-xl-4" style={{color:'white',margin:'5rem'}}>FAQ
    <p style={{fontSize:'15px'}}>Amet minim mollit non deserunt ullamco es sit aliqua dolor do amet sint</p></div>
   </Row>
</container>
<container>
  <Row >
    <div className='col-xl-12' style={{color:'white',display:'flex',justifyContent:'center'}}><h3 >Subscribe to our news Letter</h3></div>
    <div  style={{display:'flex',justifyContent:'center'}}><input placeholder='name' style={{backgroundColor:'white'}}/><span><input placeholder="Enter your email" style={{backgroundColor:'white'}}/></span>
    <button type='button'style={{backgroundColor:'yellow',borderRadius:'10px'}}>send</button></div>
    
  </Row>
</container>
<Footer/>
    </>
    
   
)
}
export default Hero;
