import React, { Component } from 'react';
import ShopProduct from '../Product/ShopProduct';

class Shop extends Component {
  render() {
    return (
      <div>
        {/* main wrapper */}
        <div className="main-wrapper" style={{marginTop:128}}>

            {/* breadcrumb */}
            <nav className="bg-gray py-3">
            <div className="container">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Shop</li>
                </ol>
            </div>
            </nav>
            {/* /breadcrumb */}
            
            <div id="quickView" className="quickview">
            <div className="row w-100">
                <div className="col-lg-6 col-md-6 mb-5 mb-md-0 pl-5 pt-4 pt-lg-0 pl-lg-0">
                <img src="images/feature/product.png" alt="product-img" className="img-fluid"/>
                </div>
                <div className="col-lg-5 col-md-6 text-center text-md-left align-self-center pl-5">
                <h3 className="mb-lg-2 mb-2">Woven Crop Cami</h3>
                <span className="mb-lg-4 mb-3 h5">Rp200.000</span>
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
            
            {/* shop */}
            <div className="container">
                {/* top bar */}
                
                {/* sidebar */}
                
                    {/* product-list */}
                    {/* product */}
                        <ShopProduct />
                    {/* end of product */}
            </div>
            {/* /shop */}

        </div>
        {/* /main wrapper */}
      </div>
    );
  }
}

export default Shop;