import React from 'react';
import './views.css'

class Account extends React.Component {

    state = {
        firstname: 'John',
        lastname: 'smith',
        email: 'johnsmith@gmail.com',
        fitnesspalusername: 'username'
    }

    Change = (val) => {
        this.setState({
            [val.target.id]: val.target.value
        })
    }

    UpdateDetails = () => {
        //update details 
        console.log(this.state);
    }

    render() {


        return (
            <div className="dashboardBackground">
                <div className="card x-large dashboardBackgroundCard">
                    <div className="row">
                        <form className="col s12">

                            <div className="row">
                                <div className="input-field col s6">
                                    <input readOnly disabled id="firstnamedisabled" value={this.state.firstname} type="text" className="validate"/>
                                    <label htmlFor="firstnamedisabled" className="active">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="firstname"  type="text" className="validate" onChange={this.Change}/>
                                    <label htmlFor="firstname" className="active">Edit First Name</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s6">
                                    <input readOnly disabled id="lastnamedisabled" value={this.state.lastname} type="text" className="validate"/>
                                    <label htmlFor="lastnamenamedisabled" className="active">Last Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="lastname"  type="text" className="validate"  onChange={this.Change}/>
                                    <label htmlFor="lastname" className="active">Edit Last Name</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s6">
                                    <input readOnly disabled id="fitnesspalusernamedisabled" value={this.state.fitnesspalusername} type="text" className="validate"/>
                                    <label htmlFor="fitnesspalusernamedisabled" className="active">Myfitnesspal Username</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="fitnesspalusername"  type="text" className="validate"  onChange={this.Change}/>
                                    <label htmlFor="fitnesspalusername" className="active">Edit Username</label>
                                </div>
                            </div>

                            <div className="input-field col s12">
                                    <input readOnly disabled id="emaildisabled" value={this.state.email} type="text" className="validate"/>
                                    <label htmlFor="emaildisabled" className="active">Email</label>
                            </div>

                        </form>

                        <button onClick={this.UpdateDetails} className="waves-effect waves-light btn signinButton">Update Details</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Account;