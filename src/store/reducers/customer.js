import * as actionTypes from '../../store/actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    customers: [],
    isData: false
}

const fetchCustomersStart = ( state, action ) => {
    return updateObject( state, { isData: true } );
};

const fetchCustomersSuccess = ( state, action ) => {
    return updateObject( state, {
        customers: action.customers,
        isData: false
    } );
};

const fetchCustomersFail = ( state, action ) => {
    return updateObject( state, { isData: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_CUSTOMERS_START: return fetchCustomersStart( state, action );
        case actionTypes.FETCH_CUSTOMERS_SUCCESS: return fetchCustomersSuccess( state, action );
        case actionTypes.FETCH_CUSTOMERS_FAIL: return fetchCustomersFail( state, action );
        default: return state;
    }
};

export default reducer;