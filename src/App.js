import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Foods from './components/Foods/Foods';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Banner></Banner>
          <Foods></Foods>
          <Blog></Blog>
        </Route>
        <Route path='/food/:id'>
          <FoodDetails></FoodDetails>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
