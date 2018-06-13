import React, { Component } from 'react';
import { Header } from './Header.js';
import { ClusterList } from './ClusterList.js';
import { ListView, Icon, Button, Row, Col } from 'patternfly-react'
import logo from './logo.svg';
import "patternfly/dist/css/patternfly.css";
import "patternfly/dist/css/patternfly-additions.css";
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      <Header></Header>
      <ClusterList></ClusterList>
      </div>
    );
  }
}

export default App;
