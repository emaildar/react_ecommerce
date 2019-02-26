import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

class Productdetail extends Component {
    state =
    {
        detprod: [],
        categoryname: '',
        nums: 1,
        redirectCart: false,
        redirectLogin: false
    }

    componentDidMount = () =>
    {
        var id_sblm = this.props.location.state.prodid;
        // console.log(id_sblm)
        axios.get('http://localhost:1234/Productdetail/' + id_sblm)
        .then((response) => 
        {
            // console.log(response.data[0].hasil);
            // console.log(response.data[1].catname);
            this.setState({
                detprod: response.data[0].hasil,
                categoryname: response.data[1].catname
            })
        })
    }
    // Untuk mengirim produk permintaan dan daftar kategori ke server dan menampilkan respons

    Qty = (e) =>
    {
        this.setState({
            nums: e.target.value
        })
    }
    // untuk membuat nilai qty dari produk yang dipilih dapat diedit

    increment = () => 
    {  
        this.setState({
            nums: this.state.nums + 1
        })
    }
    // Function to add item
      
    decrement = () => 
    {  
        this.setState({
            nums: this.state.nums - 1
        })
        
        if (this.state.nums < 2)
        {
            this.setState({
                nums: 1
            })
        }
    }
    // Function to reduce item

    order = (ordered) =>
    {
        // console.log(ordered.qty.value);
        // console.log(ordered.prodName.value);
        // console.log(ordered.prodPrice.value);
        const cookies = new Cookies();
        var userID = cookies.get('sessionID')

        if (userID !== undefined)
        {
            axios.post('http://localhost:1234/Order', 
            {
                UserID: userID,
                prodQty: ordered.qty.value,
                prodID: ordered.prodID.value,
                prodName: ordered.prodName.value,
                prodPrice: ordered.prodPrice.value
            })
            .then((response) => 
            {
                // console.log(response.data)
                var storestat = response.data;
                if (storestat === 1)
                {
                    this.setState({
                        redirectCart: true
                    })
                }
                // di redirect ke cart
            })
        }
        else
        {
            this.setState({
                redirectLogin: true
            })
        }
    }
    // fungsi untuk mengirim pesanan ke cart table
  render() {
    if (this.state.redirectCart) return <Redirect to='/Cart'/>
    // jika pengguna berhasil menambah keranjang, maka pindah ke halaman keranjang
    if (this.state.redirectLogin) return <Redirect to='/Login'/>
    // jika pengguna belum login, saat pengguna menekan add to cart, mereka akan masuk
    // redirect ke login

    const detproduk = this.state.detprod.map((item, index) =>
    {
        let prodID = item.id;
        let photo = item.prod_img;
        let prodname = item.prod_name;
        let prodprice = item.prod_price;
        let prodcat = this.state.categoryname;
        let proddesc = item.prod_desc
        return <div key={index} style={{marginTop:20}}>
                <div className="col-md-4" style={{marginTop:80, float:"left"}}>
                <div className="card bg-light mb-3">
                    <div className="">
                        <img id="stylegambar1" src={'http://localhost:1234/images/' + photo} alt=""/>
                    </div>
                </div>
            </div>

            <div className="col-md-8" style={{marginTop:80, float:"right"}}>
                <div className="card">
                    <div className="card-header" id="Lobster"><h3>{prodname}</h3></div>
                    <div className="card-body">
                        <p className="price defaultmarg">Rp {prodprice}</p>
                        <div>
                            <label className="padding10">Quantity :</label>
                            <div className="form-group">
                                <center>
                                    <button className="btn btn-danger width90 btn-sm" onClick={() => this.decrement()}><i className="fa fa-minus"></i></button>&nbsp;
                                    <input className="text-center styleproddet" ref="qty" type="number" value={this.state.nums} onChange={this.Qty}/>&nbsp;
                                    <input className="text-center styleproddet" ref="prodID" type="hidden" value={prodID}/>&nbsp;
                                    <input className="text-center styleproddet" ref="prodName" type="hidden" value={prodname}/>&nbsp;
                                    <input className="text-center styleproddet" ref="prodPrice" type="hidden" value={prodprice}/>&nbsp;
                                    <button className="btn btn-success width90 btn-sm" onClick={() => this.increment()}><i className="fa fa-plus"></i></button><br/><br/>
                                    <button type="button" className="btn btn-success btn-sm" onClick={() => this.order(this.refs)}>
                                        <i className="fa fa-shopping-cart"></i> Add To Cart
                                    </button>
                                </center>
                            </div>
                        </div>             
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-header"><i className="fa fa-info-circle"></i> Description</div>
                    <div className="card-body padding10">
                        <ul className="defaultmarg">
                            <li>Category: {prodcat}</li>
                            <li>{proddesc}</li>
                        </ul>
                        <Link to="/shop">
                            <button className="btn btn-primary pull-left btn-sm"><span className="fa fa-arrow-left">&nbsp;&nbsp;</span>to Product List</button>    
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    })
    return (
        <div id="homeback">
            <div className="container-fluid padbot padtop">
                <div className="row">
                    {detproduk}
                </div>
            </div>
        </div>
    );
  }
}

export default Productdetail;