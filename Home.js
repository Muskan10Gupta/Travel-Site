import React from 'react';

function Home()
{
    return(
        <div>
           <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3QNexBj97wL3cPLJoWKXoEgn2pc4I6x0zw&usqp=CAU" height="550" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <br/><br/><br/>
              <h5>Welcome To KOLKATA TRAVELS</h5>
              <p>To serve you with the best Stay and Dine In Experience..</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4fcCrPXoZCoYnnmZ59GBCh9xKVdBK2UZfg&usqp=CAU" height="550" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <br/><br/><br/>
              <h5>Hassel Free Bookings..</h5>
              <p>Easy Bookings and Experience With the Best Hotels..</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://media.gettyimages.com/photos/shorthaired-woman-with-headphones-relaxing-in-lounge-chair-in-stylish-picture-id1140199252?s=612x612" height="550" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <br/><br/><br/>
              <h5>Your Comfort Our Priority</h5>
              <p>Our Aim is to serve you with Comfort..<br/>Relax and Enjoy when you are connected with us..</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br/><br/><br/>
      <center>
      <div className="container">
  <div className="jumbotron   text-light" id="jumbo1">
  <br/><br/>
    <h1>Your Comfort Our Priority!! </h1>      
    <h5>We serve you the Best coz we value our Customers..</h5>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <h5>You Can Relax When You Book With Us..</h5>
  </div>
  <br/><br/>
  <div className="jumbotron text-light" id="jumbo2">
  <br/>
    <h1>We Care!!</h1>      
    <h5>We are taking all the safety measures because we care for you.</h5>
    <h5>We Are SAFE....</h5>
  </div>
  <br/><br/>
  <div className="jumbotron text-light" id="jumbo3">
  <br/><br/><br/>
    <h1>Plan Your Event/Stay or Dine In..</h1>      
    <h5>Start exploring and Book right now without any worries..</h5>
  </div>
        </div>
        </center>
        </div>

    );
}

export default Home;
