import './App'
import "bootswatch/dist/litera/bootstrap.min.css";
import React from 'react';
import './App.css'
import Navigation from './components/Navigation';
//import Picture from './components/Picture';
import AboutUs from './components/AboutUs';
import Performances from './components/Performances';
import ContactUs from './components/ContactUs';
import Calendar from './components/Calendar';





import {HashRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navigation />

      <HashRouter>
        <div className="container">
          <Switch>
            <Route exact path='/' component={AboutUs}></Route>
            <Route exact path='/ContactUS' component={ContactUs}></Route>
            <Route exact path='/Calendar' component={Calendar}></Route>
            <Route exact path='/Performances' component={Performances}></Route>
          </Switch>
        </div>
      </HashRouter>

    </div>
  );
}

export default App;