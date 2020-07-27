import React, { Component } from 'react';
import Customers from '../CustomerListComponent/Customers';
import Header from '../CustomerListComponent/Header'
import axios from '../../../axios';
class CustomerListComponent extends Component {
    state = {
        records: [],
        error: false,
        isData: false
    };
    componentDidMount() {
        this._isMounted = true;
        axios.get('/appq9BLeoiuwulpnF/tblZgIlcviq1cCply?fields%5B%5D=Customer')
            .then(response => {
                const record = response.data;
                const uniqueArr = [...new Set(record.records.map(data => data.fields.Customer))];
                console.log(record);
                if (this._isMounted) {
                    this.setState({ records: uniqueArr, isData: true });
                }
            })
            .catch(error => {
                this.setState({ error: true })
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const isData = this.state.isData;
        let custmorComponent = null;
        if (isData) {
            custmorComponent = (
                <div className="column padding-left-5">
                    {
                        this.state.records.map((rec) => {
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
                <Header></Header>
                {custmorComponent}
            </div >
        )
    }
}

export default CustomerListComponent;

