import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import Home from './Home';
import Login from './Login';
import Onboarding from './onboarding/Onboarding'
import PrivacyPolicy from './support/PrivacyPolicy';
import TermsOfUse from './support/TermsOfUse';
import TermsOfService from './support/TermsOfService';
import HowItWork from './support/HowItWork';
import Help from './support/Help';


function CAccess() {
    return (
        <div className="container-fluid px-5 bg-transparent">
            <div className="m-1 float-right">
                <Header />
            </div>
            <div className="clearfix" />
            <div className="w-100">
                <hr/>
                <Router>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/onboarding" component={Onboarding}></Route>
                    <Route path="/howitwork" component={HowItWork}></Route>
                    <Route path="/help" component={Help}></Route>
                    <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
                    <Route path="/termsofuse" component={TermsOfUse}></Route>
                    <Route path="/termsofservice" component={TermsOfService}></Route>
                </Router>
            </div>
            <div className="clearfix" />
            <Footer />
        </div>
    );
}
export default CAccess;