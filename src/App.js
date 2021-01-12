import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Order from './components/order/order';
import PlaceOrder from './components/order/placeOrder';
import SetOrder from './components/order/setOrder';
import ShowOrderProducts from './components/order/showOrderProducts';
import AddProduct from './components/product/addProduct'
import ShowProducts from './components/product/showProduct';
import UpdatePage from './components/product/updatePage';
import ViewProduct from './components/product/viewProduct';


function App() {


  return (
    <div className="App">
      <Switch>
        <Route path="/order" exact component={Order} />
        <Route path="/addProduct" exact component={AddProduct} />
        <Route path="/" exact component={ShowProducts} />
        <Route path="/viewProduct/:id" exact component={ViewProduct} />
        <Route path="/updatePage/:id" exact component={UpdatePage} />
        <Route path="/setOrder/" exact component={SetOrder} />
        <Route path="/orderProducts/:id" exact component={ShowOrderProducts} />
      </Switch>
    </div>
  );
}

export default App;
