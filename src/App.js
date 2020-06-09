import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PlanOnline from './Plan Online';
import AboutUs from './About Us';
import flowers from './flowers.jpg';
import {Carousel} from 'react-bootstrap';

class App extends Component  {
  render(){
    return (
      <div>
      <Router>
       
      <Navbar/>
      <Switch>
      <Route path="/" component={Home}/>
      <Route path="/plan-online" Component={PlanOnline}/>
      <Route path="/about-us" Component={AboutUs}/>
      </Switch>
     
      </Router>

<Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-herbarium-floristry-exhibition-at-rhs-chelsea-flower-show-in-london-tuesday-may-21-2019-1584897366.jpg?crop=0.782xw:0.587xh;0.00321xw,0.0120xh&resize=1200:*"
    alt="First slide" height="500"/>
  <Carousel.Caption>
    <h3>Start Planning</h3>
  </Carousel.Caption>
</Carousel.Item>

</Carousel>
</div>
    );

  }

  
}


const Home = () => (
  <div>

  </div>
)

export default App;
