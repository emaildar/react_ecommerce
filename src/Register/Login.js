import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Login extends Component {
    state =
    {
        redirect: false,
        statusLogin: <br/>,
        typePass: 'password',
        eyePass: 'fa fa-eye-slash',
        eyeStatus: false,
        username: '',
        password: '',
        counter: 0
    }
    
    showPass = () =>
    {
        if (!this.state.eyeStatus)
        {
            this.setState({
                eyePass: 'fa fa-eye',
                eyeStatus: true,
                typePass: 'text'
            })
        }
        else
        {
            this.setState({
                eyePass: 'fa fa-eye-slash',
                eyeStatus: false,
                typePass: 'password'
            })
        }
    }
    // show password feature

    takeValue = (val) =>
    {
        this.setState({
            username: val.username.value,
            password: val.password.value
        })
    }
    // change/take the form value

    login = (userdata) =>
    {
        userdata.preventDefault();
        
        axios.post('http://localhost:1234/Login', 
        {
            username: this.state.username,
            password: this.state.password
        })
        .then((response) => 
        {
            var result = response.data
            // console.log(result)
            if (result === -1 || result === 0)    
            {
                this.setState({
                    statusLogin: 'Username/Password Incorrect',
                    counter: this.state.counter + 1
                })
                if (this.state.counter >= 3)
                {
                    this.setState({
                        statusLogin: 'Jika Anda tidak memiliki akun, silakan register'
                    })
                }
            }
            else
            {
                var userSession = response.data;
                cookies.set('sessionID', userSession, { path: '/' });
                this.setState({
                    redirect: true
                })
            }
                
        });    
    }
    // login function
    render() {
        if (this.state.redirect) return <Redirect to='/shop'/>
      return (
        <div>
            <div id="homeback" style={{marginTop:90}}>
                <div className="container" style={{paddingBottom:57, paddingTop:58}}>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title text-center" id="Pacifico" style={{fontSize:19}}>Please Sign In</h3>
                                </div>
                                <div className="panel-body">
                                    <form onSubmit={this.login}>
                                        <fieldset>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Username" ref="username" type="text"/>
                                            </div>
                                            <div className="form-group">
                                                <input id="password" className="form-control borderrad2 w-50" style={{}}
                                                placeholder="Password" ref="password" type={this.state.typePass} onInput={this.checkPass} required/>
                                                <button style={{verticalAlign:'top'}} className="float-right btn btn-default borderrad1 hilangkan"
                                                onClick={this.showPass}>
                                                    <span className={this.state.eyePass}></span>
                                                </button>
                                            </div>
                                            <div style={{color:'red'}}>{this.state.statusLogin}</div><br/>
                                            <button type="submit" onClick={() => this.takeValue(this.refs)} className="btn btn-lg btn-success btn-block btn-sm">Login</button>
                                        </fieldset>
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
  
  export default Login;