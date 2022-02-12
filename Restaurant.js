import React from 'react';

function Restaurant()
{
    return(
        <div>
    <h3 className="text-center">Restaurant</h3>
    <br></br>
<div className="container">
  <div className="row">
    <div className="col">
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
<img src="https://images4.via.com/static/hotel/images/10/239827/239827_0_f.jpg" className="d-block w-100" alt="..." height="350px" width="100px"/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn1.goibibo.com/voy_mmt/t_g/htl-imgs/201409041737337285-ea9eac14bada11e79aef0a9df65c8753.jpg" className="d-block w-100" alt="..." height="350px" width="100px"/>
    </div>
    <div className="carousel-item">
      <img src="https://r1imghtlak.mmtcdn.com/3beba5b87a4111eabf380242ac110002.jpg?&output-quality=75&downsize=520:350&crop=520:350;3,0&output-format=jpg" className="d-block w-100" alt="..." height="350px" width="100px"/>

    </div>
    </div>
    <p><h3><center>HOTEL PARAGON PALACE</center></h3>
    The oldest freestanding restaurant. A local favorite for 83+ years. Featuring our famous DeAngelis spaghetti sauces and our famous Upside Down pizza. Homemade, delicious Italian dishes, featuring seafood, steaks, and pasta. Full pub menu and sandwich selection. Full menu offered all day and late night. Full bar with entertainment on weekends. </p>
  
</div>

</div>
    

<div className="col">
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1442565011/Domestic%20Hotels/Hotels_Solan/Hotel%20Pine%20Grove/Overview.jpg" className="d-block w-100" alt="..."height="350px" width="100px"/>

    </div>
    <div className="carousel-item">
<img src="https://r1imghtlak.mmtcdn.com/0ff6c9a47b9d11e994bb0242ac110002.png?&output-quality=75&downsize=520:350&crop=520:350;21,0&output-format=jpg" className="d-block w-100" alt="..." height="350px" width="100px"/>
    </div>
    <div className="carousel-item">
      <img src="https://r1imghtlak.mmtcdn.com/6dfbab947fbd11eaaa1d0242ac110002.png?&output-quality=75&downsize=520:350&crop=520:350;0,24&output-format=jpg" className="d-block w-100" alt="..." height="350px" width="100px"/>

    </div>
    </div>
    <p><h3><center>HOTEL PINEGROVE</center></h3>
    A quality and relaxing rural country restaurant, run by award winning owners.The building and decor are charming and rustic, with elegant modern touches.  A daily menu, all freshly prepared in the  kitchen, includes fresh fish, pies, steaks and chef's daily specials with main course prices ranging from Rs 500- Rs2000. As all dishes are prepared in the kitchen, they are able to cater for most dietary needs, with most sauces, soups and gravy all created gluten free.  </p>
  
</div>
    </div>
  </div>
</div>

<div className="container">
<div className="card mt-100 ml-50 mr-50 mb-100">
  <h2><center>BOOKING FORM</center></h2>
  <form action="/action_page.php" className="needs-validation" novalidate>
    
  <div className="form-group">
      <label for="uname"/>Full Name:
      <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
  <div className="form-group">
      <label for="email"/>Email Address:
      <input type="email" className="form-control" id="email" placeholder="Enter email id " name="email" required />
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
  <div className="form-group">
      <label for="type"/>Type of reservation:
    <select id="Typw  " name="type">
    <option value="Hotel Paragon">Hotel Paragon</option>
    <option value="Hotel Pinegrove">Hotel Pinegrove</option>
  </select>
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group">
      <label for="pwd"/>Date of Reservation:
      <input type="date" className="form-control" id="pwd" placeholder="Enter date " name="pswd" required/>
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
  <div className="form-group">
      <label for="no"/>No of seats to be reserved
      <input type="text" className="form-control" id="no" placeholder="Enter the required no of seats" name="no" required/>
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
  <div className="form-group">
      <label for="cno">Contact Number</label>
      <input type="text" className="form-control" id="cno" placeholder="Enter your contact number" name="cno" required/>
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group form-check">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" name="remember" required/> I agree that the above information is correct.
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Check this checkbox to continue.</div>
      </label>
    </div>
    <div className="text-center">
    <button type="submit" className="btn btn-primary ">Submit</button>
    </div>
  </form>
  </div>
</div>
</div>
    );
}

export default Restaurant;
