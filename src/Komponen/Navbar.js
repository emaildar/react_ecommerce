import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies()
class Navbar extends Component {
    state = 
    {
        username: 'User',
        jumlahcart: 0
    }

    componentDidMount = () =>
    {
        // console.log(this.props.user)
        var userID = this.props.user
        if (userID !== undefined)
        {
            axios.post('http://localhost:1234/checkUsername', 
            {
                userID: userID
            })
            .then((response) => {
                var result = response.data.username
                // console.log(result)
                this.setState({
                    username: result
                })
            })

            axios.post('http://localhost:1234/jumlahcart', 
            {
                userID: userID
            })
            .then((response) => {
                var result = response.data.jumlahcart
                if (result !== null)
                {
                    this.setState({
                        jumlahcart: result
                    })
                }
                else
                {
                    this.setState({
                        jumlahcart: 0
                    })
                }
            })
        }
        else
        {
            this.setState({
                username: 'User',
                jumlahcart: 0
            })
        }
    }

    componentWillReceiveProps = (userID) =>
    {
        // console.log(userID.user)
        userID = userID.user
        if (userID !== undefined)
        {
            axios.post('http://localhost:1234/checkUsername', 
            {
                userID: userID
            })
            .then((response) => {
                var result = response.data.username
                // console.log(result)
                this.setState({
                    username: result
                })
            })

            axios.post('http://localhost:1234/jumlahcart', 
            {
                userID: userID
            })
            .then((response) => {
                var result = response.data.jumlahcart
                // console.log(result)
                if (result !== null)
                {
                    this.setState({
                        jumlahcart: result
                    })
                }
                else
                {
                    this.setState({
                        jumlahcart: 0
                    })
                }
            })
        }
        else
        {
            this.setState({
                username: 'User',
                jumlahcart: 0
            })
        }
    }

    logout = () =>
    {
        cookie.remove('sessionID')
    }
  render() {
    const opsi1 = <ul className="dropdown-menu tambahnya">
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Register">Register</Link></li>
    </ul>

    const opsi2 = <ul className="dropdown-menu tambahnya">
        <li><Link to="/Userprofile">Profile</Link></li>
        <li onClick={this.logout}><Link to="/Login">Logout</Link></li>
    </ul>

    const opsichoosen = (this.props.user !== undefined) ? opsi2 : opsi1
    return (
      <div>
        {/* preloader start */}
        <div className="preloader">
            <img src="images/preloader.gif" alt="preloader"/>
        </div>
        {/* preloader end */}
        
        {/* navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white w-100" id="navbar" style={{paddingBottom:20}}>
            <a className="navbar-brand order-2 order-lg-1" href="/"><img className="img-fluid" src="images/logo.png" alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse order-1 order-lg-2" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                <a className="nav-link" href="/">home</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/shop" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    shop
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/shop">Shop</a>
                    {/* <Link className="dropdown-item" to="/shop-list">Shop List</Link> */}
                    {/* <a className="dropdown-item" href="/product-single">Product Single</a> */}
                </div>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/notfound" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    pages
                </a>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/about">About Us</Link>                
                    <Link className="dropdown-item" to="/faq">FAQ</Link>
                </div>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
            </ul>
            </div>
            <div className="order-3 navbar-right-elements" style={{marginTop:15}}>
            <div className="search-cart">
                {/* search */}
                <div className="search">
                <button id="searchOpen" className="search-btn"><i className="ti-search"></i></button>
                <div className="search-wrapper">
                    <form action="#">
                    <input className="search-box" id="search" type="search" placeholder="Enter Keywords..."/>
                    <button className="search-icon" type="submit"><i className="ti-search"></i></button>
                    </form>
                </div>
                </div>
                {/* cart */}
                <div className="cart" style={{marginRight:10}}>
                    <Link to="/cart">
                        <button id="cartOpen" className="cart-btn">
                            <i className="ti-bag"></i>
                            <span className="d-xs-none">CART</span> {this.state.jumlahcart}
                        </button>
                    </Link>
                </div>
                <div>
                    
                </div>

                {/* end-cart */}
                {/* login */}
                <div className="login float-left">
                    <button id="loginOpen" className="login-btn dropdown"><i className="ti-user"></i>
                        <a href="404" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.state.username} <span className="caret"></span></a>
                        {opsichoosen}
                    </button>
                </div>
                {/* end-login */}
            </div>
            </div>
        </nav>
        {/* /navigation */}

      </div>
    );
  }
}

export default Navbar;