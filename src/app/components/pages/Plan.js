import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Form, Button, Col} from 'react-bootstrap';
import '../App.css';

function Plan(){
    return(
        <div className="Plan">
            <Navbar/>
            <br/>

            <h1>Plan Online</h1>
<div>

<Form>
<Form.Row>
  <div class="form-group5">
    <Form.Group as={Col} controlId="formGridFName">
      <Form.Label>First Name of Deceased</Form.Label>
      <Form.Control type="name" placeholder="First Name" />
    </Form.Group>
</div>

<div class="form-group6">
    <Form.Group as={Col} controlId="formGridLName">
      <Form.Label>Middle Name of Deceased</Form.Label>
      <Form.Control type="name" placeholder="Middle Name" />
    </Form.Group>
</div>

<div class="form-group7">
    <Form.Group as={Col} controlId="formGridLName">
      <Form.Label>Last Name of Deceased</Form.Label>
      <Form.Control type="name" placeholder="Last Name" />
    </Form.Group>
</div>
  </Form.Row>

  <Form.Row>
  <div class="form-group8">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter Email" />
    </Form.Group>
</div>

<div class="form-group9">
    <Form.Group as={Col} controlId="formGridBirth">
      <Form.Label>Upload Birth Certificate</Form.Label>
<Form.File id="File1"  />
    </Form.Group>
</div>

<div class="form-group10">
    <Form.Group as={Col} controlId="formGridDeath">
      <Form.Label>Upload Death Certificate</Form.Label>
<Form.File id="File2"  />
    </Form.Group>
</div>
</Form.Row>

<div class="row4">
  <Form.Group controlId="formGridAddress">
    <Form.Label>Resided</Form.Label>
    <Form.Control type="text" placeholder="Enter Place of Residence" />
  </Form.Group>
</div>

<div class="btn">
  <Button variant="outline-primary" type="submit">Submit </Button>
</div>
</Form>

</div>


            <Footer/>
            <br/>
</div>
        
    )
}

export default Plan;