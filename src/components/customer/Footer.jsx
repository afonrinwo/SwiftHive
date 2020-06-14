import React from "react";

function Footer() {
    return (
        <footer className="container-fluid p4 text-black-75 rounded">
            <div className="m-auto w-100">
                <div className="float-left bg-white text-primary ">SwiftHive Inc. @ 2019</div>
                <div className="float-right text-center m-3">
                    <link href="#top" className="fa fa-twitter text-primary" /></div>
                <div className="float-right text-center m-3">
                    <link href="#top" className="fa fa-google text-danger" /></div>
                <div className="float-right text-center m-3">
                    <link href="#top" className="fa fa-linkedin text-primary" /></div>
                <div className="float-right text-center m-3">
                    <link href="#top" className="fa fa-skype text-primary" /></div>
                <div className="float-right text-center m-3">
                    <link href="#top" className="fa fa-yahoo purple-text" /></div>
                <div className="clearfix" />
            </div>
        </footer>
    );
}
export default Footer;