import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import Home from './views/home';
import NotFound from './views/not-found';
import Log from './views/log';
import Nav from './components/nav_and_footer/nav';
import Guide from './components/guide/guide';
import About from './views/about';
// import "./i18n.js";
import KidneyBeans_Info from './components/crops/KidneyBeans_Info';
import ImageUploadForm from './views/Pridict';
import Hero from './components/crops/crop';
import Crop from './views/crops';
import Mumabai from './views/mumbai';
import PropertyPage from './components/PropertyPages/property';
import Contact_us from './views/contactus';
import Dholera from './views/dholera';
const App = () => {
  // const selectedCrop = 'rice';
  const validCrops = [`rice`,`wheat`, `kidneybeans`, `barley`,'mothbeans','chickpeas  ','pigeonpeas','maize','mungbean','blackgram','lentil','pomegranate','banana','mango','grapes','watermelon','muskmelon','apple','orange','papaya','coconut','cotton','jute','coffee'];
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/guide" component={Guide} exact />
          <Route path="/log" component={Log} exact />
          <Route path='/aboutus' component={About} />
          <Route path='/predictor' component={ImageUploadForm} />
          <Route path='/crops' component={Crop} />
          <Route path='/mumbai' component={Mumabai} />
          <Route path='/dholera' component={Dholera} />
          <Route path = '/property' component = {PropertyPage} />
          <Route path = '/contactus' component = {Contact_us} />
          {/* <Route path='/"kidneybeans"' component= {Hero cropName={selectedCrop}} /> */}
          {validCrops.map((crop) => (
            <Route key={crop} path={`/${crop}`}>
              <Hero cropName={crop} />
            </Route>
          ))}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(<App />, document.getElementById('app'));