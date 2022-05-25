import React from 'react';
// import { Button, Dropdown, Icon, Modal, Tab, Segment, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types'
import moment from 'moment';
import { useEffect, useState } from 'react/cjs/react.production.min';
// import './MainTabStyle.css'
// import {useState} from "react";

const InfoPane = ( props ) => {

    console.log(props)
    // const [text1, setText1] = useState(props["floorId"])

    // useEffect(() => {
    //     setText1('Text for the flor number ' + text1)
    //     console.log(text1)
    //     }, [],
    // )

    return (
        <React.Fragment key='infopane1'>
        <dir>
            <h1>{props["floorId"]}</h1>
        </dir>
        </React.Fragment>
    )

}
export default InfoPane;