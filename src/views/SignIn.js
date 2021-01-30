import React from 'react';
import { Link } from 'react-router-dom'
import './views.css'

class SignIn extends React.Component {

    state = {
        email: '',
        password: ''
    }

    Change = (val) => {
        this.setState({
            [val.target.id]: val.target.value
        })
    }

    Submit = () => {
        //sign in the user here
        console.log('email ' + this.state.email)
        console.log('password ' + this.state.password)
    }

    render() {
        return (
            <div className="container signinBackground">
                <div className="row">
                    <div className="card">
                        <div className="card-content">
                            <h4 className="signinh4">Sign In</h4>
                            <p className="signinp">Sign in here to get started</p>

                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" onChange={this.Change}/>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" onChange={this.Change}/>
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <div className="row">
                                <div className="col s12 center-align">
                                    <button onClick={this.Submit}className="waves-effect waves-light btn signinButton">Sign In</button>
                                </div>
                                <div className="col s12">
                                     <p 
                                        className="signinp"> forgot your <Link style={{color: 'red', textTransform: 'lowercase'}} to="/resetpassword">password?</Link>
                                        or <Link style={{color: 'red', textTransform: 'lowercase'}} to="/signup"> create an account </Link>
                                     </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignIn;