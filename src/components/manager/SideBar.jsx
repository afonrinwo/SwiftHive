import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import Dashboard from './Dashboard';
import UserCreation from './onboarding/UserCreation';
import CreateFunction from './onboarding/CreateFunction';
import CreateRole from './onboarding/CreateRole';
import MenuCreation from './onboarding/MenuCreation';
import MenuMapping from './onboarding/MenuMapping';
import MerchantCreation from './onboarding/MerchantCreation';
import AuthorisationPendingList from './AuthorisationPendingList'
import Help from './Help';



const SideBar = (props) => {
    return (
        <Router>
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <SideNav
                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                    >
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="admin" >
                            <NavItem eventKey="admin">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Home
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="admin/onboarding">
                                <NavIcon>
                                    <i className="fa fa-fw fa-user-circle" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Onboarding
                                </NavText>
                                <NavItem eventKey="admin/onboarding/createFunction">
                                    <NavText>
                                        Create Function
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="admin/onboarding/createRole">
                                    <NavText>
                                        Create Role
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="admin/onboarding/menuCreation">
                                    <NavText>
                                        Menu Creation
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="admin/onboarding/menuMapping">
                                    <NavText>
                                        Menu Mapping
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="admin/AuthorisationPendingList">
                                    <NavText>
                                        Authorisation Pending List
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="admin/onboarding/userCreation">
                                    <NavText>
                                        User Creation
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="admin/onboarding/merchantCreation">
                                    <NavText>
                                        Merchant Creation
                                    </NavText>
                                </NavItem>
                            </NavItem>
                            <NavItem eventKey="charts">
                                <NavIcon>
                                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Charts
                                </NavText>
                                <NavItem eventKey="charts/linechart">
                                    <NavText>
                                        Line Chart
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="charts/barchart">
                                    <NavText>
                                        Bar Chart
                                    </NavText>
                                </NavItem>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                    <main>
                        <Header />
                        <div className="clearfix" />
                        <Route path="/admin" exact component={props => <Dashboard />} />
                        <Route path="/admin/onboarding/createFunction" component={props => <CreateFunction />} />
                        <Route path="/admin/onboarding/createRole" component={props => <CreateRole />} />
                        <Route path="/admin/onboarding/menuCreation" component={props => <MenuCreation />} />
                        <Route path="/admin/onboarding/menuMapping" component={props => <MenuMapping />} />
                        <Route path="/admin/onboarding/userCreation" component={props => <UserCreation />} />
                        <Route path="/admin/onboarding/merchantCreation" component={props => <MerchantCreation />} />
                        <Route path="/admin/authorisationPendingList" component={props => <AuthorisationPendingList />} />
                        <Route path="/admin/help" component={props => <Help />} />
                    </main>
                </React.Fragment>
            )}
            />
        </Router>
    );
}
export default SideBar;