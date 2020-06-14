import React from 'react';
import { Slide } from 'react-slideshow-image';
import Slide_1 from '../../images/slide_1.jpg';
import Slide_2 from '../../images/slide_2.jpg';
import Slide_3 from '../../images/slide_3.jpg';
import Slide_4 from '../../images/slide_4.jpg';
import Slide_5 from '../../images/slide_5.jpg';

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
/*     onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    } */
}

function Home() {
    return (
        <div className="align-top rounded border border-primary">
            <div className="w-75 float-left">
                <div className="m-auto px-5 py-3 ">
                    <div className="m-auto px-4 " >
                        <div className="float-left rounded-circle border border-primary text-center m-3 p-3">
                            Airtime<br />TopUp</div>
                        <div className="float-left rounded-circle border border-primary text-center m-3 px-4 py-3">
                            Data<br />TopUp</div>
                        <div className="float-left rounded-circle border border-primary text-center m-3 px-4 py-3">
                            Pay<br />&nbsp;Bills&nbsp;</div>
                        <div className="float-left rounded-circle border border-primary text-center m-3 p-3">
                            Fund<br />Transfer</div>
                        <div className="float-left rounded-circle border border-primary text-center m-3 p-3">
                            Savings<br />& Loans</div>
                    </div>
                </div>
                <div className="clearfix" />
                <div className="m-auto py-4" >
                    <Slide {...properties}>
                        <div className="m-auto">
                            <div style={{ 'backgroundImage': `url(${Slide_1})`, width: '750px', height: '333px', margin: 'auto' }}></div>
                        </div>
                        <div>
                            <div style={{ 'backgroundImage': `url(${Slide_2})`, width: '750px', height: '333px', margin: 'auto' }}></div>
                        </div>
                        <div>
                            <div style={{ 'backgroundImage': `url(${Slide_3})`, width: '750px', height: '333px', margin: 'auto' }}></div>
                        </div>
                        <div>
                            <div style={{ 'backgroundImage': `url(${Slide_4})`, width: '750px', height: '333px', margin: 'auto' }}></div>
                        </div>
                        <div>
                            <div style={{ 'backgroundImage': `url(${Slide_5})`, width: '750px', height: '333px', margin: 'auto' }}></div>
                        </div>
                    </Slide>
                </div>
            </div>
            <div className="w-25 py-5 float-right rounded border border-primary" >
                <div className="w-90 px-4">
                    <button className="btn btn-secondary rounded w-100 mx-auto my-1">Quick Link</button>
                    <button className="btn btn-primary rounded w-100 mx-auto my-1">Airtime Top Up</button>
                    <button className="btn btn-warning rounded w-100 mx-auto my-1">Data Subscription</button>
                    <button className="btn btn-primary rounded w-100 mx-auto my-1">Pay TV</button>
                    <button className="btn btn-warning rounded w-100 mx-auto my-1">Electricity</button>
                    <button className="btn btn-primary rounded w-100 mx-auto my-1">Events & Tickets</button>
                    <button className="btn btn-warning rounded w-100 mx-auto my-1">Pension</button>
                    <button className="btn btn-primary rounded w-100 mx-auto my-1">Insurance</button>
                    <button className="btn btn-warning rounded w-100 mx-auto my-1">Fund Transfer</button>
                    <button className="btn btn-primary rounded w-100 mx-auto my-1">Quick Loan</button>
                </div>
            </div>
        </div>
    );
}
export default Home;