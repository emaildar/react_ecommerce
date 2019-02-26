import React, { Component } from 'react';
// import {Link} from 'react-router-dom'

class Contact extends Component {
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
                <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                </ol>
            </div>
            </nav>
            {/* /breadcrumb */}

        {/* google map */}
        <section>
            <div class="row">
            <div class="col-lg-12 text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4016056944592!2d106.82010061412099!3d-6.210644795504037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e324564963%3A0xb876e32ffae855e4!2sSinarmas+MSIG+Tower!5e0!3m2!1sid!2sid!4v1544334127823" width="1600" height="600" frameborder="0" style={{ border: "0" }} allowfullscreen title="map"></iframe>
            </div>
            </div>
        </section>
        {/* /google map */}
        
        {/* contact */}
        <section class="section">
            <div class="container">
            <div class="row justify-content-between">
                {/* form */}
                <div class="col-lg-7 mb-5 mb-lg-0 text-center text-md-left">
                <h2 class="section-title">Contact Us</h2>
                <form action="#" class="row">
                    <div class="col-md-6">
                    <input type="text" id="firstName" name="firstName" class="form-control mb-4 rounded-0" placeholder="First Name" required/>
                    </div>
                    <div class="col-md-6">
                    <input type="text" id="lastName" name="lastName" class="form-control mb-4 rounded-0" placeholder="Last Name" required/>
                    </div>
                    <div class="col-md-12">
                    <input type="text" id="subject" name="subject" class="form-control mb-4 rounded-0" placeholder="Subject" required/>
                    </div>
                    <div class="col-md-12">
                    <textarea name="message" id="message" class="form-control rounded-0 mb-4" placeholder="Message"></textarea>
                    </div>
                    <div class="col-md-12">
                    <button type="submit" value="send" class="btn btn-primary">Submit now</button>
                    </div>
                </form>
                </div>
                {/* contact item */}
                <div class="col-lg-4">
                <div class="d-flex mb-60">
                    <i class="ti-location-pin contact-icon"></i>
                    <div>
                    <h4>Our Location</h4>
                    <p class="text-gray mb-0">Sinarmas MSIG Tower 40th</p>
                    <p class="text-gray mb-0">Floor Sudirman - Jakarta Selatan</p>
                    </div>
                </div>
                <div class="d-flex mb-60">
                    <i class="ti-mobile contact-icon"></i>
                    <div>
                    <h4>Call Us Now</h4>
                    <p class="text-gray mb-0">+62215050 1361</p>
                    <p class="text-gray mb-0">+62213005 1277</p>
                    </div>
                </div>
                <div class="d-flex mb-60">
                    <i class="ti-email contact-icon"></i>
                    <div>
                    <h4>Write Us Now</h4>
                    <p class="text-gray mb-0">customer.service@startshopping.com</p>
                    <p class="text-gray mb-0">info@startshopping.com</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* /contact */}

        </div>
        {/* /main wrapper */}
            
      </div>
    );
  }
}

export default Contact;