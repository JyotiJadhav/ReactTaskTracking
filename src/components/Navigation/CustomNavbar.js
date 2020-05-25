import React, { Component } from 'react';
import classes from '../Navigation/CustomerNavbar.css';
import CustomerCard from '../CustomerComponent/CustomerCard'


class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <div>
                <ul className="sidenav">
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
                </div>
                <div className="content">
                <CustomerCard></CustomerCard>
                </div>
            </div>
        )
    }
}
export default CustomNavbar;


