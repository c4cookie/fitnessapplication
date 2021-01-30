import React from 'react';
import { Link } from 'react-router-dom'
import './views.css'

class SignUp extends React.Component {
   
    state = {
        email: '',
        password: '',
        confirmpassword: '',
        firstname: '',
        lastname: '',
        fitnesspalusername: ''
    }

    Change = (val) => {
        this.setState({
            [val.target.id]: val.target.value
        })
    }

    Submit = () => {
        //sign up the user here
        console.log(this.state)
    }

    render() {
        return (
            <div className="container signinBackground">
                <div className="row">
                    <div className="card">
                        <div className="card-content">
                            <h4 className="signinh4">Sign Up</h4>
                            <p className="signinp">Sign up here to get started</p>

                            <div className="row">

                                <div className="input-field col s12">
                                    <input id="firstname" type="text" className="validate" onChange={this.Change}/>
                                    <label htmlFor="firstname">First name</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="lastname" type="text" className="validate" onChange={this.Change}/>
                                    <label htmlFor="lastname">Last name</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="fitnesspalusername" type="text" className="validate" onChange={this.Change}/>
                                    <label htmlFor="fitnesspalusername">Myfitnesspal username</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" onChange={this.Change}/>
                                    <label htmlFor="email">Email</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" onChange={this.Change}/>
                                    <label htmlFor="password">Password</label>
                                </div>

                                <div className="input-field col s12">
                                    <input id="confirmpassword" type="password" className="validate" onChange={this.Change}/>
                                    <label htmlFor="confirmpassword">Confirm password</label>
                                </div>

                            </div>
                        </div>
                        <div className="card-action">
                            <div className="row">
                                <div className="col s12 center-align">
                                    <button onClick={this.Submit}className="waves-effect waves-light btn signinButton">Sign Up</button>
                                </div>
                                <div className="col s12">
                                     <p 
                                        className="signinp"> already have an account?
                                        <Link style={{color: 'red', textTransform: 'lowercase'}} to="/signin"> sign in here </Link>
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
export default SignUp;