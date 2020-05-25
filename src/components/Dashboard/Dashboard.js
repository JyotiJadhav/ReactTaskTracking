import React, { Component } from 'react';
import classes from './Dashboard.css';
import CustomerCard from '../CustomerComponent/CustomerCard'

class Dashboard extends Component {
    render() {
        return (
            <div class="content">
                <h1 class="padding-10">Team Transformers</h1>
                <CustomerCard></CustomerCard>
                {/* <CustomNavbar></CustomNavbar> */}
            </div>
        )
    }

}

export default Dashboard;
