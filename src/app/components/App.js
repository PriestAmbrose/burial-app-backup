import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Plan from './pages/Plan';
import Obituary from './pages/Obituary';
// import NotFoundPage from './pages/NotFoundPage';
import {Carousel} from 'react-bootstrap';

class App extends Component  {
  render(){
    return (
      <div>
      <Router>
       <div>
      {/*<Navbar/>*/}
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/planonline" component={Plan}/>
      <Route path="/obituary" component={Obituary}/>
      {/* <Route path="/notfound" component={NotFoundPage}/> */}
      </Switch>
     </div>
      </Router>
     
  {/*<Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-herbarium-floristry-exhibition-at-rhs-chelsea-flower-show-in-london-tuesday-may-21-2019-1584897366.jpg?crop=0.782xw:0.587xh;0.00321xw,0.0120xh&resize=1200:*"
    alt="First slide" height="480"/>
  <Carousel.Caption>
  <button className="btn btn-outline-primary" type="button">Start Planning</button>
  </Carousel.Caption>
</Carousel.Item>
  </Carousel>*/}
      
</div>
     );

  }

  
}

export default App;