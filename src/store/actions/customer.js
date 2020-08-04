import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const fetchCustomersStart = () => {
    return {
        type: actionTypes.FETCH_CUSTOMERS_START
    };
};
export const fetchCustomerNames = () => {
    return dispatch => {
        dispatch(fetchCustomersStart());
        axios.get( '/appq9BLeoiuwulpnF/tblZgIlcviq1cCply?fields%5B%5D=Customer')
            .then( res => {
                const record = res.data;
                const customers = [...new Set(record.records.map(data => data.fields.Customer))];
                console.log(customers);
                // if (this._isMounted) {
                    // this.setState({ records: uniqueArr, isData: true });
                dispatch(fetchCustomersSuccess(customers));
            } )
            .catch( err => {
                dispatch(fetchCustomersFail(err));
            } );
    };
};

export const fetchCustomersSuccess = ( customers ) => {
    return {
        type: actionTypes.FETCH_CUSTOMERS_SUCCESS,
        customers: customers
    };
};


export const fetchCustomersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_CUSTOMERS_FAIL,
        error: error
    };
};