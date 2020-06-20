import React, { Component } from 'react';
import CustomerListComponent from '../CustomerComponent/CustomerListComponent/CustomerList';
import CustomerStats from '../CustomerComponent/CustomerStatisticsComponent/CustomerStatistics';    

class CustomerCard extends Component {
    render() {
        return (
            <div className="row">
                <div className="split-card border-w1 box-shadow-4p-8p">
                    <CustomerListComponent></CustomerListComponent>
                </div>
                <div className="float-left">
                    <div className="vertical-line-460p"></div>
                </div>
                <div className="split-card border-w1 box-shadow-4p-8p">
                    <CustomerStats></CustomerStats>
                </div>
            </div>
        )
    }
}
export default CustomerCard;


