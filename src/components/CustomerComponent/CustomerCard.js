import React, { Component } from 'react';
import Home from '../CustomerComponent/home.png'
import classes from './CustomerCard.css';


class CustomerCard extends Component {
    render() {
        return (
            <div className="row">
                <div className="column border-w1 box-shadow">
                    <div className="column2">
                        <h1 className="h1-left"><span className="headline">Customers</span></h1>
                        <hr>
                        </hr>
                    </div>
                    <div className="column2">
                        <button className="button button5">50%</button>
                        <button className="button button5">50%</button>
                        <button className="button button5">50%</button>
                        <button className="button button5">50%</button>

                    </div>
                </div>

                <div className="column border-w1 box-shadow">
                    <h1 className="h1-left"><span className="headline">Project Staticstics</span></h1>
                    <hr>
                    </hr>
                </div>
            </div>

        )
    }
}
export default CustomerCard;


