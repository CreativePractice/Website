import './App'
import "bootswatch/dist/lumen/bootstrap.min.css";
import React from 'react';
import './App.css'
import Navigation from './components/Navigation';
//import Picture from './components/Picture';
import AboutUs from './components/AboutUs';
import Performances from './components/Performances';
import ContactUs from './components/ContactUs';
import Calendar from './components/Calendar';
import PageNotFound from './components/PageNotFound';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
      <div className="container">
        <Switch>
          <Route exact path='/Website/' component={AboutUs}></Route>
          <Route exact path='/Website/ContactUs' component={ContactUs}></Route>
          <Route exact path='/Website/Calendar' component={Calendar}></Route>
          <Route exact path='/Website/Performances' component={Performances}></Route>
          <Route component={PageNotFound} />
          
        </Switch>

      </div>
      </Router>
      

      
  
    </div>
  );
}

export default App;