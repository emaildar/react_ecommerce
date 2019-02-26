import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

class Userprofile extends Component
{
    state =
    {
        fullname: '',
        birth: '',
        username: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        statusOldPas: '',
        statusChangeProfile: <br/>,
        listGender: [],
        listData: []
    }

    componentDidMount = () =>
    {
        // console.log(cookies.get('sessionID'))
        axios.post('http://localhost:1234/Userprofile', 
        {
            userID: cookies.get('sessionID')
        })
        .then((response) => 
        {
            // console.log(response.data[0][0].gender_id);
            this.setState({
                fullname: response.data[0].fullname,
                birth: response.data[0].birth,
                username: response.data[0].username,
                gender: response.data[0].gender,
                phone: response.data[0].phone,
                email: response.data[0].email,
                address: response.data[0].address,
            })
        })
    }
    // ambil data pengguna dari tabel profil pengguna di db

    takeValue = (val) =>
    {
        var fullname = val.fullname.value
        var birth = val.birth.value
        var username = val.username.value
        var gender = val.genderID.value
        var phone = val.phone.value
        var email = val.email.value
        var address = val.address.value
        
        var listData = []
        listData.push(
            {
                fullname: fullname, birth: birth,
                username: username, gender: gender,
                phone: phone, email: email, address: address
            }
        )

        this.setState({
            listData: listData
        })
    }
    // ambil nilai user profile

    changeProfile = (e) =>
    {
        e.preventDefault();
        var userID = cookies.get('sessionID');
        axios.post('http://localhost:1234/changeProfile', 
        {
            userID: userID,
            userData: this.state.listData
        })
        .then((respon) => 
        {
            var hasil = respon.data
            // console.log(hasil)
            if (hasil === 1)
            {
                axios.post('http://localhost:1234/Userprofile', 
                {
                    userID: userID
                })
                .then((response) => 
                {
                    // console.log(response.data[0]);
                    this.setState({
                        fullname: response.data[0].fullname,
                        birth: response.data[0].birth,
                        username: response.data[0].username,
                        gender: response.data[0].gender,
                        phone: response.data[0].phone,
                        email: response.data[0].email,
                        address: response.data[0].address,
                        statusChangeProfile: ''
                    })
                })
            }
            else
            {
                this.setState({
                    statusChangeProfile: 'Username/Email already exist'
                })
            }
        })   
    }
    // sending the value into server and retake it

    render()
    {
        // console.log(cookies.get('sessionID'))
        if (cookies.get('sessionID') === undefined) return <Redirect to='/Login'/>

        return (
            <div id="homeback" style={{marginTop:100}}>
                <div className="container-fluid padtop padbot">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-6" style={{float:"left"}}>
                                <div className="form-group">
                                    <legend className="col-md-12 col-xs-12">Your Profile</legend>
                                    <form className="form-horizontal" onSubmit={this.changeProfile}>
                                        <div className="form-group">
                                            <label className="col-md-5 control-label" id="fromprof">Full Name</label>  
                                            <div className="col-md-5">
                                                <input ref="fullname" type="text" defaultValue={this.state.fullname}
                                                placeholder="Full Name" className="form-control" required/>
                                            </div>
                                        </div>
                                            
                                        <div className="form-group">
                                            <label className="col-md-5 control-label" id="fromprof">Date of Birth</label>  
                                            <div className="col-md-5">
                                                <input ref="birth" type="date" defaultValue={this.state.birth}
                                                className="form-control input-md" required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-md-5 control-label" id="fromprof">Username</label>  
                                            <div className="col-md-5">
                                                <input ref="username" type="text" defaultValue={this.state.username}
                                                placeholder="Username" className="form-control input-md" required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-md-5 control-label" id="fromprof">Gender</label>  
                                            <div className="col-md-5">
                                                <select className="form-control" style={{borderRadius:4}} id="genderID" ref="genderID" 
                                                    value={this.state.gender} onChange={this.selectGender} required>
                                                    <option value={0}>Sex</option>
                                                    <option value="Man">Man</option>
                                                    <option value="Woman">Woman</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                
                            <div className="col-md-6" style={{float:"right"}}>
                                <div className="form-group">
                                    <div className="form-group">
                                        <label className="col-md-5 control-label" id="fromprof">Phone</label>  
                                        <div className="col-md-5">
                                            <input ref="phone" type="number" defaultValue={this.state.phone} placeholder="Phone No" className="form-control input-md" required/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-5 control-label" id="fromprof">Email</label>  
                                        <div className="col-md-5">
                                            <input ref="email" defaultValue={this.state.email} type="email"
                                            placeholder="Email Address" className="form-control input-md" required/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-5 control-label" id="fromprof">Address</label> 
                                        <div className="col-md-5">
                                            <textarea placeholder="Address" className="form-control" ref="address" rows="4"
                                            value={this.state.address} onChange={this.handleChange} required>Address</textarea>
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
export default Userprofile;