import React, { Component } from 'react';
import CustomerCard from '../CustomerComponent/CustomerCard'

class Dashboard extends Component {
    render() {
        return (
            <div className="padding-left-10 padding-right-10 height-1000p">
                <h1 className="padding-2">Team Transformers</h1>
                <CustomerCard></CustomerCard>
                {/* <CustomNavbar></CustomNavbar> */}
            </div>
        )
    }

}

export default Dashboard;
