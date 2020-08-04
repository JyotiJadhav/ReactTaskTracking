import React from 'react';

const Header = (props) => {
    return (
        <div className="column">
            <h1 className="float-left padding-left-5"><span>{props.title}</span></h1>
            <hr className="blue-hr">
            </hr>
        </div>
    )
}

export default Header;

