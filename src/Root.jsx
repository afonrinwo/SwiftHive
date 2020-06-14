import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CAccess from './components/customer/CAccess';
import AAccess from './components/manager/AAccess';


function Root() {
    return (
        <Router>
            <Route path="/" exact component={CAccess}></Route>
            <Route path="/home" exact component={CAccess}></Route>
            <Route path="/login" component={CAccess}></Route>
            <Route path="/onboarding" component={CAccess}></Route>
            <Route path="/faq" component={CAccess}></Route>
            <Route path="/howitwork" component={CAccess}></Route>
            <Route path="/privacypolicy" component={CAccess}></Route>
            <Route path="/termsofuse" component={CAccess}></Route>
            <Route path="/termsofservice" component={CAccess}></Route>
            <Route path="/help" component={CAccess}></Route>

            <Route path="/admin"  component={AAccess}></Route>
        </Router>
    );
}
export default Root;