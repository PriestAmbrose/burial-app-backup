import React from 'react';
import Navbar from '../components/Navbar'
import {Carousel} from 'react-bootstrap';
import Footer from '../components/Footer'
import {Form, Col, Button, Row} from 'react-bootstrap';

function Home(){
    return(
        <div className="App">
            <Navbar/>

            <Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-herbarium-floristry-exhibition-at-rhs-chelsea-flower-show-in-london-tuesday-may-21-2019-1584897366.jpg?crop=0.782xw:0.587xh;0.00321xw,0.0120xh&resize=1200:*"
    alt="First slide" height="480"/>
  <Carousel.Caption>
  <button className="btn btn-outline-primary" type="button">Start Planning</button>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>

<div>
<br/>
    <h2>Planning Process</h2>
    <br/>

    <div class="container block">
      <div class="row justify-content-lg-center">
        <div class="col-md-auto">
      <img src="https://freeiconshop.com/wp-content/uploads/edd/documents-outline.png" 
      height="130" width="130" rounded /> 
    <p>Fill Out and Gather Documents</p>
    </div>
    <h4> Next </h4>
    <div class="col-md-auto">
    <img src="https://img.icons8.com/all/500/process.png"
     height="130" width="130" rounded />
  <p>Process and Make Arrangements</p>
  </div>
  <h4> Next </h4>
  <div class="col-md-auto">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Noun_Project_process_icon_1261773_cc.svg/905px-Noun_Project_process_icon_1261773_cc.svg.png" 
    height="130" width="130" rounded />
  <p>Confirmation and Arrangements Made</p>  
  </div>
    </div>
   </div>
   <br/>
   <section class="mb-5">
    <div id="carousel-1" class="carousel slide" data-ride="carousel">
         
      <ol class="carousel-indicators">
        <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
      </ol>
         
          <div class="carousel-inner" role="listbox">
  
            <div class="carousel-item active">
              <img class="d-block w-95" src="https://qph.fs.quoracdn.net/main-qimg-fbacaf97cc88c6bf2fc31c5cc67109cd" 
              alt="slide"/>
              <div class="carousel-caption">
                <h2>John Doe</h2>
                <p>January 12th, 1965 - September 10th, 2019</p>
                <a class="btn btn-outline-primary" href="#" type="button">View All</a>
              </div>
            </div>
          </div>
      </div>
    </section>
</div>

<div>
    <br/>
    <h2>Funerial Service</h2>
    <br/>

<div class="row justify-content-lg-center">
    <div class="column">
    <img src="https://www.logodesign.net/logo/negative-space-flying-dove-in-circle-3897ld.png?size=2&industry=funeral-home"
    alt="Picture1"/>
    </div>

    <div class="column">
    <img src="https://www.logodesign.net/logo/peace-bird-doves-forming-hands-3665ld.png?size=2&industry=funeral-home"
    alt="Picture1"/>
    </div>

    <div class="column">
    <img src="https://www.logodesign.net/logo/cross-with-abstract-leave-and-water-5591ld.png?size=2&industry=funeral-home" 
    alt="Picture1"/>
    </div>
</div>

</div>

<div>
    <br/>
    <h2>Contact Us</h2>
    <br/>

    <Form>
<Form.Row>
  <div class="form-group1">
    <Form.Group as={Col} controlId="formGridFName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="name" placeholder="First Name" />
    </Form.Group>
</div>

<div class="form-group2">
    <Form.Group as={Col} controlId="formGridLName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="name" placeholder="Last Name" />
    </Form.Group>
</div>
  </Form.Row>

  <Form.Row>
  <div class="form-group3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
</div>

<div class="form-group4">
    <Form.Group as={Col} controlId="formGridNum">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="text" placeholder="Phone Number" />
    </Form.Group>
</div>
 </Form.Row>

<div class="row3">
  <Form.Group controlId="formGridMessage">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" placeholder="Message" rows="3" />
  </Form.Group>
</div>
  <Button variant="outline-primary" type="submit">Submit </Button>
</Form>
</div>

    <br/>

    <Footer/>
        </div>
    )
}


  export default Home;  