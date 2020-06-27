import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Foods from './components/Foods/Foods';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp';
import { AuthProvider, PrivateRoute } from './components/SignUp/useAuth';
import Shipment from './components/Shipment/Shipment';
import OrderComplete from './components/OrderComplete/OrderComplete';


function App() {

  const [cart, setCart] = useState([])

  const cartHandler = currentFood => {

    const alreadyAdded = cart.find(item => item.id === currentFood.id)

    if (alreadyAdded) {
      const reamingCarts = cart.filter(item => cart.id !== currentFood)
      setCart(reamingCarts);
    } else {
      const newCart = [...cart, currentFood]
      setCart(newCart);
    }
  }

  return (
    <AuthProvider>
      <Router>
        <Switch>

          <Route exact path="/">
            <Header cart={cart}></Header>
            <Banner></Banner>
            <Foods cart={cart}></Foods>
            <Blog></Blog>
            <Footer></Footer>
          </Route>

          <Route path='/food/:id'>
            <Header cart={cart}></Header>
            <FoodDetails cart={cart} cartHandler={cartHandler}></FoodDetails>
            <Footer></Footer>
          </Route>

          <PrivateRoute path='/checkout'>
            <Header cart={cart}></Header>
            <Shipment cart={cart}></Shipment>
            <Footer></Footer>
          </PrivateRoute>

          <PrivateRoute path="/order-complete">
            <Header cart={cart}></Header>
            <OrderComplete></OrderComplete>
            <Footer></Footer>
          </PrivateRoute>

          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
