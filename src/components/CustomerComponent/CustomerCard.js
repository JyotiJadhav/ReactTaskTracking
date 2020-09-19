import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import CustomerListComponent from '../CustomerComponent/CustomerListComponent/CustomerList';
import CustomerStats from '../CustomerComponent/CustomerStatisticsComponent/CustomerStatistics';

class CustomerCard extends Component {

    componentDidMount() {
        this._isMounted = true;
        this.props.onFetchCustomerNames();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    render() {
       
        return (
            <div className="row">
                <h1> Test {this.props.custName}</h1>
                <div className="split-card border-w1 box-shadow-4p-8p">
                    <CustomerListComponent customers={this.props.customers}
                        isData={this.props.isData} customer={this.props.custName}></CustomerListComponent>
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
const mapStateToProps = state => {
    return {
        customers: state.customer.customers,
        isData: state.customer.isData,
        custName: state.customer.custName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCustomerNames: () => dispatch(actions.fetchCustomerNames()),
        onFetchCustomerDetailsByName: (custName) => dispatch(actions.fetchCustomerDetailsByName(custName))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CustomerCard);



