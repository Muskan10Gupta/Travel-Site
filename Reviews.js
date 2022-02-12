import React from 'react';

function Reviews()
{
    return(
        <div>
            <center>
                <h1>Customer Reviews</h1>
                <img src="data:image/png;base64,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" height="350px" width="1000px" alt="Customer-review"/>
                <br/><br/><br/>
                <div className="p-3 mb-2 bg-secondary ">
            <div className="col-md-7 border bg-white">
                <br/>
                <h2>Customer Ratings</h2>
                <h3> Average Rating 4.5/5 <i className="fa fa-star gold-color " aria-hidden="true" ></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star-half gold-color" aria-hidden="true"></i></h3>
                <br/>
                <div className="progress">
                    <h6>5.0<i className="fa fa-star gold-color" aria-hidden="true"></i> Rating:-</h6> <div className="progress-bar bg-success" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">95%</div>
                  </div>
                <br/>
                <div className="progress">
                    <h6>4.0<i className="fa fa-star gold-color" aria-hidden="true"></i>  Rating:-</h6> <div className="progress-bar bg-info" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                  </div>
                <br/>
                <div className="progress">
                    <h6>3.0<i className="fa fa-star gold-color" aria-hidden="true"></i>  Rating:-</h6> <div className="progress-bar bg-warning" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                  </div>
                <br/>
                <div className="progress">
                    <h6>2.0<i className="fa fa-star gold-color" aria-hidden="true"></i>  Rating:-</h6> <div className="progress-bar bg-danger" role="progressbar" style={{width: "7%"}} aria-valuenow="7" aria-valuemin="0" aria-valuemax="100">7%</div>
                  </div>
                <br/>
                <div className="progress">
                    <h6>1.0<i className="fa fa-star gold-color" aria-hidden="true"></i>  Rating:-</h6> <div className="progress-bar bg-danger" role="progressbar" style={{width: "3%"}} aria-valuenow="3" aria-valuemin="0" aria-valuemax="100">3%</div>
                  </div>
                <br/>
            </div>
            </div>
            <br/><br/>
            <div className="container border">
                <br/>
                <div className="row">
                   <h2>Your Reviews Matter:</h2>
                   <hr/>
                </div>
                <br/>
            <div className="row">
            <div className="col-md-4">
            <h3>Ritu Verma  <i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i></h3>
                <hr/>
                <p>I had a great Experience with Kolkata Travels. They give the best of the choices and servicies.<br/>Thankyou Kolkata Travels.. :)</p>
            </div>
            <div className="col-md-4">
            <h3>Sameer <i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star-half gold-color" aria-hidden="true"></i></h3>
                <hr/>
                <p>Thankyou Kolkata Travels for making my Trip Wonderful. I was new to the place but you made my stay comfortable.<br/>Rooms were exactly the same as in the pictures!!..</p>
            </div>
            <div className="col-md-4">
            <h3>Alex <i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i></h3>
                <hr/>
                <p>I had a wonderful Experience with Kolkata Travels.<br/>The Quality of food and other services was so good.</p>
            </div>
            </div>
            <hr/>
            <br/>
            <div className="row">
            <div className="col-md-4">
            <h3>Rajeev Batra <i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star-half gold-color" aria-hidden="true"></i></h3>
                <hr/>
                <p>I had planned my son's Birthday Party. The decor and the arrangement was amazing..<br/>My son was really Happy!!</p>
            </div>
            <div className="col-md-4">
            <h3>Karan Sharma <i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i></h3>
                <hr/>
                <p>I came as a tourist here, but you served me with the best of all.<br/>I loved it..</p>
            </div>
            <div className="col-md-4">
            <h3>Bhavya <i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star gold-color" aria-hidden="true"></i><i className="fa fa-star-half gold-color" aria-hidden="true"></i></h3>
                <hr/>
                <p>I had a booked in for a lunch with my family. Your service is so good.<br/>Loved it :)</p>
            </div>
            </div>
            </div>
            </center>
        </div>
    );
}

export default Reviews;
