import React, { useState , Component} from 'react';
import Customers from '../CustomerListComponent/Customers';
import Header from '../CustomerListComponent/Header'
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const CustomerListComponent = (props) => {
    const [custName, setCustName] = useState('');
    function handleCustomerButtonClick(custName) {
        props.onClickCustomer(custName);
    }
    return (
        <div>
            <Header title='Customers'></Header>
            <div className="column padding-left-5">
                {!props.isData ? <Customers key="All" img="All"
                    onBtnCustomerClick={handleCustomerButtonClick} ></Customers> : null
                }
                {
                    props.customers.map((rec) => {
                        return <Customers
                            key={rec}
                            img={rec}
                            onBtnCustomerClick={handleCustomerButtonClick} />
                    })
                }
            </div>
        </div >
    )

}

const mapStateToProps = state => {
    return {
        
        customerDeatils: state.customer.customerDeatils
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onClickCustomer: (custName) => dispatch(actions.fetchCustomerDetailsByName(custName))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CustomerListComponent);
