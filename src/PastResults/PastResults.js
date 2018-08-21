import React from 'react';
import "babel-polyfill";

import './PastResults.css';

const PastResults = (props) => {  
            // props.forEach((toast) => {
            //     console.log(toast.match_id)
            // })
            console.log('this is whats passing ',props);

            for (let [key, value] of Object.entries(props)){
                console.log('this is the key and value ',key, value);
              }
            for (const toast in props) {
                console.log('this isnt defined is it? ', toast);
              }
   
    return (
        <div>
            </div>
        // <div className="container">
        //     {data.map(function (d, index) {
        //         return (
        //             <div>
        //                 <li key={index}>{d.data[0].title}</li>
        //                 <li key={index}>{d.data[0].description}</li>
        //                 <li key={index}>{d.data[0].date_created}</li>
        //                 <li key={index}>{d.data[0].keywords}</li>
        //                 <br />
        //             </div>
        //         )
        //     })}
        // </div>
    )
}

export default PastResults;

