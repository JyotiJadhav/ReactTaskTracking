import * as actionTypes from '../../store/actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    customers: [],
    customerDetails:{
        totalCarrier: 0,
        totalTasks: 0,
        totalDevelopmentTasks: 0,
        totalOtherTasks:0,
        incompleteDevTasks:0,
        incompleteOtherTasks:0
    },
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

const fetchCustomersDetailsByNameSuccess = ( state, action ) => {
    console.log("in fetchCustomersDetailsByNameSuccess");
    console.log(action);
    return updateObject( state, {
        customers: state.customers,
        customerDetails: action.customers,
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
        case actionTypes.GET_CUSTOMER_DETAILS_BY_NAME: return fetchCustomersDetailsByNameSuccess( state, action );

        default: return state;
    }
};

export default reducer;