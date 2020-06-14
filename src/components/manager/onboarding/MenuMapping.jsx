import React, { Component } from 'react';
import Axios from "axios";
import LogHandler from '../../LogHandler';
import Util from '../../Util';

export class MenuMapping extends Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            userFunctions: [],
            userRoles: [],
            userMenus: [],
            selectedMenu: ""
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

    handleCheckBoxChange = event => {
        event.preventDefault()
        let userMenu = this.state.selectedMenu;
        userMenu = userMenu.concat("|" + event.target.value)
        this.setState({
            selectedMenu: userMenu
        });

    }

    componentDidMount() {
        let today = new Date();
        let currentDateTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        let clientIdStr = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds() + "-" + today.getMilliseconds();
        let clientId = clientIdStr.replace(/-/g, '');
        try {
            Axios
                .get('http://localhost:7070/swifthivebe/listUserFunction')
                .then(response => {
                    this.setState({ userFunctions: response.data });
                }, (error) => {
                        LogHandler("trace", clientId, "MenuMapping", error, currentDateTime);
                    window.alert("The System Encountered " + error);
                    window.location.href = "/admin/onboarding/menuMapping";
                });

            Axios
                .get('http://localhost:7070/swifthivebe/listUserRole')
                .then(response => {
                    this.setState({ userRoles: response.data });
                }, (error) => {
                        LogHandler("trace", clientId, "MenuMapping", error, currentDateTime);
                    window.alert("The System Encountered " + error);
                    window.location.href = "/admin/onboarding/menuMapping";
                });

            Axios
                .get('http://localhost:7070/swifthivebe/listUserMenu')
                .then(response => {
                    this.setState({ userMenus: response.data });
                }, (error) => {
                        LogHandler("trace", clientId, "MenuMapping", error, currentDateTime);
                    window.alert("The System Encountered " + error);
                    window.location.href = "/admin/onboarding/menuMapping";
                });


        } catch (error) {
            LogHandler("trace", clientId, "MenuMapping", error, currentDateTime);
            window.alert("The System Encountered " + error);
            window.location.href = "/admin/onboarding/menuMapping";
        }
    }


    handleSubmit = event => {
        event.preventDefault()
        let selectedMenuList = this.state.selectedMenu.substring(1);
        const { functionName, roleName } = this.state
        let today = new Date();
        let currentDateTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        let clientIdStr = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds() + "-" + today.getMilliseconds();
        let clientId = clientIdStr.replace(/-/g, '');
        let userId = "emmanuel.afonrinwo";
        try {
            Axios.post('http://localhost:7070/swifthivebe/menuMapping',
                { clientId, functionName, roleName, selectedMenuList, userId },
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
                        LogHandler("audit", clientId, "MenuMapping", response.data.responseMessage, currentDateTime);
                        window.alert("Menu Mapping was done successfully.");
                        window.location.href = "/admin/onboarding/menuMapping";
                    } else {
                        LogHandler("trace", clientId, "MenuMapping", response.data.responseMessage, currentDateTime);
                        window.alert("Menu Mapping Failed: " + response.data.responseMessage);
                        window.location.href = "/admin/onboarding/menuMapping";
                    }
                }
            }, (error) => {
                LogHandler("trace", clientId, "MenuMapping", error, currentDateTime);
                window.alert("Menu Mapping Failed. " + error);
                window.location.href = "/admin/onboarding/menuMapping";
            });

        } catch (error) {
            LogHandler("trace", clientId, "MenuMapping", error, currentDateTime);
            window.alert("Menu Mapping Failed. " + error);
            window.location.href = "/admin/onboarding/menuMapping";
        }
    }

    render() {
        const { userFunctions, userRoles, userMenus } = this.state;
        let userFunctionList = userFunctions.map(functionItem => {
            return (
                <option className="text-primary" key={functionItem.uniqueId} value={functionItem.functionName}>{functionItem.functionName}</option>
            )
        });

        let userRoleList = userRoles.map(roleItem => {
            return (
                <option className="text-primary" key={roleItem.uniqueId} value={roleItem.roleName}>{roleItem.roleName}</option>
            )
        });

        let userMenuList = userMenus.map(element => {
            return (
                <div key={element.uniqueId}>
                    <div className="clearfix" />
                    <div className="m-auto w-75">
                        <label className="form-control float-left w-25 text-center">{element.uniqueId}</label>
                        <label className="form-control float-left w-50" >{element.menuName}</label>
                        <input className="form-control float-left w-25 text-primary"
                            type="checkbox"
                            name={element.menuName}
                            value={element.uniqueId}
                            onChange={this.handleCheckBoxChange}
                        />
                    </div>
                </div>
            )
        });

        return (
            <div className="container-fluid m-auto w-75 p-md-5">
                <h2 className="text-center text-primary P-2 ">Menu Mapping Form</h2>
                <div className="container w-75" >
                    <form onSubmit={this.handleSubmit} >
                        <div className="form-group p-3 w-100 text-primary ">
                            <div className="form-group p-3 w-50 m-0 text-primary float-left" >
                                <select
                                    className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary"
                                    type="text"
                                    name="functionName"
                                    onChange={this.handleChange}
                                >
                                    <option key={0} value=""> Select Function</option>
                                    {userFunctionList}
                                </select>
                            </div>
                            <div className="form-group p-3 w-50 m-0 text-primary float-right">
                                <select
                                    className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary"
                                    type="text"
                                    name="roleName"
                                    onChange={this.handleChange}
                                >
                                    <option key={0} value=""> Select Role</option>
                                    {userRoleList}
                                </select>
                            </div>
                        </div>
                        <div className="form-group p-3 w-100 text-primary">
                            {userMenuList}
                        </div>
                        <div className="clearfix" />
                        <div className="form-group p-3 w-100 m-0">
                            <div className="form-group px-5 py-3 float-left">
                                <button className="btn btn-dark"
                                    type="button"
                                    onClick={this.cancelAction}>Cancel</button>
                            </div>
                            <div className="form-group px-5 py-3 float-right">
                                <button className="btn btn-primary"
                                    type="submit">Map Menu</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}
export default MenuMapping;