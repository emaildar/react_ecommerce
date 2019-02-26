import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Navbar from './Komponen/Navbar';
import Footer from './Komponen/Footer';
import Home from './Komponen/Home';
import Shop from './Komponen/Shop';
import Productdetail from './Product/Productdetail';
import About from './Komponen/About';
import Faq from './Komponen/Faq';
import Contact from './Komponen/Contact';
import NotFound from './Komponen/NotFound';
import ForgetPass from './Register/ForgetPassword';
import Cart from './Product/Cart';
import CheckOut from './Product/CheckOut';
import Confirmation from './Product/Confirmation';
import Admin from './Admin/Admin';
import Addproduct from './Admin/addproduct';
import Login from './Register/Login';
import Register from './Register/Register';
import Userprofile from './Register/Userprofile';


class App extends Component {
  render() {
    const cookies = new Cookies();
    let mycookie = cookies.get('sessionID')
    let Navigation = (!mycookie) ? <Navbar user={mycookie}/> : <Navbar user={mycookie}/>
    return (
      <div>
        {/* <Navbar/> */}
        {/* <Home/> */}
          <div>
            {Navigation}
            <Route exact path='/' component={Home} />
            <Route exact path='/shop' component={Shop} />
            <Route path='/productdetail' component={Productdetail} />
            <Route path='/about' component={About} />
            <Route path='/faq' component={Faq} />
            <Route path='/contact' component={Contact} />
            <Route path='/forget-pass' component={ForgetPass} />
            <Route path='/cart' component={Cart} />
            <Route path='/checkout' component={CheckOut} />
            <Route path='/confirmation' component={Confirmation} />
            <Route path='/notfound' component={NotFound} />
            <Route path='/admin' component={Admin} />
            <Route path='/addproduct' component={Addproduct} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/userprofile' component={Userprofile} />
          </div>
        <Footer/>
      </div>
    );
  }
}
 
export default App;
