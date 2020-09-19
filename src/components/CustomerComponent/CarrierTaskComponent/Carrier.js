import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Carrier extends Component {
    componentDidMount() {
        this._isMounted = true;
        // this.props.onCustomerButtonClick();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <div>
                <span className="padding-top-30p position-absolute padding-left-7 text-color-gray">CARRIER</span>
                <span className="h1-left text-color-dark-sky-blue headline font-size-42p position-absolute"><b>04</b></span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        customers: state.customer.customers,
        isData: state.customer.isData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onCustomerButtonClick: () => dispatch(actions.fetchCarrierStats())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Carrier);
