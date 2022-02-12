import React from 'react';

function HotelRooms(){
    return(
        <div>
    <h3 className="text-center">ROOMS</h3>
    <br></br>
<div className="container">
  <div className="row">
    <div className="col">
    <h2 className="text-center">THE OBEROI GRAND</h2>
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    
  <div className="carousel-inner">
    <div className="carousel-item active">
   <img src="https://cf.bstatic.com/images/hotel/max1024x768/320/32092064.jpg" className="d-block w-100" height="400px" alt="..." />
   
   <p className="font-monospace">The Oberoi Group is a luxury hotel group with its head office in Delhi. Founded in 1934, the company owns and operates 31 luxury hotels and two river cruise ships in 5 countries, primarily under its Oberoi Hotels & Resorts and Trident brands.</p>
    </div>
    <div className="carousel-item">
      <img src="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/The-Oberoi-Grand-kolkata/overview/welcome/TOG-Pool.jpg" height="400px" alt="..."/>
      <h4 className="text-center"> Ideal Location </h4>
      <p className="font-monospace">Located in Kolkata’s main shopping district,the New Market and business district, The Oberoi Grand Kolkata houses an outdoor pool and gym.</p>    
    </div>

    <div className="carousel-item">
      <img src="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-grand-kolkata/room-and-suites/luxury-suite-301/detail/ba1_6222.jpg" height="400px" alt="..."/>
      <h3 className="text-center">Comfort is priority</h3>
      <br></br>
      <p className="font-monospace">
          Offering luxury 5-star rooms for our customer's comfortable stay.
      </p>
    </div>

    <div className="carousel-item">
      <img src="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-grand-kolkata/room-and-suites/presidential-suite/detail/grand---premier-room-2.jpg" height="400px" alt="..."/>
      <h3 className="text-center">Awesome Interior </h3>
      <br></br>
      <p className="font-monospace"> Rooms that provide a vintage yet chic feel. </p>    
    </div>

    <div className="carousel-item">
      <img src="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-grand-kolkata/room-and-suites/luxury-room-247/detail/grand---luxury-room-3.jpg" height="400px" alt="..."/>
      <h3 className="text-center">Service Quality to its best</h3>
      <br></br>
      <p className="font-monospace"> Excellently well maintained and air conditioned rooms. </p>    
    </div>
 
    <div className="carousel-item">
      <img src="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-grand-kolkata/room-and-suites/classic-suite/detail/grand---classic-suite-bathroom.jpg" height="400px" alt="..."/>
      <h3 className="text-center"> Ease of access </h3>
      <br></br>
      <p className="font-monospace"> Attached bathrooms with every room only for your ease. </p>    
    </div>
</div>
<p className="text-left">
  <p >
  <i className="fa fa-cutlery fa-1x"></i>
  ROOM SERVICE:
  Veg/Non-Veg
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAB8CAMAAAD+Zp2KAAAAkFBMVEX///8AggCWQSIGhQaYRSf8/vykWj+QyZDRrJ/3+/f8+fgSixKdTjJRqlG3fWicTC8umS6pY0oikyJtt23DkoDK5cqczpx1u3Xp2NHWtanGmIfk8uT06+iKxoq9373kzsbc7tyl06VIpUiydF1/wH/KoJDVtKev2K/ew7rD4sPw+PCmXkQ3nTetalLw5OC53bn3ajGmAAAElUlEQVR4nO3ceVfiMBQFcFJAlrK7AiqLM26jzvf/dkNxPCg0uS/JC7jc+z95Ob+TJm1JUzEHTEWY7ICpEIhABCIQgT49kLSrWgkBStkfR1UCgaoEAlUJBKoSCFQlEKhKIFCVQKAqgUBVAoGqBAJVCQSqEghUJRCoSiBQlUCgKoFAVQKBqgQCVQkEqgYB1U/PzruDUV6t5qNB9/zstO7ZwD6ALsaT3vCoU6t1joa9yfjC9/fBQNPGMjdbybuNqU8bqYEum71+tpV+r3np00YYUGux3MZ5y3LREjeTFKg9vtnG+Z/azbgtbiYE6LGxM3Y+jKNfj8KGEgK1m0cWnnU6v6VE/kD1KyfPmuhKNhslA2o3Oy6eNVFTRuQN9DBAPEVG15K2UgHNhoinyJ+ZR1VpV1vHEp4ix4KpKA1Q+0TCU+REMIj8gOZPUh9jBnPYXBKgl2epT5YNX6RVZV29hrPP++TwMksBNNtZ2F3pw8vMB+iu6uNjTHUBGkwAdF/z8Vkt+feyqpKunvnxFDlzt6gPdOvHU+RWVFXQ1Tt/H2PcY0gdyHf8rOMeQ2Kga8/r6zXVv642tYFmIT5ZzTkPSYHmXvPzJvnc0agy0IvX/LxJ37WWCYFaotvDsjw57od0gdqi28OyPDvuh4RA4vvD3RzbW9UFEt8f7uYEVgVdfQj3MebB2qwq0CzcJ8vs05AIqB58gRUZWJ9cVYGCL7AiQ+tFJgK6ivExprEPoGaMT5Y1Y4AeA1ewt+S290OKQG34fsOdjm0ISYAiB5AxV+mBIgeQfQgJgFqRA2g1hCxLvR5Q7ACyDyEB0CLWx/rEoQc0jvXJsnEwkPX9vDzL1EC29/MeuQkFmsb7GFP+b5Aa0GXQQ9hWyv8NwkANDaDylV4NKHqKLlI+TWMghSvMmG5aoJ4GUC8MqB69hhXJS++m1YACH+M/ph8GdKrhY8xpSqALDZ8sK/3fHgIFvGgtS+nLVy0ghUW+SOlCD4HOdYDOUwJNdIAmQUBdHaDSWVoLSGWOtszSECjqTccmg5RAUW86NhkGAY10gEYpgZwbOeQ5CgJSWeVX63xKoOgn1dd0goCC/u3ZTTUlkMaDxio1AqUA4iUGgDhJAyAu8wCIN4oAiI8aAIgPqwCIrzsAEF+YASCdWfobv3LlS3sE9FP+9qmF/u3DPw4R0CIe6Hv/9fwlNi9EP45FbF6I3/5i20GlB3TQ7S/RQ+jbb6DiFjxu4ozcxMltwNxIjqqirrY8PjX8mD1+iuDxqeHHKHyKwI9ZYFf5ORTqatAHdXfOJrWBDvpB3Xf9JLNmeQbbqirqKj/qRV3kZ+EoU4/V/mkOm0sBVLn0WO2flQ8W4NEUgsgONxnYny/eJQ2Q9HCTYYrDTVapu08PKpI3Dnw8TkVyPI5XVa+uthrOLR8//YClIl/kiC7Lkp/8iK51po3uVzjkbedS6+zlkLfX8JjA1NkHUGwIJKtKIFCVQKAqgUBVAoGqBAJVCQSqEghUJRCoSiBQlUCgKoFAVQKBqgQCVQkEqhIIVCUQqEogUJVAoKo5YPy6epgQiEAEIhCBPjHQP+DTdUn6CgU+AAAAAElFTkSuQmCC"  height="15" alt=".."/>
 </p>

 <p >
  <i className="fa fa-cutlery fa-1x"></i>
  DINE IN:
  2 BUFFET HALLS
  <i className="fa fa-check"></i>
  </p>
  <p >
  <i className="fas fa-door-open"></i>
  ROOMS:
  SINGLE/DOUBLE/TWIN/SUITE/CONNECTING
  </p>
  <p >
  <i className="fa fa-bed" aria-hidden="true"></i>
  BEDS:
 SINGLE/DOUBLE/QUEEN/KING
</p>
<p >
  <i className="fas fa-swimmer"></i>
  SWIMMING POOL: 1
  </p>
  <p >
  <i className="fa fa-wifi" aria-hidden="true"></i>
  FREE WiFi
  </p>

  <p >
  <i className="fas fa-car fa-1x"></i>
  PAID PARKING: CHARGES - STAY PER HOUR
  </p>
  <p >
  <i className="fas fa-concierge-bell"></i>
   24 HOUR FRONT DESK
  </p>
  <p >
  <i className="fas fa-shuttle-van"></i>
  AIRPORT SHUTTLE
  </p>
  <p >
  <i className="fas fa-glass-martini"></i>
  BAR 
  </p>
  <p >
  <i className="fas fa-running"></i>
  GYM
  </p>
  </p>
</div>
</div>

    <div className="col">
    <h2 className="text-center">ITC ROYAL BENGAL</h2>
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcroyalbengal-kolkata/images/overview-landing-page/overview/desktop/exterior-dusk-with-pond.png" className="d-block w-100" height="400px" alt="..."/>
      
      <p className="font-monospace">On a sprawling landscaped property, this posh hotel is a 15-minute drive from the city centre.Featuring sitting, airy rooms offer Internet access, flat-screen TVs & minibars.Lavish suites add separate living rooms.
    </p>   
    </div>

    <div className="carousel-item">
<img src="https://www.hospibuz.com/wp-content/uploads/2019/06/Untitled-1-copy-64.jpg" className="d-block w-100" height="400px" alt="..."/>
<p>
  <h3 className="text-center">Location must to be visited</h3>
Located in Kolkata’s city of attraction of the new and old Markets,The Royal Bengal houses outdoor and indoor pools and spa.</p>
  </div>

    <div className="carousel-item">
<img src="https://media-cdn.tripadvisor.com/media/photo-s/18/d4/99/3a/photo4jpg.jpg" className="d-block w-100" height="400px" alt="..."/>
<h3 className="text-center">Comfort is what you deserve</h3>
<br></br>
<p className="font-monospace">Luxurious rooms for an awesome stay.</p>    
    </div>

    <div className="carousel-item">
<img src="https://www.outlookindia.com/outlooktraveller/public/uploads/articles/stays/Four-Seasons-Bengaluru-at-Embassy_One.gif" className="d-block w-100" height="400px" alt="..."/>
<h3 className="text-center">Modern look it is!</h3>
<br></br>
<p className="font-monospace">Modern yet chic and spacious rooms. </p>    
    </div>

    <div className="carousel-item">
<img src="https://static.travelagewest.com/i/sized/780/437/www.cfmedia.vfmleonardo.com/imageRepo/7/0/110/240/459/cculr-king-guestroom-9247-hor-clsc_O.jpg" className="d-block w-100" height="400px" alt="..."/>
<h3 className="text-center">A view worth watching</h3>
<br></br>
<p className="font-monospace">Peaceful surroundings providing you the perfect relax time.</p>  
    </div>
   
    <div className="carousel-item">
<img src="https://exp.cdn-hotels.com/hotels/38000000/37600000/37590700/37590630/553849d7_z.jpg?impolicy=fcrop&w=500&h=333&q=medium" className="d-block w-100" height="400px" alt="..."/>
<h3 className="text-center">Ease for you</h3>
<br></br>
<p className="font-monospace">Attached bathrooms with every room.</p>   
    </div>
  </div>
</div>

<p className="text-left">
<p >
  <i className="fa fa-cutlery fa-1x"></i>
  ROOM SERVICE:
  Veg/Non-Veg
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAB8CAMAAAD+Zp2KAAAAkFBMVEX///8AggCWQSIGhQaYRSf8/vykWj+QyZDRrJ/3+/f8+fgSixKdTjJRqlG3fWicTC8umS6pY0oikyJtt23DkoDK5cqczpx1u3Xp2NHWtanGmIfk8uT06+iKxoq9373kzsbc7tyl06VIpUiydF1/wH/KoJDVtKev2K/ew7rD4sPw+PCmXkQ3nTetalLw5OC53bn3ajGmAAAElUlEQVR4nO3ceVfiMBQFcFJAlrK7AiqLM26jzvf/dkNxPCg0uS/JC7jc+z95Ob+TJm1JUzEHTEWY7ICpEIhABCIQgT49kLSrWgkBStkfR1UCgaoEAlUJBKoSCFQlEKhKIFCVQKAqgUBVAoGqBAJVCQSqEghUJRCoSiBQlUCgKoFAVQKBqgQCVQkEqgYB1U/PzruDUV6t5qNB9/zstO7ZwD6ALsaT3vCoU6t1joa9yfjC9/fBQNPGMjdbybuNqU8bqYEum71+tpV+r3np00YYUGux3MZ5y3LREjeTFKg9vtnG+Z/azbgtbiYE6LGxM3Y+jKNfj8KGEgK1m0cWnnU6v6VE/kD1KyfPmuhKNhslA2o3Oy6eNVFTRuQN9DBAPEVG15K2UgHNhoinyJ+ZR1VpV1vHEp4ix4KpKA1Q+0TCU+REMIj8gOZPUh9jBnPYXBKgl2epT5YNX6RVZV29hrPP++TwMksBNNtZ2F3pw8vMB+iu6uNjTHUBGkwAdF/z8Vkt+feyqpKunvnxFDlzt6gPdOvHU+RWVFXQ1Tt/H2PcY0gdyHf8rOMeQ2Kga8/r6zXVv642tYFmIT5ZzTkPSYHmXvPzJvnc0agy0IvX/LxJ37WWCYFaotvDsjw57od0gdqi28OyPDvuh4RA4vvD3RzbW9UFEt8f7uYEVgVdfQj3MebB2qwq0CzcJ8vs05AIqB58gRUZWJ9cVYGCL7AiQ+tFJgK6ivExprEPoGaMT5Y1Y4AeA1ewt+S290OKQG34fsOdjm0ISYAiB5AxV+mBIgeQfQgJgFqRA2g1hCxLvR5Q7ACyDyEB0CLWx/rEoQc0jvXJsnEwkPX9vDzL1EC29/MeuQkFmsb7GFP+b5Aa0GXQQ9hWyv8NwkANDaDylV4NKHqKLlI+TWMghSvMmG5aoJ4GUC8MqB69hhXJS++m1YACH+M/ph8GdKrhY8xpSqALDZ8sK/3fHgIFvGgtS+nLVy0ghUW+SOlCD4HOdYDOUwJNdIAmQUBdHaDSWVoLSGWOtszSECjqTccmg5RAUW86NhkGAY10gEYpgZwbOeQ5CgJSWeVX63xKoOgn1dd0goCC/u3ZTTUlkMaDxio1AqUA4iUGgDhJAyAu8wCIN4oAiI8aAIgPqwCIrzsAEF+YASCdWfobv3LlS3sE9FP+9qmF/u3DPw4R0CIe6Hv/9fwlNi9EP45FbF6I3/5i20GlB3TQ7S/RQ+jbb6DiFjxu4ozcxMltwNxIjqqirrY8PjX8mD1+iuDxqeHHKHyKwI9ZYFf5ORTqatAHdXfOJrWBDvpB3Xf9JLNmeQbbqirqKj/qRV3kZ+EoU4/V/mkOm0sBVLn0WO2flQ8W4NEUgsgONxnYny/eJQ2Q9HCTYYrDTVapu08PKpI3Dnw8TkVyPI5XVa+uthrOLR8//YClIl/kiC7Lkp/8iK51po3uVzjkbedS6+zlkLfX8JjA1NkHUGwIJKtKIFCVQKAqgUBVAoGqBAJVCQSqEghUJRCoSiBQlUCgKoFAVQKBqgQCVQkEqhIIVCUQqEogUJVAoKo5YPy6epgQiEAEIhCBPjHQP+DTdUn6CgU+AAAAAElFTkSuQmCC"  height="15" alt=".."/>
 </p>
 <p >
  <i className="fa fa-cutlery fa-1x"></i>
  DINE IN:
  1 BUFFET HALL
  <i className="fa fa-check"></i>
  </p>
  <p >
  <i className="fas fa-door-open"></i>
  ROOMS:
  SINGLE/DOUBLE/TWIN/TRIPLE/SUITE/CONNECTING/FAMILY
  </p>
  <p >
  <i className="fa fa-bed" aria-hidden="true"></i>
  BEDS:
 SINGLE/DOUBLE/QUEEN/KING
</p>
<p >
<i className="fas fa-swimmer"></i>
  SWIMMING POOLS: 2
  </p>
  <p >
  <i className="fa fa-wifi" aria-hidden="true"></i>
  FREE WiFi
  </p>
  
  <p >
  <i className="fas fa-concierge-bell"></i>
  FREE PARKING
  </p>
  <p >
  <i className="fas fa-car fa-1x"></i>
   24 HOUR FRONT DESK
  </p>
  <p >
  <i className="fas fa-coffee"></i>
  TEA/COFFEE MAKERS IN EVERY ROOM
  </p>
  <p >
  <i className="fas fa-glass-martini"></i>
  BAR
  </p>
  <p >
  <i className="fas fa-spa"></i>
  SPA
  </p>

</p>
    </div>
  
  </div>
 </div>

 <div className="bg-secondary text-white w-30">
 <div className="container">
   <p className>BOOKING FORM      <form>
        <div className="form-group w-25">
        
    <label for="uname" className="form-label"><i className="fa fa-user"></i> NAME:</label>
     <input type="text" className="form-control" />
 
  
    <label for="number" className="form-label"><i className="fa fa-phone"></i> CONTACT NUMBER:</label>
    <input type="number" className="form-control" />

  
  <div className="mb-3">
  
    <label for="exampleInputEmail1" className="form-label"><i className="fa fa-envelope"></i> EMAIL ADDRESS</label>
    <input type="email" className="form-control" />
    
  </div>
  
  <div className="mb-3">
  
    <p><i className="fas fa-hotel"></i> SELECT HOTEL: </p>    
    <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
  <label className="form-check-label" for="exampleRadios1">
    THE OBEROI GRAND
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="form-check-label" for="exampleRadios2">
    ITC ROYAL BENGAL
  </label>
</div>
  </div>




  

<div className="form-group">
<i className="fa fa-bed" aria-hidden="true"></i>
    <label for="exampleFormControlSelect1"> SELECT ROOM TYPE: </label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>SUITE</option>
      <option>CONNECTING</option>
      <option>SINGLE</option>
      <option>DOUBLE</option>
      <option>FAMILY</option>
      <option>TWIN</option>
    </select>
  </div>

  <div className="form-group">
  <i className="fa fa-user" aria-hidden="true"></i>
  <label for="exampleFormControlSelect1"> NUMBER OF PEOPLE: </label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1-2</option>
      <option>2-4</option>
      <option>MORE THAN 4</option>
    </select>
  </div>
 
    <label for="date" className="form-label"><i className="fa fa-calendar"></i> DATE:</label>
    <input type="date" className="form-control" />
  
    <label for="text" className="form-label"><i className="fa fa-comment"></i> ANY MESSAGE:</label>
    <input type="text" className="form-control" />

    <div className="custom-control custom-checkbox mb-3">
      <input type="checkbox" className="custom-control-input" id="customCheck" name="example1"/>
      <label className="custom-control-label" for="customCheck">
      <p className="text-primary"> I accept the Terms & conditions</p>
      </label>
    </div>

  <button type="submit" className="btn btn-primary"> Done </button>

  <p>Thank you for booking with us! You will soon receive a call from one of our attendants for further details or queries. Thank You for your patience !</p>
  <p>We look forward to helping you with your further bookings with us.</p>
  </div>
</form>
</p>  
    </div>
</div>
</div>
    );
}

export default HotelRooms;
