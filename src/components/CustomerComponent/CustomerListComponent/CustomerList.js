import React, { Component } from 'react';
import { connect } from 'react-redux';
import Customers from '../CustomerListComponent/Customers';
import Header from '../CustomerListComponent/Header'
import * as actions from '../../../store/actions/index';
class CustomerListComponent extends Component {
    componentDidMount() {
        this._isMounted = true;

        this.props.onFetchCustomerNames();
        // axios.get('/appq9BLeoiuwulpnF/tblZgIlcviq1cCply?fields%5B%5D=Customer')
        //     .then(response => {
        //         const record = response.data;
        //         const uniqueArr = [...new Set(record.records.map(data => data.fields.Customer))];
        //         console.log(record);
        //         if (this._isMounted) {
        //             this.setState({ records: uniqueArr, isData: true });
        //         }
        //     })
        //     .catch(error => {
        //         this.setState({ error: true })
        //     })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        let custmorComponent = null;
        if (!this.props.isData) {
            custmorComponent = (
                <div className="column padding-left-5">
                    {
                        this.props.customers.map((rec) => {
                            return <Customers
                                key={rec}
                                img={rec} />
                        })
                    }
                </div>
            )
        }
        return (
            <div>
                <Header title='Customers'></Header>
                {custmorComponent}
            </div >
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
        onFetchCustomerNames: () => dispatch(actions.fetchCustomerNames())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CustomerListComponent);


