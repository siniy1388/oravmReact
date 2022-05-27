import React from 'react';

import { ReactComponent as Floor1 } from './../../datas/1et.svg';
import Floor01 from './map1';
import SVGLoader from './svgLoader';
const IndexMap = ( ) => {


    // function Parsse () { 
    //     return  (
    //            <dir>
    //             <Floor1 />
    //          </dir>
    //          )
    //      }      

    // const TTT = [
    //     <svg>
    //        <Floor01 />
    //     </svg>
    // ]
    return (
        <React.Fragment key='infopane1'>
        <dir>
           <SVGLoader />
        </dir>
        </React.Fragment>
    )

};

export default IndexMap;