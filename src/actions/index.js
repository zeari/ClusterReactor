export const REQUEST_CLUSTERS = 'REQUEST_CLUSTERS'
export const RECEIVE_CLUSTERS = 'RECEIVE_CLUSTERS'

export const requestClusters = () => ({
  type: REQUEST_CLUSTERS,
})

export const receiveClusters = (json) => ({
  type: RECEIVE_CLUSTERS,
  clusters: json,//.data.children.map(child => child.data),
  receivedAt: Date.now()
})


const fetchClusters = () => dispatch => {
  dispatch(requestClusters())
  return fetch(`/mockdata.json`)
    .then(response => response.json())
    .then(function(json) {
      console.log('fetch complete:', json)
      dispatch(receiveClusters(json))
    })
}

const shouldFetchClusters = (state) => {
  const clusters = state.clusters
  if (!clusters) {
    return true
  }
  if (clusters.isFetching) {
    return false
  }
  return clusters.didInvalidate
}

export const fetchClustersIfNeeded = () => (dispatch, getState) => {
  //if (shouldFetchClusters(getState())) {
    return dispatch(fetchClusters())
  //}
}