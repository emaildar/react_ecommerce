import React, { Component } from 'react';
// import {Link} from 'react-router-dom'

class Faq extends Component {
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
                <li class="breadcrumb-item active" aria-current="page">Frequently Asked Questions</li>
                </ol>
            </div>
            </nav>
            {/* /breadcrumb */}

            <section class="section">
                <div class="container">
                <div class="row">
                    <div class="col-md-4">
                    <h2>Frequently Asked Questions</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, repudiandae.</p>
                    <p>admin@startshopping.com</p>
                    </div>
                    <div class="col-md-8">
                    {/* accordion */}
                    <div class="accordion">
                        <div class="card">
                        <div class="card-header cursor-pointer" data-toggle="collapse" data-target="#collapseOne">
                            <h4 class="mb-0">Order Status</h4>
                        </div>
            
                        <div id="collapseOne" class="collapse show">
                            <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iusto, alias, tempora fuga quam eveniet neque excepturi aliquid. Eligendi, mollitia.
                            </div>
                        </div>
                        </div>
                        <div class="card">
                        <div class="card-header cursor-pointer" data-toggle="collapse" data-target="#collapseTwo">
                            <h4 class="mb-0">Shipping & Delivery</h4>
                        </div>
            
                        <div id="collapseTwo" class="collapse">
                            <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatibus, incidunt similique nobis sint quisquam nam ab error consequuntur sit ullam ex eum exercitationem, excepturi explicabo beatae eos aspernatur odit ad perspiciatis, neque saepe magni enim. Maiores quia, quae sequi.
                            </div>
                        </div>
                        </div>
                        <div class="card">
                        <div class="card-header cursor-pointer" data-toggle="collapse" data-target="#collapseThree">
                            <h4 class="mb-0">Payments</h4>
                        </div>
            
                        <div id="collapseThree" class="collapse">
                            <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus repellat id, laboriosam ipsa repudiandae quisquam, suscipit officiis, praesentium itaque facilis distinctio dolorum. Velit reiciendis libero laudantium corporis, delectus impedit sunt.
                            </div>
                        </div>
                        </div>
                        <div class="card">
                        <div class="card-header cursor-pointer" data-toggle="collapse" data-target="#collapseFour">
                            <h4 class="mb-0">Returns & Exchanges</h4>
                        </div>
            
                        <div id="collapseFour" class="collapse">
                            <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eaque nam, ab voluptas et debitis sint hic vel ratione dignissimos.
                            </div>
                        </div>
                        </div>
                        <div class="card">
                        <div class="card-header cursor-pointer" data-toggle="collapse" data-target="#collapseFive">
                            <h4 class="mb-0">Privacy Policy</h4>
                        </div>
            
                        <div id="collapseFive" class="collapse">
                            <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis quod saepe, inventore ipsum sint cum iste quae ratione nobis laborum minima autem totam similique, quia neque deleniti! Provident, suscipit.
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

        <section class="section overlay cta" style={{backgroundImage: 'url(images/backgrounds/consultation.jpg)'}}>
        <div class="container">
            <div class="row">
            <div class="col-lg-12 text-center">
                <h1 class="text-white mb-2">Support</h1>
                <h4 class="text-white mb-4">Welcome to the online Elite Shop Service</h4>
                <a href="contact.html" class="btn btn-light">Call Us Now</a>
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

export default Faq;