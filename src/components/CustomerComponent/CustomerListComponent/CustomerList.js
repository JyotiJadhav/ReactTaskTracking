import React, { useState } from 'react';
import Customers from '../CustomerListComponent/Customers';
import Header from '../CustomerListComponent/Header'


const CustomerListComponent = (props) => {
    const [custName, setCustName] = useState('');
    function handleCustomerButtonClick(custName) {
        setCustName(custName);
        console.log(props);
    }
    return (
        <div>
            <Header title='Customers'></Header>
            <div className="column padding-left-5">
                {!props.isData ? <Customers key="All" img="All"
                    onBtnCustomerClick={handleCustomerButtonClick} ></Customers> : null
                }
                {
                    props.customers.map((rec) => {
                        return <Customers
                            key={rec}
                            img={rec}
                            onBtnCustomerClick={handleCustomerButtonClick} />
                    })
                }
            </div>
        </div >
    )

}

export default CustomerListComponent;