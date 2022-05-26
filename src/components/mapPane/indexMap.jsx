import React from 'react';
import { ReactComponent as Floor1 } from './../../datas/1et.svg';

const IndexMap = ( ) => {


    function Parsse () { 
        return  (
               <dir>
                <Floor1 />
             </dir>
             )
         }      

    const ttt = [
        <dir>
           <Floor1 />
        </dir>
    ]
    return (
        <React.Fragment key='infopane1'>
        <dir>
           <Parsse />
        </dir>
        </React.Fragment>
    )

};

export default IndexMap;