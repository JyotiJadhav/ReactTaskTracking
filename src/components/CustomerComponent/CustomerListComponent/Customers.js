import React, { Component } from 'react';
import home1 from '../../img/home1.png';
import DGS from '../../img/DGS.png';
import bauhaus from '../../img/bauhaus.png';
import staples1 from '../../img/staples1.png';
import DHL1 from '../../img/DHL1.png';
import tshirt from '../../img/tshirt.png';

// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

class Customers extends Component {
    render() {
        return (
            <div className="column padding-left-5">
                <button className="button button-full-round box-shadow-4p-8p">
                    <img src={home1} alt="Avatar"></img>
                </button>
                <button className="button button-full-round box-shadow-4p-8p">
                    <img src={DGS} alt="Avatar"></img>
                </button>
                <button className="button button-full-round box-shadow-4p-8p">
                    <img src={bauhaus} alt="Avatar"></img>
                </button>
                <button className="button button-full-round box-shadow-4p-8p">
                    <img src={staples1} alt="Avatar"></img>
                </button>
                <button className="button button-full-round box-shadow-4p-8p">
                    <img src={DHL1} alt="Avatar"></img>
                </button>
                <button className="button button-full-round box-shadow-4p-8p">
                    <img src={tshirt} alt="Avatar"></img>
                </button>
            </div>
        )
    }
}
export default Customers;