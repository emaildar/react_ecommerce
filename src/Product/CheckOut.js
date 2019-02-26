import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

class CheckOut extends Component {
  state =
    {
        fullname: '',
        address: '',
        phone: '',
        devMeth: '',
        devPrice: '',
        paymentMeth: '',
        grandTotal: '',
        orderDate: '',
        orderID: '',
        listCheckout: [],
        redirect: false,
        redirectConfirm: false
    }

    componentDidMount = () =>
    {
        var userID = cookies.get('sessionID');

        if (userID !== undefined)
        {
            console.log(userID)
            axios.post('http://localhost:1234/CheckoutComp',
            {
                userID: userID
            })
            .then((response) =>
            {
                console.log(response.data)
                var results = response.data
                var length = results.length

                if (length !== 0)
                {
                    
                    // cek data yang dikirim dari server
                    var GT = 0;
                    for (var i in results) GT = GT + results[i].subtotal

                    var date = results[0].orderDate;
                    var indexT = date.indexOf('T')
                    var orderDate = date.slice(0, indexT)

                    this.setState({
                        listCheckout: results,
                        fullname: results[0].ship_name,
                        address: results[0].ship_add,
                        phone: results[0].ship_phone,
                        paymentMeth: results[0].bank,
                        devMeth: results[0].dev_meth,
                        devPrice: results[0].dev_price,
                        grandTotal: results[0].dev_price + GT,
                        orderDate: orderDate,
                        orderID: 'INV_' + results[0].orderID
                    })
                }
            })
        }
    }
    // untuk menarik item checkout

    cancelOrder = () =>
    {
        var userID = cookies.get('sessionID');

        axios.post('http://localhost:1234/cancelOrder',
        {
            userID: userID
        })
        .then((response) =>
        {
            // console.log(response.data)
            var results = response.data
            // console.log(results)
            if (results === 1)
            {
                this.setState({
                    redirect: true
                })
            }
        })
    }
    // untuk membatalkan pesanan saat ini

    confirmPayment = () =>
    {
        var userID = cookies.get('sessionID');
        
        axios.post('http://localhost:1234/confirmPayment',
        {
            userID: userID
        })
        .then((response) =>
        {
            // console.log(response.data)
            var results = response.data
            console.log(results)
            if (results === 1)
            {
                this.setState({
                    redirectConfirm: true
                })
            }
        })
    }

    render() {
      if (cookies.get('sessionID') === undefined) return <Redirect to='/Login'/>
        // untuk memeriksa apakah pengguna sudah login atau belum
        if (this.state.redirect) return <Redirect to="/Cart"/>
        // jika pengguna membatalkan pesanan
        if (this.state.redirectConfirm) return <Redirect to="/confirmation"/>
        // jika pengguna mengkonfirmasi pembayaran

        const checkoutList = this.state.listCheckout.map((item, index) =>
        {
            var checkoutID = item.id // idcheckout
            var prodName = item.prod_name;
            var prodPrice = item.prod_price;
            var prodQty = item.quantity;
            var subtotal = item.subtotal;

            return <tr key={index} nilai={checkoutID}>
                    <td>{prodName}</td>
                    <td className="text-center"><strong>{prodPrice}</strong></td>
                    <td>
                        <input type="number" className="form-control text-center" id="number1" value={prodQty} disabled/>
                    </td>
                    <td className="text-right"><strong>{subtotal}</strong></td>
                </tr>
        })
        // untuk mapping daftar checkout
      return (
        <div>
            <div class="section" style={{marginTop:40}}>
            <div id="homeback">
                <div className="container padbot padtop">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3><strong>Order Summary - Invoice</strong></h3>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th className="text-center">Price (IDR)</th>
                                                    <th className="text-center">Quantity</th>
                                                    <th className="text-right">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {checkoutList}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td><b>Shipped to</b></td>
                                                    <td><input type="text" className="form-control text-left" id="" value={this.state.fullname} placeholder="Full Name" disabled/></td>
                                                    <td><input type="text" className="form-control text-left" id="" value={this.state.address} placeholder="Address" disabled/></td>
                                                    <td><input type="number" className="form-control text-left" id="" value={this.state.phone} placeholder="Phone Number" disabled/></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Delivery Method</b></td>
                                                    <td></td>
                                                    <td className="text-right">
                                                        {this.state.devMeth}
                                                    </td>
                                                    <td className="text-right"><b>{this.state.devPrice}</b></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Payment Method</b></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td className="text-right">
                                                        {this.state.paymentMeth}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><b>Date Order</b></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td className="text-right"><b>{this.state.orderDate}</b></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Invoice ID</b></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td className="text-right"><b>{this.state.orderID}</b></td>
                                                </tr>
                                                <tr>
                                                   
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <h3>Total</h3>
                                                    </td>
                                                    <td className="text-right">
                                                        <h3>{this.state.grandTotal}</h3>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        
                                                    </td>
                                                    <td></td>
                                                    <td>
                                                        <div>
                                                            <button onClick={this.cancelOrder} type="button" className="btn btn-danger  btn-sm">
                                                                <span className="fa fa-times"></span> Cancel Order
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <button onClick={this.confirmPayment} type="button" className="btn btn-success  btn-sm">
                                                            Confirm Payment <span className="fa fa-play"></span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      );
    }
  }
  
  export default CheckOut;