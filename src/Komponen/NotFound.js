import React, { Component } from 'react';
// import {Link} from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div>
        
        {/* main wrapper */}
        <div class="main-wrapper">

            {/* breadcrumb */}
            <nav class="bg-gray py-3">
            <div class="container">
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Page Not Found</li>
                </ol>
            </div>
            </nav>
            {/* /breadcrumb */}

            <section class="page-404 section">
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <a href="index.html">
                    {/* <img src="images/logo.png" alt="site logo" /> */}
                    <h2>Start Shopping</h2>
                    </a>
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <a href="/" class="btn btn-primary mt-4"><i class="ti-angle-double-left"></i> Go Home</a>
                    <p class="copyright-text">© 2018 Powered by DRA</p>
                </div>
                </div>
            </div>
            </section>
            
        </div>
        {/* /main wrapper */}
            
      </div>
    );
  }
}

export default NotFound;