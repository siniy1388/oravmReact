import React from 'react';
import { Button, Dropdown, Icon, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types'
import moment from 'moment';
import './style.sass';
import {useState} from "react";

const TimeData = () => {

    const [time1, setTime1] = useState(moment('01.01.2010 08:00').format('HH:mm'))
    const [time2, setTime2] = useState(moment('01.01.2010 18:00').format('HH:mm'))

    const timeData = [
        <div>
          <Button className="label">
            <p> {time1} </p>
            <p> {time2} </p>
          </Button>
        </div>,
    ]

    return (
          <div className="wrapper_srch">
            {timeData}
          </div>
        )

};

export default TimeData;