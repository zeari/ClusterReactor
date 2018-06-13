import { combineReducers } from 'redux'
import {
  REQUEST_CLUSTERS, RECEIVE_CLUSTERS
} from '../actions'

const clusters = (state = {
  isFetching: false,
  clusters: []
}, action) => {
  switch (action.type) {
    case REQUEST_CLUSTERS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_CLUSTERS:
      return {
        ...state,
        isFetching: false,
        clusters: action.clusters,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const allClusters = (state = {isFetching: false, allClusters: {clusters: []} }, action) => {
  console.log("rootReducer", state, action)
  switch (action.type) {
    case RECEIVE_CLUSTERS:
    case REQUEST_CLUSTERS:
      return {
        ...state,
        allClusters: clusters(state.allClusters, action)
      }
    default:
      return state
  }
}

const rootReducer = allClusters
//const rootReducer = combineReducers({
//  allClusters
//})

export default rootReducer
