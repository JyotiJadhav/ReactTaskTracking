import React, { Component } from 'react';
import CustomerCard from '../CustomerComponent/CustomerCard'

class Dashboard extends Component {
    render() {
        return (
            <div className="content">
                <h1 className="padding-10">Team Transformers</h1>
                <CustomerCard></CustomerCard>
                {/* <CustomNavbar></CustomNavbar> */}
            </div>
        )
    }

}

export default Dashboard;
