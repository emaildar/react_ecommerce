import React, { Component } from 'react';
// import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        {/* main wrapper */}
        <div className="main-wrapper">
        <section className="section bg-gray hero-area">
        <div className="container">
            <div className="hero-slider">
            
            {/* Start first slide  */}
            <div className="slider-item">
                <div className="row">
                <div className="col-lg-6 align-self-center text-center text-md-left mb-4 mb-lg-0">
                    <h3 data-duration-in=".5" data-animation-in="fadeInLeft" data-delay-in="0" data-animation-out="fadeOutLeft" data-delay-out="5" data-duration-out=".3">For Men’s</h3>
                    {/* Start Title */}
                    <h1 data-duration-in=".5" data-animation-in="fadeInLeft" data-delay-in=".2" data-animation-out="fadeOutLeft" data-delay-out="5" data-duration-out=".3">High Quality Converse</h1> 
                    {/* end title */}
                    {/* Start Subtitle */}
                    <h3 className="mb-4" data-duration-in=".5" data-animation-in="fadeInLeft" data-delay-in=".4" data-animation-out="fadeOutLeft" data-delay-out="5" data-duration-out=".3">for only Rp200.000</h3>
                    {/* end subtitle */}
                    {/* Start description */}
                    <p className="mb-4" data-duration-in=".5" data-animation-in="fadeInLeft" data-delay-in=".6" data-animation-out="fadeOutLeft" data-delay-out="5" data-duration-out=".3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    {/* end description */}
                    {/* Start button */}
                    <a href="/shop" className="btn btn-primary" data-duration-in=".5" data-animation-in="fadeInLeft" data-delay-in=".8" data-animation-out="fadeOutLeft" data-delay-out="5" data-duration-out=".3">shop now</a>
                    {/* end button */}
                </div>
                {/* Start slide image */}
                <div className="col-lg-6 text-center text-md-left">
                    {/* background letter */}
                    <div className="bg-letter">
                    <span data-duration-in=".5" data-animation-in="fadeInRight" data-delay-in="1.2" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-out=".3">
                        C 
                    </span>
                    {/* Slide image */}
                    <img className="img-fluid d-unset" src="images/hero-area/converse.png" alt="converse" data-duration-in=".5" data-animation-in="fadeInRight" data-delay-in="1" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-out=".3"/>
                    </div>
                </div>
                {/* end slide image  */}
                </div>
            </div> {/* end slider item */}
        
        
            {/* Start slide  */}
            <div className="slider-item">
                <div className="row">
                <div className="col-lg-6 align-self-center text-center text-md-left mb-4 mb-lg-0">
                    <h3 data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in="0" data-animation-out="fadeOutDown" data-delay-out="5.8" data-duration-out=".3">For Women’s</h3>
                    <h1 data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in=".2" data-animation-out="fadeOutDown" data-delay-out="5.4" data-duration-out=".3">High Quality Bag</h1>
                    <h3 className="mb-4" data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in=".4" data-animation-out="fadeOutDown" data-delay-out="5" data-duration-out=".3">for only Rp300.000</h3>
                    <p className="mb-4" data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in=".6" data-animation-out="fadeOutDown" data-delay-out="4.6" data-duration-out=".3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="/shop" className="btn btn-primary" data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in=".8" data-animation-out="fadeOutDown" data-delay-out="4.2" data-duration-out=".3">shop now</a>
                </div>
                <div className="col-lg-6 text-center">
                    <div className="bg-letter">
                        {/* background letter */}
                    <span data-duration-in=".5" data-animation-in="fadeInRight" data-delay-in="1.2" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-out=".3">
                        B
                    </span>
                    <img className="img-fluid d-unset" src="images/hero-area/bag.png" alt="converse" data-duration-in=".5" data-animation-in="fadeInRight" data-delay-in="1" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-out=".3"/>
                    </div>
                </div>
                </div>
            </div> 
            {/* end slide  */}
        
            </div>
        </div>
        </section>
        {/* /hero area
        
        {/* categories */}
        <section className="section">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
                <h2 className="section-title">Top Categories</h2>
            </div>
            {/* categories item */}
            <div className="col-lg-4 col-md-6 mb-50">
                <div className="card p-0">
                <div className="border-bottom text-center hover-zoom-img">
                    <a href="/shop"><img src="images/categories/product-big-1.jpg" className="rounded-top img-fluid w-100" alt="product-img"/></a>
                </div>
                <ul className="d-flex list-unstyled pl-0 categories-list">
                    <li className="m-0 hover-zoom-img">
                    <a href="/shop"><img src="images/categories/product-sm-1.jpg" className="img-fluid w-100" alt="product-img"/></a>
                    </li>
                    <li className="m-0 hover-zoom-img">
                    <a href="/shop"><img src="images/categories/product-sm-2.jpg" className="img-fluid w-100" alt="product-img"/></a>
                    </li>
                    <li className="m-0 hover-zoom-img">
                    <a href="/shop"><img src="images/categories/product-sm-3.jpg" className="img-fluid w-100" alt="product-img"/></a>
                    </li>
                </ul>
                <div className="px-4 py-3 border-top">
                    <h4 className="d-inline-block mb-0 mt-1">Clothing</h4>
                    <a href="/shop" className="btn btn-sm btn-outline-primary float-right">view more</a>
                </div>
                </div>
            </div>
            {/* categories item */}
            <div className="col-lg-4 col-md-6 mb-50">
                <div className="card p-0">
                <div className="border-bottom text-center hover-zoom-img">
                    <a href="/shop"><img src="images/categories/product-big-2.jpg" className="rounded-top img-fluid w-100" alt="product-img"/></a>
                </div>
                <ul className="d-flex list-unstyled pl-0 categories-list">
                    <li className="m-0 hover-zoom-img">
                    <a href="/shop"><img src="images/categories/product-sm-4.jpg" className="img-fluid w-100" alt="product-img"/></a>
                    </li>
                    <li className="m-0 hover-zoom-img">
                    <a href="/shop"><img src="images/categories/product-sm-5.jpg" className="img-fluid w-100" alt="product-img"/></a>
                    </li>
                    <li className="m-0 hover-zoom-img">
                    <a href="/shop"><img src="images/categories/product-sm-6.jpg" className="img-fluid w-100" alt="product-img"/></a>
                    </li>
                </ul>
                <div className="px-4 py-3 border-top">
                    <h4 className="d-inline-block mb-0 mt-1">Shoes</h4>
                    <a href="/shop" className="btn btn-sm btn-outline-primary float-right">view more</a>
                </div>
                </div>
            </div>
            {/* categories item */}
            <div className="col-lg-4 col-md-6 mb-50">
                <div className="card p-0">
                <div className="border-bottom text-center hover-zoom-img">
                    <a href="/shop"><img src="images/categories/product-big-3.jpg" className="rounded-top img-fluid w-100" alt="product-img"/></a>
                </div>
                <ul className="d-flex list-unstyled pl-0 categories-list">
                    <li className="m-0 hover-zoom-img">
                    <a href="/shop"><img src="images/categories/product-sm-7.jpg" className="img-fluid w-100" alt="product-img"/></a>
                    </li>
                    <li className="m-0 hover-zoom-img">
                    <a href="/shop"><img src="images/categories/product-sm-8.jpg" className="img-fluid w-100" alt="product-img"/></a>
                    </li>
                    <li className="m-0 hover-zoom-img">
                    <a href="/shop"><img src="images/categories/product-sm-9.jpg" className="img-fluid w-100" alt="product-img"/></a>
                    </li>
                </ul>
                <div className="px-4 py-3 border-top">
                    <h4 className="d-inline-block mb-0 mt-1">Accessories</h4>
                    <a href="/shop" className="btn btn-sm btn-outline-primary float-right">view more</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* /categories */}
        
        <section className="section overlay cta" style={{backgroundImage: 'url(images/backgrounds/cta.jpg)'}}>
        <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
                <h1 className="text-white mb-2">End of Season Sale</h1>
                <p className="text-white mb-4">Take 25% off all sweaters and knits. Discount applied at checkout.</p>
                <a href="/shop" className="btn btn-light">shop now</a>
            </div>
            </div>
        </div>
        </section>
      
        {/* collection */}
        <section className="section">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-title">Top Callections</h2>
            </div>
            <div className="col-12">
                <div className="collection-slider">
                    {/* product */}
                <div className="col-lg-4 col-sm-6">
                    <div className="product text-center">
                        <div className="product-thumb">
                        <div className="overflow-hidden position-relative">
                            <a href="/product-single">
                            <img className="img-fluid w-100 mb-3 img-first" src="images/collection/product-1.jpg" alt="product-img"/>
                            <img className="img-fluid w-100 mb-3 img-second" src="images/collection/product-4.jpg" alt="product-img"/>
                            </a>
                            <div className="btn-cart">
                                <a href="/notfound" className="btn btn-primary btn-sm">Add To Cart</a>
                            </div>
                        </div>
                        <div className="product-hover-overlay">
                            <a href="/notfound" className="product-icon favorite" data-toggle="tooltip" data-placement="left" title="Wishlist"><i
                                className="ti-heart"></i></a>
                            <a href="/notfound" className="product-icon cart" data-toggle="tooltip" data-placement="left" title="Compare"><i
                                className="ti-direction-alt"></i></a>
                            <a data-vbtype="inline" href="#quickView" className="product-icon view venobox" data-toggle="tooltip"
                            data-placement="left" title="Quick View"><i className="ti-search"></i></a>
                        </div>
                        </div>
                        <div className="product-info">
                        <h3 className="h5"><a className="text-color" href="/product-single">Leather Backpack</a></h3>
                        <span className="h5">Rp450.000</span>
                        </div>
                    </div>
                    </div>
                    {/* //end of product */}
                    {/* product */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="product text-center">
                        <div className="product-thumb">
                            <div className="overflow-hidden position-relative">
                            <a href="/product-single">
                                <img className="img-fluid w-100 mb-3 img-first" src="images/collection/product-2.jpg" alt="product-img"/>
                                <img className="img-fluid w-100 mb-3 img-second" src="images/collection/product-5.jpg" alt="product-img"/>
                            </a>
                            <div className="btn-cart">
                                <a href="/notfound" className="btn btn-primary btn-sm">Add To Cart</a>
                            </div>
                            </div>
                            <div className="product-hover-overlay">
                            <a href="/notfound" className="product-icon favorite" data-toggle="tooltip" data-placement="left" title="Wishlist"><i
                                className="ti-heart"></i></a>
                            <a href="/notfound" className="product-icon cart" data-toggle="tooltip" data-placement="left" title="Compare"><i
                                className="ti-direction-alt"></i></a>
                            <a data-vbtype="inline" href="#quickView" className="product-icon view venobox" data-toggle="tooltip"
                                data-placement="left" title="Quick View"><i className="ti-search"></i></a>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3 className="h5"><a className="text-color" href="/product-single">Box Leather Shoulder Bag</a></h3>
                            <span className="h5">Rp520.000</span>
                        </div>
                        {/* product label badge */}
                        <div className="product-label new">
                            new
                        </div>
                        </div>
                    </div>
                    {/* //end of product */}
                    {/* product */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="product text-center">
                        <div className="product-thumb">
                            <div className="overflow-hidden position-relative">
                            <a href="/product-single">
                                <img className="img-fluid w-100 mb-3 img-first" src="images/collection/product-3.jpg" alt="product-img"/>
                                <img className="img-fluid w-100 mb-3 img-second" src="images/collection/product-6.jpg" alt="product-img"/>
                            </a>
                            <div className="btn-cart">
                                <a href="/notfound" className="btn btn-primary btn-sm">Add To Cart</a>
                            </div>
                            </div>
                            <div className="product-hover-overlay">
                            <a href="/notfound" className="product-icon favorite" data-toggle="tooltip" data-placement="left" title="Wishlist"><i
                                className="ti-heart"></i></a>
                            <a href="/notfound" className="product-icon cart" data-toggle="tooltip" data-placement="left" title="Compare"><i
                                className="ti-direction-alt"></i></a>
                            <a data-vbtype="inline" href="#quickView" className="product-icon view venobox" data-toggle="tooltip"
                                data-placement="left" title="Quick View"><i className="ti-search"></i></a>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3 className="h5"><a className="text-color" href="/product-single">Sneaky Leather Sneakers</a></h3>
                            <span className="h5">Rp270.000</span>
                        </div>
                        {/* product label badge */}
                        </div>
                    </div>
                    {/* //end of product */}
                    {/* product */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="product text-center">
                        <div className="product-thumb">
                            <div className="overflow-hidden position-relative">
                            <a href="/product-single">
                                <img className="img-fluid w-100 mb-3 img-first" src="images/collection/product-4.jpg" alt="product-img"/>
                                <img className="img-fluid w-100 mb-3 img-second" src="images/collection/product-2.jpg" alt="product-img"/>
                            </a>
                            <div className="btn-cart">
                                <a href="/notfound" className="btn btn-primary btn-sm">Add To Cart</a>
                            </div>
                            </div>
                            <div className="product-hover-overlay">
                            <a href="/notfound" className="product-icon favorite" data-toggle="tooltip" data-placement="left" title="Wishlist"><i
                                className="ti-heart"></i></a>
                            <a href="/notfound" className="product-icon cart" data-toggle="tooltip" data-placement="left" title="Compare"><i
                                className="ti-direction-alt"></i></a>
                            <a data-vbtype="inline" href="#quickView" className="product-icon view venobox" data-toggle="tooltip"
                                data-placement="left" title="Quick View"><i className="ti-search"></i></a>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3 className="h5"><a className="text-color" href="/product-single">Puzzle leather shoulder bag</a></h3>
                            <span className="h5">Rp400.000</span>
                        </div>
                        {/* product label badge */}
                        <div className="product-label sale">
                            -10%
                        </div>
                        </div>
                    </div>
                    {/* //end of product */}
                    {/* product */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="product text-center">
                        <div className="product-thumb">
                            <div className="overflow-hidden position-relative">
                            <a href="/product-single">
                                <img className="img-fluid w-100 mb-3 img-first" src="images/collection/product-5.jpg" alt="product-img"/>
                                <img className="img-fluid w-100 mb-3 img-second" src="images/collection/product-3.jpg" alt="product-img"/>
                            </a>
                            <div className="btn-cart">
                                <a href="/notfound" className="btn btn-primary btn-sm">Add To Cart</a>
                            </div>
                            </div>
                            <div className="product-hover-overlay">
                            <a href="/notfound" className="product-icon favorite" data-toggle="tooltip" data-placement="left" title="Wishlist"><i
                                className="ti-heart"></i></a>
                            <a href="/notfound" className="product-icon cart" data-toggle="tooltip" data-placement="left" title="Compare"><i
                                className="ti-direction-alt"></i></a>
                            <a data-vbtype="inline" href="#quickView" className="product-icon view venobox" data-toggle="tooltip"
                                data-placement="left" title="Quick View"><i className="ti-search"></i></a>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3 className="h5"><a className="text-color" href="/product-single">Puzzle leather shoulder bag</a></h3>
                            <span className="h5">Rp400.000</span>
                        </div>
                        {/* product label badge */}
                        </div>
                    </div>
                    {/* //end of product */}
                    {/* product */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="product text-center">
                        <div className="product-thumb">
                            <div className="overflow-hidden position-relative">
                            <a href="/product-single">
                                <img className="img-fluid w-100 mb-3 img-first" src="images/collection/product-6.jpg" alt="product-img"/>
                                <img className="img-fluid w-100 mb-3 img-second" src="images/collection/product-1.jpg" alt="product-img"/>
                            </a>
                            <div className="btn-cart">
                                <a href="/notfound" className="btn btn-primary btn-sm">Add To Cart</a>
                            </div>
                            </div>
                            <div className="product-hover-overlay">
                            <a href="/notfound" className="product-icon favorite" data-toggle="tooltip" data-placement="left" title="Wishlist"><i
                                className="ti-heart"></i></a>
                            <a href="/notfound" className="product-icon cart" data-toggle="tooltip" data-placement="left" title="Compare"><i
                                className="ti-direction-alt"></i></a>
                            <a data-vbtype="inline" href="#quickView" className="product-icon view venobox" data-toggle="tooltip"
                                data-placement="left" title="Quick View"><i className="ti-search"></i></a>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3 className="h5"><a className="text-color" href="/product-single">Puzzle leather shoulder bag</a></h3>
                            <span className="h5">Rp400.000</span>
                        </div>
                        </div>
                    </div>
                    {/* //end of product */}
                    {/* product */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="product text-center">
                        <div className="product-thumb">
                            <div className="overflow-hidden position-relative">
                            <a href="/product-single">
                                <img className="img-fluid w-100 mb-3 img-first" src="images/collection/product-7.jpg" alt="product-img"/>
                                <img className="img-fluid w-100 mb-3 img-second" src="images/collection/product-3.jpg" alt="product-img"/>
                            </a>
                            <div className="btn-cart">
                                <a href="/notfound" className="btn btn-primary btn-sm">Add To Cart</a>
                            </div>
                            </div>
                            <div className="product-hover-overlay">
                            <a href="/notfound" className="product-icon favorite" data-toggle="tooltip" data-placement="left" title="Wishlist"><i
                                className="ti-heart"></i></a>
                            <a href="/notfound" className="product-icon cart" data-toggle="tooltip" data-placement="left" title="Compare"><i
                                className="ti-direction-alt"></i></a>
                            <a data-vbtype="inline" href="#quickView" className="product-icon view venobox" data-toggle="tooltip"
                                data-placement="left" title="Quick View"><i className="ti-search"></i></a>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3 className="h5"><a className="text-color" href="/product-single">Puzzle leather shoulder bag</a></h3>
                            <span className="h5">Rp400.000</span>
                        </div>
                        {/* product label badge */}
                        </div>
                    </div>
                    {/* //end of product */}
                    {/* product */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="product text-center">
                        <div className="product-thumb">
                            <div className="overflow-hidden position-relative">
                            <a href="/product-single">
                                <img className="img-fluid w-100 mb-3 img-first" src="images/collection/product-8.jpg" alt="product-img"/>
                                <img className="img-fluid w-100 mb-3 img-second" src="images/collection/product-5.jpg" alt="product-img"/>
                            </a>
                            <div className="btn-cart">
                                <a href="/notfound" className="btn btn-primary btn-sm">Add To Cart</a>
                            </div>
                            </div>
                            <div className="product-hover-overlay">
                            <a href="/notfound" className="product-icon favorite" data-toggle="tooltip" data-placement="left" title="Wishlist"><i
                                className="ti-heart"></i></a>
                            <a href="/notfound" className="product-icon cart" data-toggle="tooltip" data-placement="left" title="Compare"><i
                                className="ti-direction-alt"></i></a>
                            <a data-vbtype="inline" href="#quickView" className="product-icon view venobox" data-toggle="tooltip"
                                data-placement="left" title="Quick View"><i className="ti-search"></i></a>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3 className="h5"><a className="text-color" href="/product-single">Puzzle leather shoulder bag</a></h3>
                            <span className="h5">Rp400.000</span>
                        </div>
                        </div>
                    </div>
                    {/* //end of product */}
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* /collection */}
        
        {/* deal */}
        <section className="section bg-cover" style={{backgroundImage: 'url(images/backgrounds/deal.jpg)'}}>
        <div className="container">
            <div className="row">
            <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
                <h1>Deal of the day</h1>
                <h4 className="mb-40">Get at discounted price!</h4>
                {/* syo-timer */}
                <div className="syotimer large">
                <div id="simple-timer" data-year="2019" data-month="1" data-day="1" data-hour="1"></div>
                </div>
                <a href="/shop" className="btn btn-primary">shop now</a>
            </div>
            <div className="col-md-6 text-center text-md-left align-self-center">
                <img src="images/deal/product.png" alt="product-img" className="img-fluid up-down"/>
            </div>
            </div>
        </div>
        </section>
        {/* /deal */}
        
        {/* feature */}
        <section className="section pb-0">
        <div className="container">
            <div className="row baruview">
            <div className="col-lg-6 col-md-6 mb-5 mb-md-0">
                <img src="images/feature/product.png" alt="product-img" className="img-fluid"/>
            </div>
            <div className="col-lg-5 col-md-6 text-center text-md-left align-self-center">
                <h3 className="mb-lg-2 mb-2">PreOrder</h3>
                <h4 className="mb-lg-2 mb-2">Woven Crop Cami</h4>
                <span className="mb-lg-4 mb-3 h5">Rp499.000</span>
                <p className="mb-lg-4 mb-3 text-gray">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspic atis unde omnis iste natus</p>
                <form action="#">
                <select className="form-control w-100 mb-2" name="color">
                    <option value="brown">Brown Color</option>
                    <option value="gray">Gray Color</option>
                    <option value="black">Black Color</option>
                </select>
                
                <select className="form-control w-100 mb-3" name="size">
                    <option value="small">Small Size</option>
                    <option value="medium">Medium Size</option>
                    <option value="large">Large Size</option>
                </select>
                <button className="btn btn-primary w-100 mb-lg-4 mb-3">add to cart</button>
                </form>
                <ul className="list-inline social-icon-alt">
                <li className="list-inline-item"><a href="/notfound"><i className="ti-facebook"></i></a></li>
                <li className="list-inline-item"><a href="/notfound"><i className="ti-twitter-alt"></i></a></li>
                <li className="list-inline-item"><a href="/notfound"><i className="ti-vimeo-alt"></i></a></li>
                <li className="list-inline-item"><a href="/notfound"><i className="ti-google"></i></a></li>
                </ul>
            </div>
            </div>
        </div>
        </section>
        {/* feature */}
        
        {/* instagram */}
        <section className="section border-top bg-light">
        <div className="container">
            <div className="row">
            <div className="col-12 text-center">
                <h2 className="mb-2">Brands</h2>
                <p className="mb-5">of Product</p>
            </div>
            <div className="col-12">
                {/* instafeed */}
                <div className="collection-slider">
                    {/* brand */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="product text-center">
                            <div className="product-thumb">
                                <div className="overflow-hidden">
                                <center>
                                    <a href="/shop">
                                        <img className="img-fluid w-30 mb-3 img-first" src="images/brands/1-130x87.png" alt="product-img"/>
                                    </a>
                                </center>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3 className="h5"><a className="text-color" href="/product-single">Sneaky Leather Sneakers</a></h3>
                                <span className="h5">Start From Rp50.000</span>
                            </div>
                        </div>
                    </div>
                    {/* //end of brand */}
                    {/* brand */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="product text-center">
                            <div className="product-thumb">
                                <div className="overflow-hidden position-relative">
                                <center>
                                    <a href="/shop">
                                        <img className="img-fluid w-30 mb-3 img-first" src="images/brands/2-130x87.png" alt="product-img"/>
                                    </a>
                                </center>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3 className="h5"><a className="text-color" href="/product-single">Puzzle leather shoulder bag</a></h3>
                                <span className="h5">Start From Rp200.000</span>
                            </div>
                        </div>
                    </div>
                    {/* //end of brand */}
                    {/* brand */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="product text-center">
                            <div className="product-thumb">
                                <div className="overflow-hidden position-relative">
                                <center>
                                    <a href="/shop">
                                        <img className="img-fluid w-30 mb-3 img-first" src="images/brands/3-130x87.png" alt="product-img"/>
                                    </a>
                                </center>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3 className="h5"><a className="text-color" href="/product-single">Box Leather Shoulder Bag</a></h3>
                                <span className="h5">Start From Rp100.000</span>
                            </div>
                        </div>
                    </div>
                    {/* //end of brand */}
                    {/* brand */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="product text-center">
                            <div className="product-thumb">
                                <div className="overflow-hidden position-relative">
                                <center>
                                    <a href="/shop">
                                        <img className="img-fluid w-30 mb-3 img-first" src="images/brands/4-130x87.png" alt="product-img"/>
                                    </a>
                                </center>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3 className="h5"><a className="text-color" href="/product-single">Sneaky Leather Sneakers</a></h3>
                                <span className="h5">Start From Rp150.000</span>
                            </div>
                        </div>
                    </div>
                    {/* //end of brand */}
                    {/* brand */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="product text-center">
                            <div className="product-thumb">
                                <div className="overflow-hidden position-relative">
                                <center>
                                    <a href="/shop">
                                        <img className="img-fluid w-30 mb-3 img-first" src="images/brands/5-130x87.png" alt="product-img"/>
                                    </a>
                                </center>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3 className="h5"><a className="text-color" href="/product-single">Puzzle leather shoulder bag</a></h3>
                                <span className="h5">Start From Rp50.000</span>
                            </div>
                        </div>
                    </div>
                    {/* //end of brand */}
                    {/* brand */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="product text-center">
                            <div className="product-thumb">
                                <div className="overflow-hidden position-relative">
                                <center>
                                    <a href="/shop">
                                        <img className="img-fluid w-30 mb-3 img-first" src="images/brands/6-130x87.png" alt="product-img"/>
                                    </a>
                                </center>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3 className="h5"><a className="text-color" href="/product-single">Box Leather Shoulder Bag</a></h3>
                                <span className="h5">Start From Rp200.000</span>
                            </div>
                        </div>
                    </div>
                    {/* //end of brand */}
                    {/* brand */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="product text-center">
                            <div className="product-thumb">
                                <div className="overflow-hidden position-relative">
                                <center>
                                    <a href="/shop">
                                        <img className="img-fluid w-30 mb-3 img-first" src="images/brands/7-130x87.png" alt="product-img"/>
                                    </a>
                                </center>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3 className="h5"><a className="text-color" href="/product-single">Puzzle leather shoulder bag</a></h3>
                                <span className="h5">Start From Rp100.000</span>
                            </div>
                        </div>
                    </div>
                    {/* //end of brand */}
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* /instagram */}
        
        {/* service */}
        <section className="section-sm border-top">
        <div className="container">
            <div className="row">
            {/* service item */}
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div className="d-flex flex-sm-row flex-column align-items-center align-items-sm-start">
                <i className="ti-truck service-icon mb-3 mb-sm-0"></i>
                <div className="text-center text-sm-left">
                    <h4>Free Shipping</h4>
                    <p className="mb-0 text-gray">Free shipping on oder over Rp250.000</p>
                </div>
                </div>
            </div>
            {/* service item */}
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div className="d-flex flex-sm-row flex-column align-items-center align-items-sm-start">
                <i className="ti-shield service-icon mb-3 mb-sm-0"></i>
                <div className="text-center text-sm-left">
                    <h4>Secure Payment</h4>
                    <p className="mb-0 text-gray">We ensure secure payment with PEV</p>
                </div>
                </div>
            </div>
            {/* service item */}
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div className="d-flex flex-sm-row flex-column align-items-center align-items-sm-start">
                <i className="ti-timer service-icon mb-3 mb-sm-0"></i>
                <div className="text-center text-sm-left">
                    <h4>Support Monday - Friday</h4>
                    <p className="mb-0 text-gray">Contact us at 09.00 - 16.00</p>
                </div>
                </div>
            </div>
            {/* service item */}
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div className="d-flex flex-sm-row flex-column align-items-center align-items-sm-start">
                <i className="ti-reload service-icon mb-3 mb-sm-0"></i>
                <div className="text-center text-sm-left">
                    <h4>2 Days Return</h4>
                    <p className="mb-0 text-gray">Simply return it within 2 days for an exchange.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* /service */}
        
        {/* newsletter */}
        <section className="section bg-gray">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-title">Our Newsletter</h2>
                <p className="mb-4">Subscribe to our Newsletter to receive early discount offers</p>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-9 col-10 mx-auto">
                <form action="#" className="d-flex flex-column flex-sm-row">
                <input type="email" className="form-control rounded-0 border-0 mr-3 mb-4 mb-sm-0" id="mail" placeholder="Enter your email"/>
                <button type="submit" value="send" className="btn btn-primary">Subscribe</button>
                </form>
            </div>
            </div>
        </div>
        </section>
        {/* /newsletter */}

    </div>
    {/* /main wrapper */}
      </div>
    );
  }
}

export default Home;