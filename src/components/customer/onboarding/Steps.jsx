import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import Modal from "react-modal";
import Axios from "axios";
import Base64 from "base-64";
import Utf8 from "utf8";


export class Steps extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            progress: 0,
            currentStep: 1,
            selectedOption: null,
            bankVerificationNumber: "",
            bank: "", accountNumber: "",
            mobileNumber: "", email: "", firstName: '', lastName: '',
            day: "", month: '', year: '', dob: '', residentCity: '', residentState: '', country: '', location: '',
            sPin: "", cPin: '', sTransactionPassword: '', cTransactionPassword: '',
            agreement: '', modalIsOpen: false, isOnboarding: false, isSuccessful: false
        };
        this.openModal = this.openModal.bind(this);
    }

    handleChange = event => {
        event.preventDefault()
        let target = event.target;
        let name = target.name;
        let value;

        switch (target.type) {
            case "checkbox":
                value = target.type === 'checkbox' ? target.value : null;
                break;
            case "radio":
                value = target.type === 'radio' ? target.value : null;
                break;
            default:
                value = target.value;
                break;
        }
        this.setState({
            [name]: value
        });
    }

    _next = () => {
        let alphabetEx = /^[a-zA-Z]+$/
        let numberEx = /^[0-9]+$/
        let emailEx = /\S+@\S+\.\S+/
        let currentStep = this.state.currentStep
        let selectedOption = this.state.selectedOption
        let year = new Date().getFullYear()

        if (currentStep === 1 && selectedOption === null) {
            alert("Please select an option")
        } else if (currentStep === 1 && selectedOption !== null) {
            if (selectedOption === "bvn") {
                currentStep = currentStep + 1
            } else if (selectedOption === "account") {
                currentStep = currentStep + 2
            } else {
                currentStep = currentStep + 3
            }
        } else if (currentStep === 2) {
            if (numberEx.test(this.state.bankVerificationNumber)) {
                currentStep = currentStep + 4
            } else {
                alert("Please enter a valid BVN Number")
            }
        } else if (currentStep === 3) {
            if (this.state.bank === "") {
                alert("Please select Bank")
            } else if (this.state.accountNumber === "") {
                alert("Account Number cannot be empty")
            } else if (numberEx.test(this.state.accountNumber) === false) {
                alert("You have supplied invalid Account Number")
            } else {
                currentStep = currentStep + 3
            }
        } else if (currentStep === 4) {
            if (this.state.mobileNumber === '') {
                alert("Please enter a valid Mobile Number")
            } else if (numberEx.test(this.state.mobileNumber) === false) {
                alert("Mobile Number must be in numbers only")
            } else if (this.state.email === '' || emailEx.test(this.state.email) === false) {
                alert("Please enter a valid Email Address")
            } else if (this.state.firstName === '') {
                alert("Please enter your First Name")
            } else if (alphabetEx.test(this.state.firstName) === false) {
                alert("First Name must be in alphabets only")
            } else if (this.state.lastName === '') {
                alert("Please enter your Last Name")
            } else if (alphabetEx.test(this.state.lastName) === false) {
                alert("Last Name must be in alphabets only")
            } else {
                currentStep = currentStep + 1
            }
        } else if (currentStep === 5) {
            if (this.state.day === '' || !this.state.month === '' || !this.state.year === '') {
                alert("Please enter a valid Day")
            } else if (this.state.day === '' || !numberEx.test(this.state.day)) {
                alert("Day must be in numbers only")
            } else if (0 <= this.state.day && this.state.day >= 31) {
                alert("The date you supplied is out range")
            } else if (!this.state.day === '' || this.state.month === '' || !this.state.year === '') {
                alert("Please enter a valid Month")
            } else if (this.state.month === '' || !numberEx.test(this.state.month)) {
                alert("Month must be in numbers only")
            } else if (0 <= this.state.month && this.state.month > 12) {
                alert("The month you supplied is out range")
            } else if (!this.state.day === '' || !this.state.month === '' || !this.state.year === '') {
                alert("Please enter a valid Year")
            } else if (this.state.year === '' || !numberEx.test(this.state.day)) {
                alert("Year must be in numbers only")
            } else if (!(year - this.state.year >= 15)) {
                alert("You have to be 15 years and above to onboard for the services on this platform")
            } else if (this.state.residentCity === '' || alphabetEx.test(this.state.residentCity) === false) {
                alert("Please enter a valid City")
            } else if (this.state.residentState === '') {
                alert("Please enter your State Residence")
            } else if (this.state.residentState === '' || alphabetEx.test(this.state.residentState) === false) {
                alert("First Name must be in alphabets only")
            } else if (this.state.country === '') {
                alert("Please enter your Country")
            } else if (this.state.country === '' || alphabetEx.test(this.state.country) === false) {
                alert("Country must be in alphabets only")
            } else {
                currentStep = currentStep + 1
            }
        } else if (currentStep === 6) {
            if (this.state.sPin === '') {
                alert("Please enter a valid Pin")
            } else if (numberEx.test(this.state.sPin) === false) {
                alert("Pin must be in numbers only")
            } else if (this.state.cPin === '') {
                alert("Please confirm your pin")
            } else if (this.state.sPin !== this.state.cPin) {
                alert("Your pin does not match")
            } else if (this.state.sTransactionPassword === '') {
                alert("Please enter your Transaction Password")
            } else if (numberEx.test(this.state.sTransactionPassword) === false) {
                alert("Transaction Password must be in numbers only")
            } else if (this.state.cTransactionPassword === '') {
                alert("Please confirm your Transaction Password")
            } else if (this.state.sTransactionPassword !== this.state.cTransactionPassword) {
                alert("Your Transaction password does not match")
            } else {
                currentStep = currentStep + 1
            }
        } else {
            currentStep = currentStep >= 2 ? currentStep + 1 : currentStep >= 3 ? currentStep + 1 : currentStep >= 4 ? currentStep + 1 : currentStep >= 5 ? currentStep + 1 : currentStep >= 6 ? 7 : currentStep + 1
        }

        this.setState({
            currentStep: currentStep,
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        if (currentStep === 1) {
            this.setState({
                currentStep: currentStep,
                selectedOption: null,
            })
        } else {
            this.setState({
                currentStep: currentStep,
            })
        }
    }

    /*
    * the functions for our button
    */
    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <div className="px-5 py-3 float-left">
                    <button className="btn btn-dark" type="button" onClick={this._prev}>
                        Back
                    </button>
                </div>
            )
        }
        return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 7) {
            return (
                <div className="px-5 py-3 float-right">
                    <button className="btn btn-primary" type="button" onClick={this._next} value="Next">
                        Next
                    </button>
                </div>
            )
        }
        return null;
    }

    disableSubmit() {
        if (this.state.agreement === "") {
            return true;
        } else {
            return false;
        }
    }

    openModal = event => {
        event.preventDefault()
        this.setState({ modalIsOpen: true });
    }

    closeModal = event => {
        this.setState({ modalIsOpen: false });
    }

    progress = event => {
        let progress = this.state.currentStep - 1;
        switch (progress) {
            case 1:
                return (<div className="rounded rounded-pill p-2 text-center">
                    <ProgressBar animated now={25} />
                </div>)
            case 2:
                return (<div className="rounded rounded-pill p-2 text-center">
                    <ProgressBar animated now={25} />
                </div>)
            case 3:
                return (<div className="rounded rounded-pill p-2 text-center">
                    <ProgressBar animated now={25} />
                </div>)
            case 4:
                return (<div className="rounded rounded-pill p-2 text-center">
                    <ProgressBar animated now={50} />
                </div>)
            case 5:
                return (<div className="rounded rounded-pill p-2 text-center">
                    <ProgressBar animated now={75} />
                </div>)
            case 6:
                return (
                    <>
                        <div className="rounded rounded-pill p-2 text-center">
                            <ProgressBar animated now={100} />
                        </div>
                    </>)
            default:
                return (<div className="rounded rounded-pill p-2 text-center">
                    <ProgressBar animated now={progress} />
                </div>)
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        const { firstName, lastName, day, month, year, email, residentCity, residentState, country, mobileNumber, sPin, sTransactionPassword } = this.state
        let dob = day + "-" + month + "-" + year;
        let pin = Utf8.encode(Base64.encode(sPin));
        let transactionPassword = Utf8.encode(Base64.encode(sTransactionPassword));
        let today = new Date();
        let requestIdStr = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds() + "-" + today.getMilliseconds();
        let requestId = requestIdStr.replace(/-/g, '')
        Axios.post('http://localhost:7070/vashive/onboarding/',
            { requestId, firstName, lastName, dob, email, residentCity, residentState, country, mobileNumber, pin, transactionPassword },
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
                    this.setState({ isSuccessful: true });
                }
                this.setState({ isOnboarding: true });
            }
        }, (error) => {
            console.log(error);
        });
    }

    nextAction = event => {

        const { firstName } = this.state;
        if (this.state.isSuccessful) {
            alert('Hello ' + firstName + '! On boarding was successfuly, please login to a world of hitch free services!!')
            window.location.href = "/login"
        } else {
            alert('Hello ' + firstName + '! We are not able to onboard you at the the moment, please try again later!!')
           window.location.href = "/onboarding"
        }
    }

    render() {
        if (this.state.isOnboarding) {
            this.nextAction();
        } else {
            return (
                <>
                    {this.progress()}
                    <form onSubmit={this.openModal} >
                        < Step1
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            selectedOption={this.state.selectedOption}
                        />
                        < Step2
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            selectedOption={this.state.bankVerificationNumber}
                        />
                        < Step3
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            accountNumber={this.state.accountNumber}
                            handleChangeOne={this.handleChange}
                            bank={this.state.bank}
                        />
                        < Step4
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            email={this.state.email}
                            handleChangeOne={this.handleChange}
                            mobileNumber={this.state.mobileNumber}
                        />
                        <Step5
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            username={this.state.username}
                        />
                        <Step6
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            handleChangeOne={this.handleChange}
                            mobileNumber={this.state.mobileNumber}
                        />
                        <Step7
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            agreement={this.state.agreement}
                        />
                        {this.previousButton()}
                        {this.nextButton()}
                    </form>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        className="w-50 mx-auto my-5 p-2 bg-light"
                    >
                        <h2 className="modal-title text-center text-primary" ref={subtitle => this.subtitle = subtitle}>Onboarding Form</h2>
                        <div className="form-group w-100 p-2">
                            <form>
                                <div className="form-group p-2 w-25 float-left">
                                    <label>First Name : </label>
                                </div>
                                <div className="form-group p-2 w-75 float-left">
                                    <input className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary" id="firstName" readOnly value={this.state.firstName} />
                                </div>
                                <div className="form-group p-2 w-25 float-left">
                                    <label>Last Name : </label>
                                </div>
                                <div className="form-group p-2 w-75 float-right">
                                    <input className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary" id="lastName" readOnly value={this.state.lastName} />
                                </div>
                                <div className="form-group p-2 w-25 float-left">
                                    <label>Date of Birth : </label>
                                </div>
                                <div className="form-group p-2 w-75 float-right">
                                    <input className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary" id="dob" readOnly value={this.state.day + "-" + this.state.month + "-" + this.state.year} />
                                </div>
                                <div className="form-group p-2 w-25 float-left">
                                    <label>Location : </label>
                                </div>
                                <div className="form-group p-2 w-75 float-right">
                                    <input className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary" id="location" readOnly value={this.state.residentCity + ", " + this.state.residentState + ", " + this.state.country} />
                                </div>
                                <div className="form-group p-2 w-25 float-left">
                                    <label>Email Addresss : </label>
                                </div>
                                <div className="form-group p-2 w-75 float-right">
                                    <input className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary" id="email" readOnly value={this.state.email} />
                                </div>
                                <div className="form-group p-2 w-25 float-left">
                                    <label>Mobile Number : </label>
                                </div>
                                <div className="form-group p-2 w-75 float-right">
                                    <input className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary" id="mobileNumber" readOnly value={this.state.mobileNumber} />
                                </div>
                            </form>
                            <div className="clearfix" />
                            <div className="form-group w-100 m-auto">
                                <div className="p-5 float-left">
                                    <button onClick={this.closeModal} className="btn btn-dark">Cancel</button>
                                </div>
                                <div className="p-5 float-right">
                                    <button onClick={this.handleSubmit} className="btn btn-primary btn-block">Proceed</button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </>
            );
        }
    }
}

function Step1(props) {

    if (props.currentStep !== 1) {
        return null
    }

    return (
        <div>
            <div className="form-group w-100 p-2 text-primary">
                <div className="w-100 float-left p-2">
                    <label >Which of the listed information can you provide?</label>
                </div>
                <div className="w-100 float-left p-2">
                    <div className="float-left w-75 p-2">
                        <label > Bank Verification Number (BVN)</label>
                    </div>
                    <div className="radio float-right w-25" >
                        <input
                            className="form-control"
                            id="selectedOption"
                            name="selectedOption"
                            type="radio"
                            value="bvn"
                            onChange={props.handleChange}
                        />
                    </div>

                    {/* 
                <div className="float-left w-75 p-2">
                    <label> National Identity Number (NIN)</label>
                </div>
                <div className="radio float-right w-25">
                    <input
                        className="form-control"
                        id="nin"
                        name="nin"
                        type="radio"
                        value="nin"
                        onChange={props.handleChange} />
                </div> 
                */}

                    <div className="float-left w-75 p-2">
                        <label> Account Number</label>
                    </div>
                    <div className="radio float-right w-25">
                        <input
                            className="form-control"
                            id="selectedOption"
                            name="selectedOption"
                            type="radio"
                            value="account"
                            onChange={props.handleChange} />
                    </div>
                    <div className="float-left w-75 p-2">
                        <label> None</label>
                    </div>
                    <div className="float-right w-25">
                        <input
                            className="form-control"
                            id="selectedOption"
                            name="selectedOption"
                            type="radio"
                            value="none"
                            onChange={props.handleChange} />
                    </div>
                </div>
            </div>
            <div className="clearfix" />
        </div>
    );
}

function Step2(props) {

    if (props.currentStep !== 2) {
        return null
    }
    return (
        <>
            <div className="form-group py-3 w-75 mx-auto">
                <input
                    className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary "
                    id="bankVerificationNumber"
                    name="bankVerificationNumber"
                    type="number"
                    maxLength="11"
                    placeholder="Enter a Bank Verificaton Number (bvn) "
                    value={props.bankVerificationNumber}
                    onChange={props.handleChange}
                    autoFocus
                />
            </div>
        </>
    );
}

function Step3(props) {

    if (props.currentStep !== 3) {
        return null
    }
    return (
        <>
            <div className="form-group p-2 w-50 float-left">
                <select
                    className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary"
                    id="bank"
                    name="bank"
                    type="text"
                    onChange={props.handleChange}
                    autoFocus
                >
                    <option value="" >Select Bank</option>
                    <option value="063" >Access Diamond</option>
                    <option value="050" >Ecobank</option>
                    <option value="084" >Enterprise	</option>
                    <option value="070" >Fidelity</option>
                    <option value="011" >First Bank</option>
                    <option value="214" >FCMB</option>
                    <option value="058" >GTB</option>
                    <option value="030" >Heritage</option>
                    <option value="301" >Jaiz Bank</option>
                    <option value="082" >Keystone</option>
                    <option value="076" >Polaris Bank</option>
                    <option value="039" >Stanbic IBTC</option>
                    <option value="232" >Sterling</option>
                    <option value="032" >Union Bank</option>
                    <option value="033" >UBA</option>
                    <option value="215" >Unity </option>
                    <option value="035" >WEMA</option>
                    <option value="057" >Zenith</option>
                </select>
            </div>
            <div className="form-group p-2 w-50 float-right">
                <input
                    className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary "
                    id="accountNumber"
                    name="accountNumber"
                    type="number"
                    maxLength="10"
                    placeholder="Enter your Account Number "
                    value={props.accountNumber}
                    onChange={props.handleChange}
                />
            </div>
        </>
    );
}

function Step4(props) {

    if (props.currentStep !== 4) {
        return null
    }

    return (
        <div>
            <div className="form-group p-2 w-50 float-left">
                <input
                    className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary "
                    id="mobileNumber"
                    name="mobileNumber"
                    type="text"
                    placeholder="Enter a Valid Mobile Number "
                    value={props.mobileNumber}
                    onChange={props.handleChange}
                    autoFocus
                />
            </div>
            <div className="form-group p-2 w-50 float-right">
                <input
                    className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter a Valid Email Address"
                    value={props.email}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group p-2 w-50 float-left">
                <input
                    className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary "
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter your First Name"
                    value={props.firstName}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group p-2 w-50 float-right">
                <input
                    className="form-control border m-auto border-top-0 border-right-0 border-left-0 border-primary"
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter your Last Name"
                    value={props.lastName}
                    onChange={props.handleChange}
                />
            </div>
        </div>
    );
}

function Step5(props) {
    if (props.currentStep !== 5) {
        return null
    }
    return (
        <div>
            <div className="form-group ">
                <div className=" p-2 w-50 col-sm-12 float-left">
                    <div className="w-100 text-center pb-2">
                        <label className="m-auto"> Date of Birth</label>
                    </div>
                    <div className="form-control border-0  w-100 pl-5 text-center">
                        <input
                            className="rounded col-3 medium text-center border border-top-0 border-right-0 border-left-0 border-primary"
                            id="day"
                            name="day"
                            type="number"
                            placeholder="dd"
                            maxLength="2"
                            value={props.day}
                            onChange={props.handleChange}
                            fa-align-center="true"
                            autoFocus
                        />
                        <input
                            className="rounded col-3 medium text-center border border-top-0 border-right-0 border-left-0 border-primary"
                            id="month"
                            name="month"
                            type="number"
                            placeholder="mm"
                            maxLength="2"
                            value={props.month}
                            onChange={props.handleChange}
                            align="center"
                        />
                        <input
                            className="rounded col-3 medium  text-center border border-top-0 border-right-0 border-left-0 border-primary"
                            id="year"
                            name="year"
                            type="number"
                            placeholder="yyyy"
                            maxLength="4"
                            value={props.year}
                            onChange={props.handleChange}
                        />
                    </div>
                </div>
                <div className="p-2 w-50 col-sm-12 float-right">
                    <div className="pb-4">
                        <input
                            className="form-control rounded border  text-center m-auto border-top-0 border-right-0 border-left-0 border-primary"
                            id="residentCity"
                            name="residentCity"
                            type="text"
                            placeholder="Enter your City/Town of Residence"
                            value={props.residentCity}
                            onChange={props.handleChange}
                        />
                    </div>
                    <div className="pb-4">
                        <input
                            className="form-control rounded border text-center m-auto border-top-0 border-right-0 border-left-0 border-primary"
                            id="residentState"
                            name="residentState"
                            type="text"
                            placeholder="Enter your State of Residence"
                            value={props.residentState}
                            onChange={props.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            className="form-control rounded border text-center m-auto border-top-0 border-right-0 border-left-0 border-primary"
                            id="country"
                            name="country"
                            type="text"
                            placeholder="Enter your Country of Residence"
                            value={props.country}
                            onChange={props.handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="clearfix" />
        </div>
    );
}

function Step6(props) {

    if (props.currentStep !== 6) {
        return null
    }
    return (
        <div>
            <div className="form-group p-2 w-50 float-left">
                <input
                    className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary"
                    id="sPin"
                    name="sPin"
                    type="password"
                    placeholder="Select 4 digit Secret Pin"
                    maxLength="4"
                    value={props.sPin}
                    onChange={props.handleChange}
                    autoFocus
                />
            </div>
            <div className="form-group p-2 w-50 float-right">
                <input
                    className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary"
                    id="cPin"
                    name="cPin"
                    type="password"
                    placeholder="Confirm 4 digit Secret Pin"
                    maxLength="4"
                    value={props.cPin}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group p-2 w-50 float-left">
                <input
                    className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary"
                    id="sTransactionPassword"
                    name="sTransactionPassword"
                    type="password"
                    placeholder="Enter Secret 6 digits Transaction Password"
                    maxLength="6"
                    value={props.sTransactionPassword}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group p-2 w-50 float-right">
                <input
                    className="form-control rounded border m-auto border-top-0 border-right-0 border-left-0 border-primary"
                    id="cTransactionPassword"
                    name="cTransactionPassword"
                    type="password"
                    placeholder="Confirm Secret Transaction Password"
                    maxLength="6"
                    value={props.cTransactionPassword}
                    onChange={props.handleChange}
                />
            </div>
            <div className="clearfix" />
        </div>
    );
}

function Step7(props) {

    if (props.currentStep !== 7) {
        return null
    }
    return (
        <div>
            <div className="radio float-left w-25 radio my-3" >
                <input
                    className="form-control"
                    id="agreement"
                    name="agreement"
                    type="checkbox"
                    value={props.agreement}
                    onChange={props.handleChange}
                />
            </div>
            <div className="float-right w-75 p-2">
                <label className="text-justify text-primary"> I have read, agree and accept the terms of use and service contained in this support section of this page, I understand it is a prerequisite to using the services available on VASHive platform (Web, Mobile, USSD, Social Media and POS). We advice you visit the suport section regularly to keep up with the amendments as we can make modification to any part when necessary.</label>
            </div>
            <div className="clearfix" />
            <div className="px-5 py-4 float-right">
                <button className="btn btn-primary btn-block" disabled={this.disableSubmit()}>Proceed</button>
            </div>
        </div>
    );
}
export default Steps;