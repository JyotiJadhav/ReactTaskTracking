import React from 'react';
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const Customers = (props) => {


    return (
        <button className="button button-full-round box-shadow-4p-8p background-whitesmoke">
            <img src={require(`../../../img/${props.img}.png`)} alt={props.img}></img>
        </button>
    )
};

export default Customers;