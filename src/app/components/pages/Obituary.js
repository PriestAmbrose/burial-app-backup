import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


class Obituary extends Component {
    render() { 
        return ( 
        <div>
            
                <Navbar/>
            
                <h1>Obituary Page</h1>
                <div class="search-container">
                <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
                <i class="fas fa-cloud"></i>
                <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                aria-label="Search"/>
                </form>
                </div>

<div class= "obituary-container">
    <div>
        
    </div>

</div>
                
                <Footer/>
                
               

        </div> 
        );
    }
}
 
export default Obituary;