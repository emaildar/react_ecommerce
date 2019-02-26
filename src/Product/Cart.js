import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
import $ from 'jquery';

const cookies = new Cookies();

class Cart extends Component
{
    state =
    {
        detailCart: [],
        subPrice: [],
        fullname: '',
        address: '',
        phone: '',
        defadd: false,
        chooseitem: ['Your Cart is Empty'],
        devMethod: [],
        devPrice: 0,
        grandTotal: 0,
        paymentMeth: '',
        redirect: false,
        isCheckout: <br/>
    }

    componentWillMount = () =>
    {
        var self = this;
        var userID = cookies.get('sessionID');
        if (cookies.get('sessionID') !== undefined)
        {
            // console.log(userID)
            axios.post('http://localhost:1234/Cart', 
            {
                UserID: userID
            })
            .then((response) => 
            {
                // console.log(response.data)
                // console.log(response.data[0].length)
                // console.log(response.data[0][0].checkoutstat_id)
                var totalCart = response.data[0].length
                if (totalCart > 0)
                {
                    // if totalcart > 0 to make sure that var statusout will work if there is at least one item
                    // in the cart list that ordered by the user
                    var takeData = response.data[0]; // contain list of item in cart based on userID
                    var subprice = response.data[1]; // contain price per cart ID based on userID
                    var statusout = response.data[0][0].checkoutstat_id 

                    if (statusout === 2)
                    {
                        self.setState({
                            detailCart: takeData,
                            subPrice: subprice
                        })
                    }
                    // statusout === 2 means that the user still in the cart/cancel checkout and go back to cart
                    
                    else if (statusout !== 2)
                    {
                        self.setState({
                            detailCart: []
                        })
                    }
                    // statusout !== 2 (berarti berubah menjadi 1)
                    // user pindah ke checkout tetapi item keranjang belum dihapus dari tabel
                    // cart akan mengubah status lagi ketika user menyelesaikan pembayaran

                    var Alltotal = 0;
                    var listPrice = this.state.subPrice
                    for (var i=0; i<listPrice.length; i++)
                    {
                        Alltotal = Alltotal + listPrice[i].tot_sub_price
                    }
                    // perulangan untuk menjumlahkan harga total dari semua item
                    this.setState({
                        grandTotal: Alltotal
                    })
                    // grandtotal awal sebelum memilih metode pengiriman
                }
                else
                {
                    // jika tidak ada item dalam daftar troli, maka ia akan tetap sebagai status kosong dalam tipe array
                    self.setState({
                        detailCart: []
                    })
                }
            })
            // untuk mengambil cart data

            axios.get('http://localhost:1234/Cart')
            .then((response) => {
                var devMeth = response.data;
                self.setState({
                    devMethod: devMeth
                })
            })
            // mengambil daftar metode pengiriman
        }
        // ini (cookie) untuk menghindari user yang tidak login tetapi mencoba mengakses keranjang.
        // Redirect berfungsi, tetapi ini hanya untuk menghapus peringatan
        
    }

    delete = (val) =>
    {
        var self = this;
        axios.post('http://localhost:1234/Delcart', 
        {
            cartID: val
        }).then((response) => 
        {
            if (response)
            {
                var userID = cookies.get('sessionID');
                axios.post('http://localhost:1234/Cart', 
                {
                    UserID: userID
                })
                .then((response) => 
                {
                    var takeData = response.data[0];
                    var subprice = response.data[1];
                    // console.log(subprice)
                    
                    self.setState({
                        detailCart: takeData,
                        subPrice: subprice
                    })
                    // untuk mendapatkan data yang diperbarui setelah item dihapus

                    var Alltotal = 0;
                    var listPrice = this.state.subPrice
                    for (var i=0; i<listPrice.length; i++)
                    {
                        Alltotal = Alltotal + listPrice[i].tot_sub_price
                    }

                    self.setState({
                        grandTotal: Alltotal + this.state.devPrice
                    })
                    //untuk memperbarui jumlah total setelah item dihapus dari troli
                })
            }
        })
    };
    // hapus item keranjang dan perbarui datanya

    changeQty = (e, id) =>
    {
        var userID = cookies.get('sessionID');
        axios.post('http://localhost:1234/updateCart', {
            QtyNew: e,
            cartID: id,
            userID: userID
        }).then((respon) => {
            var retakeCart = respon.data[0];
            var subprice = respon.data[1];

            this.setState({
                detailCart: retakeCart,
                subPrice: subprice
            })
            // perbarui item keranjang data dan setiap sub total setelah jumlah item diubah

            var Alltotal = 0;
            var listPrice = this.state.subPrice
            for (var i=0; i<listPrice.length; i++)
            {
                Alltotal = Alltotal + listPrice[i].tot_sub_price
            }
            
            this.setState({
                grandTotal: Alltotal + this.state.devPrice
            })
            // perbarui grandtotal setelah jumlah item dalam keranjang diubah
        })
    }
    // untuk mengubah jumlah cart barang dan memasukkannya ke dalam database

    check = () =>
    {
        var self = this;
        if (document.getElementById("checked").checked === true)
        {
            // console.log('checked')
            var userID = cookies.get('sessionID');
            axios.post('http://localhost:1234/Defaultaddress', {
                UserID: userID
            })
            .then((response) => 
            {
                var takeData = response.data[0];
                // console.log(takeData);
                self.setState({
                    fullname: takeData.fullname,
                    address: takeData.address,
                    phone: takeData.phone,
                    defadd: true
                })
                // fungsi ini untuk mengambil info pengguna untuk alamat default (untuk pengiriman)

                $(document).ready(() => {
                    $('#fullname').val(this.state.fullname);
                    $('#address').val(this.state.address);
                    $('#phone').val(this.state.phone);
                })
                // jika input sudah dimasukkan dengan beberapa nilai, maka kotak centang diklik, nilai yang tersisa akan berubah
                // dengan nilai alamat default. Jika fungsi di atas tidak ada, setState tidak dapat menggantikan yang tersisa
            })
        }
        else
        {
            self.setState({
                fullname: '',
                address: '',
                phone: '',
                defadd: false
            })
            // pilihan checkbox uncheck

            $(document).ready(() => {
                $('#fullname').val(this.state.fullname);
                $('#address').val(this.state.address);
                $('#phone').val(this.state.phone);
            })
            // jika input sudah dimasukkan dengan beberapa nilai, maka kotak centang diklik, nilai yang tersisa akan berubah
            // dengan nilai setState default. Jika fungsi di atas tidak ada, setState tidak dapat menggantikan yang tersisa
            
        }
    }
    // untuk mengambil alamat default jika pengguna ingin menggunakan alamat mereka yang menyimpan di profil user mereka

    delivery = (b) =>
    {
        var deliveryID = b.target.value
        deliveryID = parseInt(deliveryID, 10); // 10 means radix parameter
        var listDev = this.state.devMethod;
        // this.state.devMethod adalah array yang berisi metode pengiriman, ID-nya, dan harganya

        for (var i=0; i<listDev.length; i++)
        {
            var devID = listDev[i].id
            var devPricechange = listDev[i].price
            if (deliveryID === devID)
            {   
                var devPrice = devPricechange
            }
            else if (deliveryID === 0)
            {
                devPrice = 0
            }
        }
        // metode pengiriman loop, metode yang dipilih kemudian membuat var yang berisi total harga

        var Alltotal = 0;
        var listPrice = this.state.subPrice
        for (var j=0; j<listPrice.length; j++)
        {
            Alltotal = Alltotal + listPrice[j].tot_sub_price
        }
        // untuk mendapatkan harga total semua barang
        
        this.setState({
            grandTotal: Alltotal + devPrice,
            devPrice: devPrice
        })
        // grandTotal adalah harga total semua barang ditambah biaya pengiriman
        // devPrice adalah harga metode pengiriman yang dipilih
    }
    // untuk menampilkan harga metode pengiriman yang dipilih

    selectPayment = (e) =>
    {
        // console.log(e.target.value);
        var selectedPayment = e.target.value
        if (selectedPayment === '1')
        {
            this.setState({
                paymentMeth: 'BCA - 1234-5678-9012-3456'
            })
        }
        else if (selectedPayment === '2')
        {
            this.setState({
                paymentMeth: 'Mandiri - 9876-5432-1098-7654'
            })
        }
    }
    // ambil metode pembayaran yang akan dikirim ke checkout

    checkout = (val) =>
    {
        var recieveby = val.fullname.value;
        var recieveAdd = val.address.value;
        var recievePhone = val.phone.value;
        var idDelivery = val.delivery.value;
        var userID = cookies.get('sessionID');
        var checkoutstats = 1;
        var methPay = this.state.paymentMeth;
        var devPayPrice = this.state.devPrice;
        var listCart = this.state.detailCart;
        var listSubtot = this.state.subPrice;
        var cartItemLength = listCart.length;
        // console.log(val.fullname.value)
        // console.log(val.address.value)
        // console.log(val.phone.value)
        // console.log(this.state.grandTotal)
        // console.log(cookies.get('sessionID'))
        // console.log(checkoutstats)
        
        $(document).ready(() => 
        {
            var choosenDelivery = $("#delivery option:selected").text(); // untuk mendapatkan nama metode pengiriman
            // console.log(choosenDelivery)
            if (idDelivery !== '0' && cartItemLength > 0 && recieveby !== '' 
            && recieveAdd !== '' && recievePhone !== '' && methPay !== '') // jika user sudah memilih metode pengiriman, maka checkout
            {
                axios.post('http://localhost:1234/Checkout', 
                {
                    fullname: recieveby,
                    address: recieveAdd,
                    phone: recievePhone,
                    userID: userID,
                    deliveryMethod: choosenDelivery, // delivery method
                    statusCheckout: checkoutstats,
                    methPay: methPay,
                    devPayPrice: devPayPrice,
                    listCart: listCart,
                    listSubtot: listSubtot
                })
                .then((respon) =>
                {
                    var response = respon.data;
                    if (response === 1)
                    {
                        this.setState({
                            redirect: true
                        })
                        console.log('hasilnya')
                    }
                    else if (response === -1)
                    {
                        this.setState({
                            isCheckout: `You have an unpaid item. Please finish the payment first.
                            Otherwise, you have to cancel your order in your payment history, then edit your cart.`
                        })
                    }
                })
            }
        })
    }

    render()
    {
        if (cookies.get('sessionID') === undefined) return <Redirect to='/Login'/>
        // untuk memeriksa apakah pengguna sudah masuk atau belum

        if (this.state.redirect) return <Redirect to="/Checkout"/>
        // jika checkout berhasil, maka arahkan ke halaman checkout

        const noItem = this.state.chooseitem.map((item, index) => 
        {
            return <tr key={index}>
                    <td colSpan='5' className="text-center" style={{fontSize:30}}>{item}</td>
                </tr>
        })
        // untuk menampilkan info jika kereta kosong

        const cartList = this.state.detailCart.map((item, index) =>
        {
            var cartID = item.id
            var prodName = item.prodName;
            var prodQty = item.qty;
            var prodPrice = item.prodPrice;
            var subtotal = this.state.subPrice;
            // console.log(prodQty)
            // console.log(this.state.detailCart)

            for (var i=0; i<subtotal.length; i++)
            {
                if (subtotal[i].id === cartID)
                {
                    var subTotPrice = subtotal[i].tot_sub_price
                }
            }
            // untuk mencocokkan harga subtotal dengan item (this.state.subHarga berisi id Keranjang dan subtotal per kartid)

            return <tr key={index}>
                    <td>{prodName}</td>
                    <td className="text-center"><strong>{prodPrice}</strong></td>
                    <td>
                        <center style={{marginTop:15}}>
                            <input className="text-center styleproddet" ref="qty" type="number" min={1}
                            defaultValue={prodQty} onChange={(e) => this.changeQty(e.target.value, cartID)}/>&nbsp;
                        </center>
                    </td>
                    <td className="text-right"><strong>{subTotPrice}</strong></td>
                    <td className="text-center">
                        <button type="button" className="btn btn-danger" onClick={() => this.delete(cartID)}>
                            <span className="fa fa-trash-alt"></span>
                        </button>
                    </td>
                </tr>
        })
        // untuk mapping ke cart list

        const cartLength = cartList.length
        // console.log(cartLength)

        const devList = this.state.devMethod.map((item, index) =>
        {
            var devID = item.id
            var devName = item.method;

            return <option key={index} value={devID}>{devName}</option>
        })
        // untuk mapping ke delivery method
        
        return (
            <div id="homeback" style={{marginTop:100}}>
               <div className="container padbot padtop">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3><strong>My Cart</strong></h3>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                    <form>
                                        <table className="table table-hover" id="myTable">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th className="text-center">Price (IDR)</th>
                                                    <th className="text-center">Quantity</th>
                                                    <th className="text-right">Sub-Total</th>
                                                    <th className="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {(cartLength === 0) ? noItem : cartList}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td><b>Shipped to</b></td>
                                                    <td>
                                                        <label className="checkbox-inline">
                                                            <input type="checkbox" id="checked" onChange={this.check}/> Default Address
                                                        </label>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <input type="text" className="form-control text-left" id="fullname" ref="fullname"
                                                        defaultValue={this.state.fullname} disabled={this.state.defadd} placeholder="Full Name"/>
                                                    </td>
                                                    <td>
                                                        <input type="text" className="form-control text-left" id="address" ref="address"
                                                        defaultValue={this.state.address} disabled={this.state.defadd} placeholder="Address"/>
                                                    </td>
                                                    <td>
                                                        <input type="number" className="form-control text-left" id="phone" ref="phone"
                                                        defaultValue={this.state.phone} disabled={this.state.defadd} placeholder="Phone Number"/>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Delivery Method</b></td>
                                                    <td></td>
                                                    <td className="text-right">
                                                        <select id="delivery" ref="delivery" onChange={this.delivery}>
                                                        {/* DELIVERY METHOD IS here */}
                                                            <option value={0}>Choose one</option>
                                                            {devList}
                                                        </select>
                                                    </td>
                                                    <td className="text-right"><b>{this.state.devPrice}</b></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Payment Method</b></td>
                                                    <td><input type="radio" name="bank" style={{verticalAlign:'top'}} onChange={this.selectPayment} value="1"/> BCA - 1234-5678-9012-3456</td>
                                                    <td><input type="radio" name="bank" style={{verticalAlign:'top'}} onChange={this.selectPayment} value="2"/> Mandiri - 9876-5432-1098-7654</td>
                                                    <td className="text-right">
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <h3>Total</h3>
                                                    </td>
                                                    <td className="text-right">
                                                        <h3 ref="grandtotal" defaultValue={this.state.grandTotal}>
                                                            {this.state.grandTotal}
                                                        </h3>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <Link to="/shop">
                                                            <button type="button" className="btn btn-primary btn-sm">
                                                                <span className="fa fa-shopping-cart"></span> Continue Shopping
                                                            </button>
                                                        </Link>
                                                    </td>
                                                    <td className="text-right">
                                                        <button type="button" className="btn btn-success btn-sm" onClick={() => this.checkout(this.refs)}>
                                                            Checkout <span className="fa fa-play"></span>
                                                        </button>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={5}>
                                                        {this.state.isCheckout}
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </form>
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
export default Cart;