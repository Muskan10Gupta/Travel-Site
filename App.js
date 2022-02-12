import React from 'react';
import Header from './Components/CommonComponents/Header';
import Navigation from './Components/CommonComponents/Navigation';
import Footer from './Components/CommonComponents/Footer';
import Home from './Components/Pages/Home';
import HotelRooms from './Components/Pages/HotelRooms';
import Restaurant from './Components/Pages/Restaurant';
import Banquet from './Components/Pages/Banquet.js';
import Contact from './Components/Pages/Contact';
import Reviews from './Components/Pages/Reviews';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <br/><br/>
    <Router>
      <div>
      <Navigation />
      <br/><br/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      
        <Route path="/Book rooms">
          <HotelRooms />
        </Route>

        <Route path="/Reseve a Table">
          <Restaurant />
        </Route>

        <Route path="/Banquet Booking">
          <Banquet />
        </Route>

        <Route path="/Contact">
          <Contact />
        </Route>
        
        <Route path="/Reviews">
          <Reviews />
        </Route>
        </Switch>
    </div>
    </Router>
    <br/> <br/>
    <Footer />
    </div>
  );
}

export default App;
