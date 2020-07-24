import React, { Component } from 'react';
import Axios from "axios";
import LogHandler from '../../LogHandler';
import Util from '../../Util';

export class MenuCreation extends Component {

    constructor() {
        super()
        this.state = {
            menuName: "",
            isSuccessful: false
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
        if (this.state.menuName === "") {
            return true;
        } else {
            return false;
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        const { menuName } = this.state
        let clientId = Util("clientId")
        let logTime = Util("logTime")
        let userId = "emmanuel.afonrinwo";
        try {
            Axios.post('http://localhost:7070/swifthivebe/createUserMenu',
                { clientId, menuName, userId },
                {
                    auth: {
                        'username': 'test',
                        'password': 'test'
                    }
                },
                {
                    headers:
                    {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            ).then((response) => {
                if (response.status === 200) {
                    if (response.data.responseCode === "00") {
                        LogHandler("audit", clientId, userId, "MenuCreation", "User created menu : " + menuName, "Successful", response.data.responseMessage, logTime);
                        window.alert(menuName + " menu created successfully.");
                        window.location.href = "/admin/onboarding/menuCreation";
                    } else {
                        LogHandler("trace", clientId, userId, "MenuCreation", "User created menu : " + menuName, "Failed", response.data.responseMessage, logTime);
                        window.alert(menuName + " role creation Failed: " + response.data.responseMessage);
                        window.location.href = "/admin/onboarding/menuCreation";
                    }
                }
            }, (error) => {
                    LogHandler("trace", clientId, userId, "MenuCreation", "User created menu : " + menuName, "Failed", error.message, logTime);
                    window.alert(menuName + " role creation Failed. " + error);
                    window.location.href = "/admin/onboarding/menuCreation";
            });

        } catch (error) {
            LogHandler("trace", clientId, userId, "MenuCreation", "User created menu : " + menuName, "Failed", error.message, logTime);
            window.alert(menuName + " role creation Failed. " + error);
            window.location.href = "/admin/onboarding/menuCreation";
        }
    }

    render() {
        return (
            <div className="container-fluid m-auto w-50 p-md-5">
                <h2 className="text-center text-primary P-2 ">Menu Creation Form</h2>
                <div className="container" >
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <input
                                className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                placeholder="Enter Menu Name"
                                name="menuName"
                                type="text"
                                value={this.menuName}
                                onChange={this.handleChange}
                                autoFocus
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
                                    type="submit"
                                    disabled={this.disableSubmit()}>Create Menu</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}
export default MenuCreation;