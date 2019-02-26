import React, { Component } from 'react';

class Admin extends Component {
    render() {
      return (
        <div>
          <hr/>
            <div className="page-title mb-4" style={{marginTop:80}}>
                <div className="container">
                    <div className="column">
                    <h2>Dashboard</h2>
                    </div>
                    <div className="column">
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2">
                        <div>
                            <div style={{marginBottom: 0, display: "block", overflow: "hidden"}}>
                                <div className="col-md-12 col-1 pl-0 pr-0 width" style={{marginBottom: "150px"}} id="sidebar">
                                  <div className="list-group border-0 card text-center text-md-left">
                                  <p className="list-group-item d-inline-block text-center" data-parent="#sidebar"><i class="fa fa-heart"></i> <span class="d-none d-md-inline">Welcome Admin !</span></p>
                                  
                                  {/* Button Users */}
                                  <button type="button" className="list-group-item d-inline-block " data-parent="#sidebar" style={{cursor: "pointer"}}><i class="fas fa-users"></i>  <span class="d-none d-md-inline">Users</span></button>
                                  
                                  {/* Button Products */}
                                  <button type="button" className="list-group-item d-inline-block " data-parent="#sidebar" style={{cursor: "pointer"}}><i class="fab fa-product-hunt"></i> <span class="d-none d-md-inline">Products</span></button>

                                  {/* Button Add User */}
                                  {/* <a href="/adduser" type="button" className="list-group-item d-inline-block " data-parent="#sidebar" style={{cursor: "pointer"}}><i class="fas fa-plus-circle"></i> <span class="d-none d-md-inline">Add User</span></a> */}

                                  {/* Button Add Product */}
                                  <a href="/addproduct" type="button" className="list-group-item d-inline-block text-center" data-parent="#sidebar" style={{cursor: "pointer"}}><i class="fas fa-plus-circle"></i> <span class="d-none d-md-inline">Add Product</span></a>
                                    
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-10 mx-0">
                        <table className="table table-striped">
                            <thead className="thead-light">
                                    <tr>
                                        <th scope="col">UserID</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">State</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Profile Picture</th>
                                        <th scope="col" colSpan="2" className="text-center">Edit / Remove</th>
                                    </tr>
                            </thead>
                            <tbody>
                                {/* {this.usersTable()} */}
                            </tbody>
                        </table>
                    
                        <table className="table table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">ProductID</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Picture</th>
                                    <th scope="col" colSpan="2" className="text-center">Edit / Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {this.productsTable()} */}
                            </tbody>
                        </table>
                    
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Admin;