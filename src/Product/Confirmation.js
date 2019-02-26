import React, { Component } from 'react';

class Confirmation extends Component {
    render() {
      return (
        <div>
          <section class="section" style={{marginTop:100}}>
            <div class="container">
              <div class="row">
                <div class="col-md-6 mx-auto">
                  <div class="block text-center">
                    <h3 class="text-center mb-3">Terima kasih! Untuk pembayaran Anda</h3>
                    <p class="text-color">Pesanan Anda telah ditempatkan dan akan diproses sesegera mungkin. Sekarang kamu bisa:</p>
                    <a href="/shop" class="btn btn-primary mt-3 mx-2 btn-sm">Go To Shopping</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
  
  export default Confirmation;