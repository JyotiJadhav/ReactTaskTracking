import React, { Component } from 'react';
import home from '../home.png'
class Customers extends Component {
    render() {
        return (
            <div className="column">
                <button className="button button-full-round box-shadow-4p-8p">
                    <img src={home} alt="Avatar"></img>
                </button>
                <button className="button button-full-round box-shadow-4p-8p">
                    <img src={home} alt="Avatar"></img>
                </button>
                <button className="button button-full-round box-shadow-4p-8p">
                    <img src={home} alt="Avatar"></img>
                </button>
                <button className="button button-full-round box-shadow-4p-8p">
                    <img src={home} alt="Avatar"></img>
                </button>
            </div>
        )
    }
}
export default Customers;