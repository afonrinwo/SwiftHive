import React, { Component } from 'react';

export class MerchantCreation extends Component {

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
                <h2 className="text-center text-primary P-2 ">Merchant Creation Form</h2>
                <div className="Login" >
                    <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <input
                                className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                placeholder="Enter your Business Name"
                                name="businessName"
                                type="text"
                                value={this.businessName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <input
                                className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                placeholder="Enter User Name"
                                name="userName"
                                type="text"
                                value={this.userName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <div className="form-group p-3 w-50 m-0 text-primary float-left">
                                <input
                                    className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                    placeholder="Enter First Name"
                                    name="firstName"
                                    type="text"
                                    value={this.firstName}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group p-3 w-50 m-0 text-primary float-right">
                                <input
                                    className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                    placeholder="Enter Last Name"
                                    name="lastName"
                                    type="text"
                                    value={this.lastName}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <div className="form-group p-3 w-50 m-0 text-primary float-left">
                                <input
                                    className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                    placeholder="Enter Email"
                                    name="email"
                                    type="text"
                                    value={this.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group p-3 w-50 m-0 text-primary float-right">
                                <input
                                    className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                    placeholder="Enter Mobile Number"
                                    name="mobileNumber"
                                    type="text"
                                    value={this.mobileNumber}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="form-group p-3 w-100 m-0 text-primary">
                            <input
                                className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                placeholder="Enter Business Address"
                                name="businessAddress"
                                type="text"
                                value={this.businessAddress}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group py-xl-0 w-100 text-primary">
                            <h6>Kindly upload the following documents: </h6>
                        </div>
                        <div className="form-group w-100 text-primary">
                            <div className="form-group w-30 float-left">
                                <label className="form-control w-100 text-left text-primary">Utility Bill</label>
                            </div>
                            <div className="form-group w-70 text-primary float-right font-smaller">
                                <input
                                    className="form-control text-center text-primary "
                                    accept=".png,.jpg,.jpeg"
                                    name="utillityBill"
                                    type="file"
                                    value={this.utillityBill}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className = "clearfix" />
                        <div className="form-group w-100 text-primary">
                            <div className="form-group w-30 float-left">
                                <label className="form-control w-100 text-left text-primary">Identity Card</label>
                            </div>
                            <div className="form-group w-70 m-0 text-primary float-right">
                                <input
                                    className="form-control text-center text-primary"
                                    accept=".png,.jpg,.jpeg"
                                    name="identityCard"
                                    type="file"
                                    value={this.identityCard}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="form-group w-100 text-primary">
                            <div className="form-group w-30 float-left">
                                <label className="form-control w-100 text-left text-primary ">Passport Photo</label>
                            </div>
                            <div className="form-group w-70 text-primary float-right ">
                                <input
                                    className="form-control text-center text-primary"
                                    accept=".png,.jpg,.jpeg"
                                    name="passportPhoto"
                                    type="file"
                                    value={this.passportPhoto}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="form-group w-100 text-primary">
                            <div className="form-group w-30 float-left">
                                <label className="form-control w-100 text-left text-primary ">Others 1</label>
                            </div>
                            <div className="form-group w-70 text-primary float-right ">
                                <input
                                    className="form-control text-center text-primary"
                                    accept=".png,.jpg,.jpeg"
                                    name="othersOne"
                                    type="file"
                                    value={this.othersOne}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="form-group w-100 text-primary">
                            <div className="form-group w-30 float-left">
                                <label className="form-control w-100 text-left text-primary ">Others 2</label>
                            </div>
                            <div className="form-group w-70 text-primary float-right ">
                                <input
                                    className="form-control text-center text-primary"
                                    accept=".png,.jpg,.jpeg"
                                    name="othersTwo"
                                    type="file"
                                    value={this.othersTwo}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="form-group w-100 text-primary">
                            <div className="form-group w-30 float-left">
                                <label className="form-control w-100 text-left text-primary ">Others 3</label>
                            </div>
                            <div className="form-group w-70 text-primary float-right ">
                                <input
                                    className="form-control text-center text-primary"
                                    accept=".png,.jpg,.jpeg"
                                    name="othersThree"
                                    type="file"
                                    value={this.othersThree}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="form-group p-3 w-100 m-0">
                            <div className="px-5 py-3 float-left">
                                <button className="btn btn-dark"
                                    type="button"
                                    onClick={this.cancelAction}>Cancel</button>
                            </div>
                            <div className="px-5 py-3 float-right">
                                <button className="btn btn-primary"
                                    type="button"
                                    disabled={this.disableSubmit()}>Create Merchant</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}
export default MerchantCreation;