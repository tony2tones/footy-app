import React from 'react';

import './PastResults.css';

const PastResults = (props) => {
    console.log('this is what you passed: ',props);
    console.log(Object.keys(props));

    // const teamScores = props.map((teamScore)=> {
        let mapped = Object.keys(props.score).map(key => {
            props[key]
        });
        console.log('this is what mapp is ', mapped);

        for (let x = 0; x < temp1.length; ++x) {
            console.log(temp1[x].match_id);

            temp1.forEach((toast) => {
                console.log(toast.match_id)
            })

            for (const toast of temp1) {
                console.log(toast.match_id)
              }
    // let data = props.score;
    // console.log('this is how long this data is',props.score.length)
    // for (var j = 0; j < props.length; j++){
    //     console.log(data[j].match_awayteam_name);
    //   }
    // let key = Object.keys(data);
    //   for (let keys of key) {
    //     console.log(keys, data[keys]); // Will display contents of the object inside the array
    // }
    // })
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

