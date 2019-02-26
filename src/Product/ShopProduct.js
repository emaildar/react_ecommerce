import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class Shop extends Component {
    state =
    {
        prodlist: [],
        catlist: []
    }

    componentDidMount = () =>
    {
        axios.get('http://localhost:1234/Productlist')
        .then((response) => 
        {
            // console.log(response.data[0]);
            // console.log(response.data[1]);
            this.setState({
                prodlist: response.data[0],
                catlist: response.data[1]
            })
        })
    }
    // Untuk mengirim produk permintaan dan daftar kategori ke server dan menampilkan respons

    Filter = () =>
    {
        var filtercat = document.querySelector('input[name="cat"]:checked').value;
        axios.post('http://localhost:1234/Productlist', 
        {
            filterCat: filtercat
        })
        .then((respon) => 
        {
            this.setState({
                prodlist: respon.data[0],
            })
        })
    }
    //product filter

    resetFilter = () =>
    {
        axios.get('http://localhost:1234/Productlist')
        .then((response) => 
        {
            // console.log(response.data[0]);
            // console.log(response.data[1]);
            this.setState({
                prodlist: response.data[0],
            })
        })
    }
    // reset filter
  render() {
    const daftarproduk = this.state.prodlist.map((item, index) =>
    {
        let prodid = item.id;
        let prodname = item.prod_name;
        let prodimage = item.prod_img;
        return <div key={index} className="col-md-6">
        <div className="card ada mb-3">
            <div className="card-header">
                <Link to={{pathname: '/productdetail/' + prodid, state: {prodid: prodid}}} id="nodecor"><h3 id="Oleo">{prodname}</h3></Link>
            </div>
            <div className="card-body">
                <img className="" id="stylegambar" src={`http://localhost:1234/images/${prodimage}`} alt="asd"/>
            </div>
        </div>
    </div>
    })
    // untuk mapping daftar produk

    const datakategori = [].concat(this.state.catlist)
        .sort((a, b) => a.category > b.category)
        .map((item, i) =>
        {
            return <li key={i} className="list-group-item">
                <label className="checkbox-inline">
                    <input type="radio" name="cat" value={item.id}/> {item.category}
                </label>
            </li>
        }
    );
    // untuk mapping daftar kategori juga mengurutkannya
    return (
    <div className="padtop padbot" id="homeback">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-3">
                            <div className="card bg-light mb-3 nobordercard">
                                <a href="#cat" data-toggle="collapse" className="card-header text-uppercase" id="nodecor"><i className="fa fa-list"></i> Filter Categories</a>
                                <form>
                                    <ul className="list-group category_block collapse" id="cat">
                                        {datakategori}
                                        <li className="list-group-item"><input type="button" onClick={this.Filter} className="btn btn-success btn-sm" value="Apply"/>&nbsp;
                                        <input type="reset" className="btn btn-danger btn-sm" onClick={this.resetFilter} value="Clear"/></li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-8">
                            <div className="row">
                                {daftarproduk}
                            </div>
                        </div>
                    </div>
                </div>
                <button id="myBtn"><i className="fa fa-caret-up"></i></button>
            </div>
    );
  }
}

export default Shop;