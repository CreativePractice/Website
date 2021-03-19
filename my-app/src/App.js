import './App'
import "bootswatch/dist/lumen/bootstrap.min.css";
import React from 'react';
import './App.css'
import Navigation from './components/Navigation';
import Picture from './components/Picture';
import AboutUs from './components/AboutUs';
import Performances from './components/Performances';
import ContactUs from './components/ContactUs';
import Calendar from './components/Calendar';


import {BrowserRouter,Route,Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path='/' component={Picture}></Route>
          <Route path='/AboutUs' component={AboutUs}></Route>
          <Route path='/ContactUs' component={ContactUs}></Route>
          <Route path='/Calendar' component={Calendar}></Route>
          <Route path='/Performances' component={Performances}></Route>
          
        </Switch>

      </div>
      </BrowserRouter>
      

      
  
    </div>
  );
}

export default App;