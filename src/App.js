import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header } from './Header.js';
import { ClusterList } from './ClusterList.js';
import { ListToolbar } from './ListToolbar.js';
import { ListView, Icon, Button, Row, Col } from 'patternfly-react'
import PropTypes from 'prop-types'
import { fetchClustersIfNeeded } from './actions'

import logo from './logo.svg';
import "patternfly/dist/css/patternfly.css";
import "patternfly/dist/css/patternfly-additions.css";
import './App.css';

class App extends Component {
  static propTypes = {
    allClusters: PropTypes.shape({clusters: PropTypes.array.isRequired}),
    isFetching: PropTypes.bool, //.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    console.log('did mount')
    dispatch(fetchClustersIfNeeded())
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(fetchClustersIfNeeded())
  }


  render() {
    const { allClusters, isFetching, lastUpdated } = this.props
    console.log('rerender state:', this.state, "props:", this.props)
    //const isEmpty = allClusters.clusters.length === 0
    //debugger
    return (
      <div>
        <Header></Header>
        <ListToolbar/>
        <ClusterList clusters={allClusters.clusters}></ClusterList>
        <p>
            {lastUpdated &&
              <span>
                Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                {' '}
              </span>
            }
            {!isFetching &&
              <button onClick={this.handleRefreshClick}>
                Refresh
              </button>
            }
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //return {...state, isFetching: state.isFetching || false, clusters: state.clusters || []}
  return state
}

export default connect(mapStateToProps)(App)
