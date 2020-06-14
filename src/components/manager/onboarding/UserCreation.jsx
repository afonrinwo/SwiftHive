import React, { Component } from 'react';
//import axios from "axios";

export class UserCreation extends Component {

    constructor() {
        super()
        this.state = {
            userName: "", setuserName: "", firstName: "", setFirstName: "",
            lastName: "", setlastName: "", email: "", setEmail: "",
            mobileNumber: "", setMobileNumber: "", functionName: "", setFunctionName: "",
        };
    }

    handleChange = event => {
        event.preventDefault()
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }


    disableSubmit() {
        if (this.state.userName === "") {
            return true;
        } else {
            return false;
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        const { userName } = this.state
        alert('The value is: ' + userName);
    }

    render() {
        return (
            <div className="container-fluid m-auto w-50 p-md-5">
                <h2 className="text-center text-primary P-2 ">Role Creation Form</h2>
                <div className="Login" >
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <input
                                className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                placeholder="Enter User Name"
                                name="userName"
                                type="text"
                                value={this.userName}
                                onChange={this.handleChange}
                                autoFocus
                            />
                        </div>
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <input
                                className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                placeholder="Enter First Name"
                                name="firstName"
                                type="text"
                                value={this.firstName}
                                onChange={this.handleChange}
                                autoFocus
                            />
                        </div>
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <input
                                className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                placeholder="Enter Last Name"
                                name="lastName"
                                type="text"
                                value={this.lastName}
                                onChange={this.handleChange}
                                autoFocus
                            />
                        </div>
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <input
                                className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                placeholder="Enter User Email"
                                name="email"
                                type="text"
                                value={this.email}
                                onChange={this.handleChange}
                                autoFocus
                            />
                        </div>
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <input
                                className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                placeholder="Enter User Mobile Number"
                                name="mobileNumber"
                                type="text"
                                value={this.mobileNumber}
                                onChange={this.handleChange}
                                autoFocus
                            />
                        </div>
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <select
                                className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary"
                                placeholder="Enter Function Name"
                                name="functionName"
                                type="text"
                                onChange={this.handleChange}
                                autoFocus
                            >
                                <option value="" >Select Function</option>
                                <option value="1" >Operation Maker</option>
                                <option value="2" >Operation Checker</option>
                                <option value="3" >Control Maker</option>
                                <option value="3" >Control Checker</option>
                            </select>
                        </div>
                        <div className="form-group p-3 w-100 m-0">
                            <div className="px-5 py-3 float-left">
                                <button className="btn btn-dark"
                                    type="button"
                                    onClick={this.cancelAction}>Cancel</button>
                            </div>
                            <div className="px-5 py-3 float-right">
                                <button className="btn btn-primary"
                                    type="button"
                                    disabled={this.disableSubmit()}>Create User</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}
export default UserCreation;