import React, { Component } from 'react';
// import {Link} from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div>
        
        {/* footer */}
        <footer className="bg-light">
        <div className="section">
            <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 mb-5 mb-md-0 text-center text-sm-left">
                <h3 className="mb-4">Contact</h3>
                <p>Sinarmas MSIG Tower 40th</p>
                <p>Floor Sudirman - Jakarta Selatan</p>
                <p>+62215050 1361</p>
                <p>info@startshopping.com</p>
                <ul className="list-inline social-icons">
                    <li className="list-inline-item"><a href="/notfound"><i className="ti-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="/notfound"><i className="ti-twitter-alt"></i></a></li>
                    <li className="list-inline-item"><a href="/notfound"><i className="ti-vimeo-alt"></i></a></li>
                    <li className="list-inline-item"><a href="/notfound"><i className="ti-google"></i></a></li>
                </ul>
                </div>
                <div className="col-md-3 col-sm-6 mb-5 mb-md-0 text-center text-sm-left">
                <h3 className="mb-4">Category</h3>
                <ul className="pl-0 list-unstyled">
                    <li className="mb-2"><a className="text-color" href="/shop">Men</a></li>
                    <li className="mb-2"><a className="text-color" href="/shop">Women</a></li>
                    <li className="mb-2"><a className="text-color" href="/shop">Kids</a></li>
                    <li className="mb-2"><a className="text-color" href="/shop">Accessories</a></li>
                    <li className="mb-2"><a className="text-color" href="/shop">Shoe</a></li>
                </ul>
                </div>
                <div className="col-md-3 col-sm-6 mb-5 mb-md-0 text-center text-sm-left">
                <h3 className="mb-4">Useful Link</h3>
                <ul className="pl-0 list-unstyled">
                    <li className="mb-2"><a className="text-color" href="/about">News & Tips</a></li>
                    <li className="mb-2"><a className="text-color" href="/about">About Us</a></li>
                    <li className="mb-2"><a className="text-color" href="/faq">Support</a></li>
                    <li className="mb-2"><a className="text-color" href="/shop">Our Shop</a></li>
                    <li className="mb-2"><a className="text-color" href="/contact">Contact Us</a></li>
                </ul>
                </div>
                <div className="col-md-3 col-sm-6 text-center text-sm-left">
                <h3 className="mb-4">Our Policies</h3>
                <ul className="pl-0 list-unstyled">
                    <li className="mb-2"><a className="text-color" href="/notfound">Privacy Policy</a></li>
                    <li className="mb-2"><a className="text-color" href="/notfound">Terms & Conditions</a></li>
                    <li className="mb-2"><a className="text-color" href="/notfound">Cookie Policy</a></li>
                    <li className="mb-2"><a className="text-color" href="/notfound">Terms of Sale</a></li>
                    <li className="mb-2"><a className="text-color" href="/notfound">Free Shipping & Returns</a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        <div className="bg-dark py-4">
            <div className="container">
            <div className="row">
                <div className="col-md-5 text-center text-md-left mb-4 mb-md-0 align-self-center">
                <p className="text-white mb-0">Powered by DRA &copy; 2018 Start Shopping</p>
                </div>
                <div className="col-md-2 text-center text-md-left mb-4 mb-md-0">
                <img src="images/logo-alt.png" alt="logo"/>
                </div>
                <div className="col-md-5 text-center text-md-right mb-4 mb-md-0">
                <ul className="list-inline">
                    <li className="list-inline-item"><img src="images/payment-card/visa.jpg" alt="card"/></li>
                    <li className="list-inline-item"><img src="images/payment-card/mastercard.jpg" alt="card"/></li>
                    <li className="list-inline-item"><img src="images/payment-card/bca.jpg" alt="card"/></li>
                    <li className="list-inline-item"><img src="images/payment-card/permata.jpg" alt="card"/></li>
                    <li className="list-inline-item"><img src="images/payment-card/mandiri.jpg" alt="card"/></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </footer>
        {/* /footer */}
            
      </div>
    );
  }
}

export default Footer;