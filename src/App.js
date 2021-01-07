import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Course from './components/pages/Courses';
import Abouts from './components/pages/About';
import viewCourses from './components/pages/viewCourses';
import viewCourses2 from './components/pages/viewCourses2';
import viewCourses3 from './components/pages/viewCourses3';
import viewCourses4 from './components/pages/viewCourses4';
import Portfolio from './components/pages/Portfolio';
import Contacts from './components/pages/Contacts';
import Logins from './components/pages/Login';
import Signup from './components/pages/Registration';
import Shop from './components/pages/Shop';
import ViewProduct from './components/pages/ViewProduct';

function App() {
  return (
    <Router>
    <Switch>
        <Route path='/' exact component={Home} />  
        <Route path='/about' exact component={Abouts} />  
        <Route path='/Courses' exact component={Course} />  
        <Route path='/course1' exact component={viewCourses} />  
        <Route path='/course2' exact component={viewCourses2} />  
        <Route path='/course3' exact component={viewCourses3} />  
        <Route path='/course4' exact component={viewCourses4} />  
        <Route path='/portfolio' exact component={Portfolio} />  
        <Route path='/contact' exact component={Contacts} />  
        <Route path='/login' exact component={Logins} />  
        <Route path='/registration' exact component={Signup} />  
        <Route path='/shop' exact component={Shop} />  
        <Route path='/viewProduct/:id' exact component={ViewProduct} />  
        
       
       </Switch>
     </Router>
  );
}

export default App;
