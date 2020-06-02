import React, { Component } from 'react';
import classes from './CustomerCard.css';
import home from '../img/home.png'


class CustomerCard extends Component {
    render() {
        return (
            <div className="row">
                <div className="column border-w1 box-shadow">
                    <div className="column2">
                        <h1 className="h1-left"><span className="">Customers</span></h1>
                        <hr className="blue-hr">
                        </hr>
                    </div>
                    <div className="column2">
                        <button className="button button5">
                            <img src={home} alt="Avatar"></img>
                        </button>
                        <button className="button button5">
                            <img src={home} alt="Avatar"></img>
                        </button>
                        <button className="button button5">
                            <img src={home} alt="Avatar"></img>
                        </button>
                        <button className="button button5">
                            <img src={home} alt="Avatar"></img>
                        </button>

                    </div>
                </div>
                <div className="column3">
                    <div className="vl"></div>

                </div>
                <div className="column border-w1 box-shadow">
                    <div className="column2">
                        <h1 className="h1-left"><span className="">Project Staticstics</span></h1>
                        <hr className="blue-hr">
                        </hr>
                    </div>
                    <div className="column2">
                        <div>
                            <span className="headline_left">CARRIER</span>
                            <span className="blue_h1_left"><b>04</b></span>
                        </div>
                        <div className="v2"></div>
                        <div className="float_right">
                            <span className="headline_right">CARRIER</span>
                            <span className="blue_h1_right"><b>04</b></span>
                        </div>
                    </div>
                    <div className="column2">
                        <hr className="black-hr">
                        </hr>
                    </div>
                    {/* <div className="column2">
                        <hr className="black-hr">
                        </hr>
                    </div> */}

                </div>
            </div>

        )
    }
}
export default CustomerCard;


