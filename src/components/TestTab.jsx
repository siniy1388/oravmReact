import React from 'react';
import { Button, Dropdown, Icon, Modal, Tab, Segment, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types'
import moment from 'moment';
import  "./tabStyle.css"
import {useState} from "react";

const TestTab = () => {
    
    const [state1, setState1] = useState('');

    function openTab( ) {
       var cityName = "Servers"
    // const  openTab = (cityName) => {    
        var i, tabcontent, tablinks;
        console.log("cityName")
        console.log(cityName)
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        //e.currentTarget.className += " active";
        switch (cityName) { 
            case 'Servers': 
                loadServ();
                loadUsers();
                break;
            case 'Repos':    
                loadVms(); 
                break;
            case 'Network':
                loadCommands();
                break;
            default:
                break;    
                
    }
    }

    function loadCommands() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
        var uservm = JSON.parse(this.responseText);
        var html = '<tr>\n' + 
            '        <th>id</th>\n' +
            '        <th>groop</th>\n' +
            '        <th>command</th>\n' +
            '        <th>nameR</th>\n' +
            '        <th>Delete</th>\n' +
            '    </tr>';
        for (var i = 0; i < uservm.length; i++) {
            var user = uservm[i];
            console.log(user);
            html = html + '<tr><td>' + user.id+ '</td>\n' +
                '       <td>' + user.groop+ '</td>\n' +
                '        <td>' + user.command + '</td>\n' +
                '        <td>' + user.namer + '</td>' +
                '        <td><button onclick="deleteUser(' + user.id + ')">Delete</button></td></tr>';

        }
        document.getElementById("commandList").innerHTML = html;
    }
        };
        xhttp.open("GET", "http://localhost:8080/commands/findAll", true);
        xhttp.send();
    }

function loadUsers() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var users = JSON.parse(this.responseText);
        var html = '<tr>\n' +
            '        <th>User id</th>\n' +
            '        <th>User name</th>\n' +
            '        <th>User login</th>\n' +
            '        <th>User email</th>\n' +
            '        <th>Delete</th>\n' +
            '    </tr>';
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            console.log(user);
            html = html + '<tr><td>' + user.id + '</td>\n' +
                '        <td>' + user.name + '</td>\n' +
                '        <td>' + user.login + '</td>\n' +
                '        <td>' + user.email + '</td>' +
                '        <td><button onclick="deleteUser(' + user.id + ')">Delete</button></td></tr>';

        }
        document.getElementById("usersList").innerHTML = html;
    }
};
xhttp.open("GET", "http://localhost:8080/users/findAll", true);
xhttp.send();
}

function loadVms() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var usersvm = JSON.parse(this.responseText);
        var html = '<tr>\n' +
            '        <th>UserVm id</th>\n' +
            '        <th>UserVm name</th>\n' +
            '        <th>UserVm nameVm</th>\n' +
            '        <th>UserVm cdVmSys</th>\n' +
            '        <th>UserVm userid</th>\n' +
            '        <th>UserVm cdvm</th>\n' +
            '        <th>Delete</th>\n' +
            '    </tr>';
        for (var i = 0; i < usersvm.length; i++) {
            var uservm = usersvm[i];
            console.log(uservm);
            html = html + '<tr><td>' + uservm.name + '</td>\n' +
                '        <td>' + uservm.name + '</td>\n' +
                '        <td>' + uservm.namevm + '</td>\n' +
                '        <td>' + uservm.cdvmSystem + '</td>' +
                '        <td>' + uservm.userid + '</td>' +
                '        <td>' + uservm.cdvm + '</td>' +
                '        <td><button onclick="deleteUser(' + uservm.id + ')">Delete</button></td></tr>';

        }
        document.getElementById("vmsList").innerHTML = html;
    }
};
xhttp.open("GET", "http://localhost:8080/usersvm/findAllVm", true);
xhttp.send();
}

function loadServ() {
    console.log("Servers")
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var servers = JSON.parse(this.responseText);
        var html = '<tr >\n' +
            '        <th>Server name</th>\n' +
            '    </tr>';
        for (var i = 0; i < servers.length; i++) {
            var server = servers[i];
            console.log(server);
            html = html + 
                '        <tr onclick="getServerVms(\'' +server.id+ '\')"><td id=' + server.id + '>' + server.name + '</td>\n' +
                '   </tr>';

        }
        document.getElementById("servList").innerHTML = html;
    }
};
xhttp.open("GET", "http://localhost:8080/ovmm_commands/ExecComndDto?command=list server", true);
xhttp.send();
}

    const panes = [
        <div class="tab">
        <Button class="tablinks"
        // onclick={openTab("Servers")}
        onclick={openTab}
        title={"Servers and VMs"}
        >Servers and VMs
        </Button>
        <Button class="tablinks" 
        // onclick={openTab("Repos")}
        >Repositories</Button>
        <Button class="tablinks" 
        // onclick={openTab("Network")}
        >Networking</Button>
        <Button class="tablinks" 
        // onclick={openTab("Storage")}
        >Storage</Button>
      </div>
      ]

    //  function handleChange(e, data) {
    //    //console.log(e)
    //     setState1(data)
    //  } 

    const tablePanel1 = [  
        <div>
        <div id="Servers" class="tabcontent">
        <h3>Servers and VMs</h3>
        <div class="wrapper_panel">
      <div class="box1">
          <button type="button" class="btn btn-secondary">Create VM</button>
          <button type="button" class="btn btn-secondary">Server Info</button>
      </div>
   <div class="box2">
                <button type="button" class="btn btn-secondary" onclick="startVm(selectedVmId)">Start Vm</button>
                <button type="button" class="btn btn-secondary" onclick="getVmInfo(selectedVmId)">Vm Info</button>
                <button type="button" class="btn btn-secondary">Stop Vm</button>
   </div>
      <div class="box3">
          <table id="servList" class="table_style"> </table>
      </div>
   <div class="box4">
          <table id="vmList" class="table_style_child"></table>
   </div>
        </div>
        </div>
        </div>,
    ]

    const tablePanel2 = [  
        <div>
        <div id="Repos" class="tabcontent">
        <h3>Repositories</h3> // id="vmsList"
        <div class="wrapper_panel">
        <div class="box1">
          <button type="button" class="btn btn-secondary">Create VM</button>
          <button type="button" class="btn btn-secondary">Server Info</button>
        </div>
        <div class="box2">
                <button type="button" class="btn btn-secondary" onclick="startVm(selectedVmId)">Start Vm</button>
                <button type="button" class="btn btn-secondary" onclick="getVmInfo(selectedVmId)">Vm Info</button>
                <button type="button" class="btn btn-secondary">Stop Vm</button>
        </div>
        <div class="box3">
            <table id="servList" class="table_style"> </table>
            </div>
        <div class="box4">
          <table id="vmList" class="table_style_child"></table>
        </div>
    </div>
</div>
</div>,
]

const tablePanel3 = [  
    <div>
    <div id="Network" class="tabcontent">
    <h3>Repositories</h3> // id="vmsList"
    <div class="wrapper_panel">
    <div class="box1">
      <button type="button" class="btn btn-secondary">Create VM</button>
      <button type="button" class="btn btn-secondary">Server Info</button>
    </div>
    <div class="box2">
            <button type="button" class="btn btn-secondary" onclick="startVm(selectedVmId)">Start Vm</button>
            <button type="button" class="btn btn-secondary" onclick="getVmInfo(selectedVmId)">Vm Info</button>
            <button type="button" class="btn btn-secondary">Stop Vm</button>
    </div>
    <div class="box3">
        <table id="servList" class="table_style"> </table>
        </div>
    <div class="box4">
      <table id="vmList" class="table_style_child"></table>
    </div>
</div>
</div>
</div>,
]

const tablePanel4 = [  
    <div>
    <div id="Storage" class="tabcontent">
    <h3>Repositories</h3> // id="vmsList"
    <div class="wrapper_panel">
    <div class="box1">
      <button type="button" class="btn btn-secondary">Create VM</button>
      <button type="button" class="btn btn-secondary">Server Info</button>
    </div>
    <div class="box2">
            <button type="button" class="btn btn-secondary" onclick="startVm(selectedVmId)">Start Vm</button>
            <button type="button" class="btn btn-secondary" onclick="getVmInfo(selectedVmId)">Vm Info</button>
            <button type="button" class="btn btn-secondary">Stop Vm</button>
    </div>
    <div class="box3">
        <table id="servList" class="table_style"> </table>
        </div>
    <div class="box4">
      <table id="vmList" class="table_style_child"></table>
    </div>
</div>
</div>
</div>,
]
   

    return (
    <div>
       
<div>
    {panes}
{tablePanel1}
{tablePanel2}
{tablePanel3}
{tablePanel4}
</div>
      </div>
      )

};

export default TestTab;