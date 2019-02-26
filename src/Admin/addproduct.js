import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Admin extends Component {
    render() {
      return (
        <div>
          <div>
              <hr/>
                <div style={{marginTop:80}}>
                    <div className="page-title mb-4">
                        <div className="container">
                            <div className="column">
                            <h2>Add Product</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <form encType="multipart/form-data" className="col-lg-8 mx-auto">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Product Name</label>
                            <input type="text" id="productname" className="form-control" placeholder="Product name"/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="price">Price</label>
                            <input type="text" id="price" className="form-control" placeholder="Price"/>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputSize">Size</label>
                            <select id="size" className="form-control">
                                <option selected>Choose...</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="color">Color</label>
                            <input type="text" id="color" className="form-control"  placeholder="Color"/>
                        </div>                    
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="category">Category</label>
                            <select id="category" className="form-control">
                                <option selected>Choose...</option>
                                <option>Shoes</option>
                                <option>Bag</option>
                                <option>Watch</option>
                                <option>Shirt</option>
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="stock">Stock</label>
                            <input type="text" id="stock" className="form-control" placeholder="Stock"/>
                        </div>                        
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>
                    
                    <div className="form-group custom-file">
                    <label for="customFile">Product Image</label><br/>
                    
                    <input type='file' accept="image/*" name='filename'/>
                    </div>

                    <div style={{marginTop:40, marginBottom:40}}>
                        <button  type="submit" className="btn btn-primary">Add Product</button>
                        <Link to="/admin"><button type="button" className="btn btn-secondary">Back</button></Link>
                    </div>
                </form>
            </div>
        </div>
      );
    }
  }
  
  export default Admin;