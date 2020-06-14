import React, { Component } from 'react';
import Axios from 'axios';
import LogHandler from '../../LogHandler';
import DateUtility from '../../DateUtility';

export class CreateRole extends Component {

    constructor() {
        super()
        this.state = {
            roleName: "",
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
        if (this.state.roleName === "") {
            return true;
        } else {
            return false;
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        const { roleName } = this.state
        let clientId = DateUtility("clientId")
        let logTime = DateUtility("logTime")
        let userId = "emmanuel.afonrinwo";
        try {
            Axios.post('http://localhost:7070/swifthivebe/createUserRole',
                { clientId, roleName, userId },
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
                console.log(response);
                if (response.status === 200) {
                    if (response.data.responseCode === "00") {
                        LogHandler("audit", clientId, userId, "CreateRole", "CreateRole : "+ roleName, "Successful", response.data.responseMessage, logTime);
                        window.alert(roleName + " role created successfully.");
                        window.location.href = "/admin/onboarding/createRole";
                    } else {
                        LogHandler("trace", clientId, userId, "CreateRole", "Failed", "CreateRole : " + roleName, response.data.responseMessage, logTime);
                        window.alert(roleName + " role creation Failed: " + response.data.responseMessage);
                        window.location.href = "/admin/onboarding/createRole";
                    }
                }
            }, (error) => {
                    LogHandler("trace", clientId, userId, "CreateRole", "Failed", "CreateRole : " + roleName, error.message, logTime);
                    window.alert(roleName + " role creation Failed. " + error);
                    window.location.href = "/admin/onboarding/createRole";
            });

        } catch (error) {
            LogHandler("trace", clientId, userId, "CreateRole", "Failed", "CreateRole : " + roleName, error.message, logTime);
            window.alert(roleName + " role creation Failed. " + error);
            window.location.href = "/admin/onboarding/createRole";
        }
    }

    render() {
        return (
            <div className="container-fluid m-auto w-50 p-md-5">
                <h2 className="text-center text-primary P-2 ">Role Creation Form</h2>
                <div className="container" >
                    <form id="createRoleForm"  onSubmit={this.handleSubmit}>
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <input
                                className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                placeholder="Enter Role Name"
                                name="roleName"
                                type="text"
                                value={this.roleName}
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
                                    disabled={this.disableSubmit()}>Create Role</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}
export default CreateRole;