import React from 'react';
import { Button, Dropdown, Icon, Modal, Tab, Segment, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types'
import moment from 'moment';
import './MainTabStyle.css'
import {useState} from "react";

const MainTab = () => {
    
    const [state1, setState1] = useState('');

    const panes = [
        { menuItem: ' Servers and VMs  ', render: () => <Tab.Pane>
            Servers and VMs</Tab.Pane> },
        { menuItem: ' Repositories  ', render: () => <Tab.Pane>
            Repositories</Tab.Pane> },
        { menuItem: ' Networking  ', render: () => <Tab.Pane>
            Networking</Tab.Pane> },
        { menuItem: ' Storage  ', render: () => <Tab.Pane>
            Storage</Tab.Pane> },    
      ]

     function handleChange(e, data) {
       //console.log(e)
        setState1(data)
     } 

    const tablePanel = [  
        <div id="Servers" class="tabcontent">
            <h3>Servers and VMs</h3>

            <div class="wrapper_panel">
                <div class="box1">
                <Button type="button" class="btn btn-secondary">Create VM</Button>
                <Button type="button" class="btn btn-secondary">Server Info</Button>
            </div>
            <div class="box2">
                <Button type="button" class="btn btn-secondary" 
                onclick="startVm(selectedVmId)">Start Vm</Button>
                <Button type="button" class="btn btn-secondary" 
                onclick="getVmInfo(selectedVmId)">Vm Info</Button>
                <Button type="button" class="btn btn-secondary">Stop Vm</Button>
            </div>
            <div class="box3">
                <Table id="servList" class="table_style"> </Table>
            </div>
            <div class="box4">
                <Table id="vmList" class="table_style_child"></Table>
            </div>
            </div>
        </div>
    ]
    

    return (
        <div className="ui attached tabular menu">
        <Tab 
        panes={panes} 
        onTabChange={handleChange} 
        />
        <div>{tablePanel}</div>
        {/* <Segment tertiary>
        
          <pre>{JSON.stringify(state1, null, 2)}</pre>
        </Segment> */}
      </div>
        )

};

export default MainTab;