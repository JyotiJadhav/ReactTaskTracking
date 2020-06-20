import React, { Component } from 'react';
import Carrier from '../CarrierTaskComponent/Carrier'
import Task from '../CarrierTaskComponent/Task'
import Progress from '../TaskProgressComponent/Progress'
import Overview from '../OverviewComponent/Overview'
import Header from '../CustomerListComponent/Header'

class CustomerStats extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="column">
                    <Carrier></Carrier>
                    <div className="vertical-line-150p float-right padding-right-238p"></div>
                    <Task></Task>
                </div>
                <div className="column">
                    <hr className="black-hr-90">
                    </hr>
                </div>
                <div className="column padding-top-10p">
                    <Progress></Progress>
                </div>
                <div className="column padding-top-10p">
                    <Progress></Progress>
                </div>
                <div className="column">
                    <Overview></Overview>
                </div>
            </div>
        )
    }
}

export default CustomerStats;

