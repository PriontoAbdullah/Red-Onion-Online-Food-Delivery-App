import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AuthProvider, PrivateRoute } from './components/SignUp/useAuth';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Foods from './components/Foods/Foods';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp';
import Shipment from './components/Shipment/Shipment';
import OrderComplete from './components/OrderComplete/OrderComplete';
import SearchResult from './components/SearchResult/SearchResult';


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

  const [deliveryDetails, setDeliveryDetails] = useState({
    toDoor: "Delivery To Door",
    read: null,
    businessName: null,
    address: null
  });

  const deliveryDetailsHandler = data => {
    setDeliveryDetails(data);
  }

  const checkOutItemHandler = (foodID, foodQuantity) => {
    const newCart = cart.map(item => {
      if (item.id === foodID) {
        item.quantity = foodQuantity;
      }
      return item;
    })

    const filteredCart = newCart.filter(item => item.quantity > 0)
    setCart(filteredCart)
  }

  const clearCart = () => {
    setCart([]);
  }

  return (
    <AuthProvider>
      <Router>
        <Switch>

          <Route exact path="/">
            <Header
              cart={cart}
            />
            <Banner />
            <Foods
              cart={cart}
            />
            <Blog />
            <Footer />
          </Route>

          <Route path='/food/:id'>
            <Header
              cart={cart}
            />
            <FoodDetails
              cart={cart}
              cartHandler={cartHandler}
            />
            <Footer />
          </Route>

          <Route path='/search=:searchQuery'>
            <Header
              cart={cart}
            />
            <Banner />
            <SearchResult />
            <Blog />
            <Footer />
          </Route>

          <PrivateRoute path='/checkout'>
            <Header
              cart={cart}
            />
            <Shipment
              cart={cart}
              deliveryDetails={deliveryDetails}
              deliveryDetailsHandler={deliveryDetailsHandler}
              checkOutItemHandler={checkOutItemHandler}
              clearCart={clearCart}
            />
            <Footer />
          </PrivateRoute>

          <PrivateRoute path="/order-complete">
            <Header
              cart={cart}
            />
            <OrderComplete
              deliveryDetails={deliveryDetails}
            />
            <Footer />
          </PrivateRoute>

          <Route path='/signup'>
            <SignUp />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
