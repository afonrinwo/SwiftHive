import React, { Component } from 'react';
import Axios from 'axios';
import LogHandler from '../../LogHandler';
import Util from '../../Util';

export class CreateFunction extends Component {

    constructor() {
        super()
        this.state = {
            functionName: "",
            isSuccessful: false
        }

    };

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
        if (this.state.functionName === "") {
            return true;
        } else {
            return false;
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        const { functionName } = this.state
        let clientId = Util("clientId")
        let logTime = Util("logTime")
        let userId = "emmanuel.afonrinwo";
        try {
            Axios.post('http://localhost:7070/swifthivebe/createUserFunction',
                { clientId, functionName, userId },
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
                        LogHandler("audit", clientId, userId, "CreateFunction", "User created function : " + functionName, "Successful", response.data.responseMessage, logTime);
                        window.alert(functionName + " function created successfully.");
                        window.location.href = "/admin/onboarding/createfunction";
                    } else {
                        LogHandler("trace", clientId, userId, "CreateFunction", "User created function : " + functionName, "Failed", response.data.responseMessage, logTime);
                        window.alert(functionName + " function creation Failed: " + response.data.responseMessage);
                        window.location.href = "/admin/onboarding/createfunction";
                    }
                }
            }, (error) => {
                    LogHandler("trace", clientId, userId, "CreateFunction", "User created function : " + functionName, "Failed", error.message, logTime);
                    window.alert(functionName + " function creation Failed. " + error.message );
                    window.location.href = "/admin/onboarding/createfunction";
            });
            
        } catch (error) {
            LogHandler("trace", clientId, userId, "CreateFunction", "User created function : " + functionName, "Failed", error.message, logTime);
            window.alert(functionName + " function creation Failed. " + error.message );
            window.location.href = "/admin/onboarding/createfunction";
        }
        
    }

    render() {
        return (
            <div className="container-fluid m-auto w-50 p-md-5">
                <h2 className="text-center text-primary P-2 ">Function Creation Form</h2>
                <div className="container" >
                    <form id="createFunctionForm" onSubmit={this.handleSubmit}>
                        <div className="form-group p-3 w-100 m-0 text-primary ">
                            <input
                                className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary text-center text-primary"
                                placeholder="Enter Function Name"
                                name="functionName"
                                type="text"
                                value={this.functionName}
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
                                    disabled={this.disableSubmit()}>Create Function</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}
export default CreateFunction;