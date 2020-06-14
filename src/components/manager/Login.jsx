import React, { Component } from "react";
//import axios from "axios";

export class Login extends Component {

    constructor() {
        super()
        this.state = {
            mobileNumber: "",
            setMobileNumber: "",
            pin: ""

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
        if (this.state.mobileNumber === "" || this.state.pin === "") {
            return true;
        } else {
            return false;
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        const { mobileNumber } = this.state
        alert('The value is: ' + mobileNumber);
    }

    render() {
        return (
            <div className="container-fluid m-auto w-50 p-md-5">
                <h2 className="text-center text-primary P-2 ">Login Form</h2>
                <div className="Login" >
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <input
                                className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                    placeholder="Enter your Mobile Number"
                                    name="mobileNumber"
                                    type="text"
                                    value={this.mobileNumber}
                                    onChange={this.handleChange}
                                    autoFocus
                                />
                        </div>
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <input
                                className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                placeholder="Enter your Secret Pin"
                                name="pin"
                                type="password"
                                value={this.pin}
                                onChange={this.handleChange}
                            />
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
                                    disabled={this.disableSubmit()}>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}
export default Login;