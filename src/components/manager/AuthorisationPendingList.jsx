import React, { Component } from 'react';
import Axios from "axios";
import LogHandler from '../LogHandler';

export class AuthorisationPendingList extends Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            userFunctionsAPL: [],
            userRolesAPL: [],
            userMenusAPL: [],
            userMenuMappingsAPL: []
        };
    }



    componentDidMount() {
        let today = new Date();
        let clientIdStr = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds() + "-" + today.getMilliseconds();
        let clientId = clientIdStr.replace(/-/g, '');
        try {
            Axios
                .get('http://localhost:7070/swifthivebe/listUserFunctionAPL')
                .then(response => {
                    this.setState({ userFunctionsAPL: response.data });
                }, (error) => {
                    LogHandler("trace", clientId, "AuthorisationPendingList", error, clientIdStr);
                    window.alert("The System Encountered " + error);
                    window.location.href = "/admin/AuthorisationPendingList";
                });

            Axios
                .get('http://localhost:7070/swifthivebe/listUserRoleAPL')
                .then(response => {
                    this.setState({ userRolesAPL: response.data });
                }, (error) => {
                    LogHandler("trace", clientId, "AuthorisationPendingList", error, clientIdStr);
                    window.alert("The System Encountered " + error);
                    window.location.href = "/admin/AuthorisationPendingList";
                });

            Axios
                .get('http://localhost:7070/swifthivebe/listUserMenuAPL')
                .then(response => {
                    this.setState({ userMenusAPL: response.data });
                }, (error) => {
                    LogHandler("trace", clientId, "AuthorisationPendingList", error, clientIdStr);
                    window.alert("The System Encountered " + error);
                    window.location.href = "/admin/AuthorisationPendingList";
                });

            Axios
                .get('http://localhost:7070/swifthivebe/listMenuMappingAPL')
                .then(response => {
                    this.setState({ userMenuMappingsAPL: response.data });
                }, (error) => {
                    LogHandler("trace", clientId, "AuthorisationPendingList", error, clientIdStr);
                    window.alert("The System Encountered " + error);
                    window.location.href = "/admin/AuthorisationPendingList";
                });


        } catch (error) {
            LogHandler("trace", clientId, "AuthorisationPendingList", error, clientIdStr);
            window.alert("The System Encountered " + error);
            window.location.href = "/admin/AuthorisationPendingList";
        }
    }

    render() {
        const { userFunctionsAPL, userRolesAPL, userMenusAPL, userMenuMappingsAPL } = this.state;

        let userFunctionAPList = userFunctionsAPL.map(element => {
            return (
                <div key={element.uniqueId}>
                    <div className="clearfix" />
                    <div className="m-auto w-75">
                        <label className="form-control float-left w-25 text-center">{element.uniqueId}</label>
                        <label className="form-control float-left w-50" >{element.functionName}</label>
                        <input className="form-control float-left w-25 text-primary"
                            type="text"
                            name={element.functionName}
                            value={element.uniqueId}
                            onChange={this.handleCheckBoxChange}
                        />
                        <button name="Approved" />
                        <button name="Declined" />
                    </div>
                </div>
            )
        });

        let userRoleAPList = userRolesAPL.map(element => {
            return (
                <div key={element.uniqueId}>
                    <div className="clearfix" />
                    <div className="m-auto w-75">
                        <label className="form-control float-left w-25 text-center">{element.uniqueId}</label>
                        <label className="form-control float-left w-50" >{element.roleName}</label>
                        <input className="form-control float-left w-25 text-primary"
                            type="text"
                            name={element.roleName}
                            value={element.uniqueId}
                            onChange={this.handleCheckBoxChange}
                        />
                        <button name="Approved" />
                        <button name="Declined" />
                    </div>
                </div>
            )
        });

        let userMenuAPList = userMenusAPL.map(element => {
            return (
                <div key={element.uniqueId}>
                    <div className="clearfix" />
                    <div className="m-auto w-75">
                        <label className="form-control float-left w-25 text-center">{element.uniqueId}</label>
                        <label className="form-control float-left w-50" >{element.menuName}</label>
                        <input className="form-control float-left w-25 text-primary"
                            type="text"
                            name={element.menuName}
                            value={element.uniqueId}
                            onChange={this.handleCheckChange}
                        />
                        <button name="Approved" />
                        <button name="Declined" />
                    </div>
                </div>
            )
        });

        let userMenuMappingAPList = userMenuMappingsAPL.map(element => {
            return (
                <div key={element.uniqueId}>
                    <div className="clearfix" />
                    <div className="m-auto w-75">
                        <label className="form-control float-left w-25 text-center">{element.uniqueId}</label>
                        <label className="form-control float-left w-50" >{element.menuName}</label>
                        <input className="form-control float-left w-25 text-primary"
                            type="text"
                            name={element.menuName}
                            value={element.uniqueId}
                            onChange={this.handleCheckBoxChange}
                        />
                        <button name = "Approved" />
                        <button name = "Declined" />
                    </div>
                </div>
            )
        });

        return (
            <div className="container-fluid m-auto w-100 p-md-5">
                <h2 className="text-center text-primary P-2 ">Authorisation Pending List</h2>
                {userFunctionAPList}
                {userRoleAPList}
                {userMenuAPList}
                {userMenuMappingAPList}
            </div>
        );
    }
}

export default AuthorisationPendingList;