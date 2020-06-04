import React, { Component } from 'react';
import home from '../img/home.png';


class CustomerCard extends Component {
    render() {
        return (
            <div className="row">
                <div className="split-card border-w1 box-shadow-4p-8p">
                    <div className="column">
                        <h1 className="float-left padding-left-5"><span className="">Customers</span></h1>
                        <hr className="blue-hr">
                        </hr>
                    </div>
                    <div className="column">
                        <button className="button button-full-round box-shadow-4p-8p">
                            <img src={home} alt="Avatar"></img>
                        </button>
                        <button className="button button-full-round box-shadow-4p-8p">
                            <img src={home} alt="Avatar"></img>
                        </button>
                        <button className="button button-full-round box-shadow-4p-8p">
                            <img src={home} alt="Avatar"></img>
                        </button>
                        <button className="button button-full-round box-shadow-4p-8p">
                            <img src={home} alt="Avatar"></img>
                        </button>

                    </div>
                </div>
                <div className="float-left">
                    <div className="vertical-line-460p"></div>

                </div>
                <div className="split-card border-w1 box-shadow-4p-8p">
                    <div className="column">
                        <h1 className="float-left padding-left-5"><span className="">Project Staticstics</span></h1>
                        <hr className="blue-hr">
                        </hr>
                    </div>
                    <div className="column">
                        <div>
                            <span className="headline-thin padding-top-30p padding-left-80p position-absolute text-color-gray">CARRIER</span>
                            <span className="blue-h1-left"><b>04</b></span>
                        </div>
                        <div className="vertical-line-150p float-right padding-right-238p"></div>
                        <div className="float-right">
                            <span className="headline-thin padding-top-30p padding-left-70p position-absolute text-color-gray">CARRIER</span>
                            <span className="headline-42 padding-top-60p padding-left-90p text-color-dark-sky-blue"><b>04</b></span>
                        </div>
                    </div>
                    <div className="column">
                        <hr className="black-hr-90">
                        </hr>

                    </div>
                    <div className="column padding-top-10p">
                        <span className="margin-25p">Devlopment</span>
                        <span className="progress-bar-progress">2/8</span>

                        <div className="w3-border">
                            <div className="w3-grey" ></div>
                        </div>
                    </div>
                    <div className="column padding-top-10p">
                        <span className="margin-25p">Test</span>
                        <span className="progress-bar-progress">3/8 </span>

                        <div className="w3-border">
                            <div className="w3-grey" ></div>
                        </div>

                    </div>
                    <div className="column">
                        <button class="button-overview box-shadow-8p-16p">Shadow Button</button>
                    </div>
                </div>
            </div>

        )
    }
}
export default CustomerCard;


