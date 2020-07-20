import React, { Component } from 'react';
// import home1 from '../../img/home1.png';

// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>



const Customers = (props) => {


    return (
        <button className="button button-full-round box-shadow-4p-8p background-whitesmoke">
            <img src={require(`../../img/${props.img}.png`)} alt={props.img}></img>
        </button>
    )
};

export default Customers;


// class Customers extends Component {


//     render() {
//         const isData = this.state.isData;
//         return (

//             <div className="column padding-left-5">

//                 {isData ? (
//                     this.state.records.map((person) =>{ 
//                     <h>{person.Customer}</h>
//                     })
//                     // <button className="button button-full-round box-shadow-4p-8p background-whitesmoke">
//                     //     <img src={DGS} alt="Avatar"></img>
//                     // </button>
//                 ) : (
//                        <h1>loading........</h1>

//                     )}

//                 {/* <button className="button button-full-round box-shadow-4p-8p background-whitesmoke">
//                     <img src={DGS} alt="Avatar"></img>
//                 </button>
//                 <button className="button button-full-round box-shadow-4p-8p background-whitesmoke">
//                     <img src={Bauhaus} alt="Avatar"></img>
//                 </button>
//                 <button className="button button-full-round box-shadow-4p-8p background-whitesmoke">
//                     <img src={Staples} alt="Avatar"></img>
//                 </button>
//                 <button className="button button-full-round box-shadow-4p-8p background-whitesmoke">
//                     <img src={DHL} alt="Avatar"></img>
//                 </button> */}
//             </div>
//         )
//     }
// }