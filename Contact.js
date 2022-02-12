import React from 'react';

function Contact()
{
    return(
        <div>
            <div className="p-3 mb-2 bg-secondary ">
            <div className="container p-3 mb-2 bg-white">
                <br></br>
                <br></br>
                <h1><center><b>Contact Us</b></center></h1>
                <p><h2><center>Swing by for a cup of coffee, or leave us a message :-)</center></h2></p>
                <br>
                </br>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://badianhotel.com/wp-content/uploads/2020/08/Safari-Court-Hotel-Pool.jpg" className="d-block w-80" alt="..." height="350px" width="650px"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://novotel.accor.com/middleware/images/1385737312126/1617722432619/novoteldewd.jpg" className="d-block w-80" alt="..." height="350px" width="650px"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://res.cloudinary.com/simplotel/image/upload/x_0,y_615,w_4813,h_1875,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/vits-hotels/Listing_Image_skazsy" className="d-block w-80" alt="..." height="350px" width="650px"/>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col text-center">
                            <form action="/action_page.php" className="text-center">
                                <div className="form-group ">
                                    <label for="fname" />First Name:
        <input type="text" id="fname" name="firstname" placeholder="Your name.." className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="lname" />Last Name:
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="email" />Email Address:
      <input type="email" className="form-control" id="email" placeholder="Enter email id " name="email" required />
                                    
                                </div>
                                <div className="form-group">
                                    <label for="cno">Contact Number:</label>
                                    <input type="text" className="form-control" id="cno" placeholder="Enter your contact number" name="cno" required />
                                    
                                </div>
                                <div className="form-group">
                                    <label for="subject" />Leave Us a Message:
        <textarea id="subject" name="subject" placeholder="Write something.." rows="4" cols="78"  className="d-block w-80" />
                                </div>
                                <br/>
                                <div className="text-center">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>



                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Contact;
