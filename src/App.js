import React, { useState } from 'react';
import { Button, Dropdown, Icon, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';
import TestTab from './components/TestTab'
import MainTab from './components/MainTab';


const App = () => (
  

  <div className="App">
         <div className="App-header">
           <p>Info Kiosk</p>
         </div>
          <MainTab
          />
 </div>


);


export default App;

