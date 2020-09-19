import React from 'react';
import * as imgNames from '../../../assets/constants'

//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

export default function Customers(props) {
    function handleClick(event) {
        props.onBtnCustomerClick(event.target.title); // pass any argument to the callback
    }
    return (
        <button className="button button-full-round box-shadow-4p-8p background-whitesmoke outline-none"
            onClick={handleClick} name={props.img}>
            { imgNames.CustomerList.includes(props.img) ?
                <img src={require(`../../../img/${props.img}.png`)}
                    title={props.img} alt={props.img}></img> :
                <img src={require(`../../../img/All.png`)}
                    title={props.img} alt={props.img}></img>

            }
        </button>

    )
};
