import React from 'react';
import Sitelogo from '../Images/Sitelogo.jpeg';

function Header(){
    return(
        <div>
        <div className="jumbotron-header" >
  <h1>KOLKATA TRAVELS</h1>
  <h3>Experience the best..</h3> 
  <img src={Sitelogo} alt="Site Logo" width="150" height="160"/>    
  <br/><br/>
</div> 
</div>
    );
}
export default Header;
