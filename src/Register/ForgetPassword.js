import React, { Component } from 'react';

class ForgetPass extends Component {
    render() {
      return (
        <div>
            <section class="forget-password-page account">
              <div class="container">
                <div class="row">
                  <div class="col-md-6 mx-auto">
                    <div class="block text-center">
                      <h2 class="text-center">Selamat datang kembali</h2>
                      <form class="text-justify clearfix">
                        <p>Silakan masukkan alamat email untuk akun Anda. Kode verifikasi akan dikirimkan kepada Anda. Setelah menerima kode verifikasi, Anda dapat memilih kata sandi baru untuk akun Anda.</p>
                        <div class="form-group">
                          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Account email address" />
                        </div>
                        <div class="text-center">
                          <button type="submit" class="btn btn-primary">Reset Password</button>
                        </div>
                      </form>
                      <p class="mt-3"><a href="/shop">Back to shop</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
      );
    }
  }
  
  export default ForgetPass;