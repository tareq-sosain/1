import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import { FooterContainer } from './containers1/footer1'


import  About from "./components/About";
import  News from "./components/News";
// import  Products from "./components/Products";
import  Photogallery from "./components/Photogallery";
import  Conatct from "./components/Conatct";
import  Clients from "./components/Clients";
import  Home from "./components/Home";


const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />

              
          <Route
            path="/Home"
            component={Home}
            exact
          ></Route>

<Route
            path="/Clients"
            component={Clients}
            exact
          ></Route>

          <Route
            path="/News"
            component={News}
            exact
          ></Route>
          
          <Route
            path="/about"
            component={About}
            exact
          ></Route>

           <Route
            path="/Photogallery"
            component={Photogallery}
            exact
          ></Route>

          <Route
            path="/Conatct"
            component={Conatct}
            exact
          ></Route>

<Route
            path="/HomeScreen"
            component={HomeScreen}
            exact
          ></Route>
          

          <Route path='/' component={Home} exact />
        
      </main>
      
      <FooterContainer />
      <Footer />
    </Router>
   
  )
}

export default App
