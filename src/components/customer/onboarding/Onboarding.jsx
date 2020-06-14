import React, { Component } from "react";
import "react-datetime/css/react-datetime.css";
import Modal from "react-modal";
import Steps from "./Steps";

Modal.setAppElement('#root')

class Onboarding extends Component {

    render() {
        return (
            <div className="align-top rounded border border-primary">
                <div className="container-fluid m-auto w-75 p-md-5 ">
                    <h2 className="text-center text-primary ">Onboarding Process</h2>
                    <Steps />
                    <div className="clearfix" />
                </div>
            </div>
        );
    }
}
export default Onboarding;