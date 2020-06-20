import React, { Component } from 'react';
import Customers from '../CustomerListComponent/Customers';
import Header from '../CustomerListComponent/Header'

class CustomerListComponent extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Customers></Customers>
            </div>
        )
    }
}

export default CustomerListComponent;

