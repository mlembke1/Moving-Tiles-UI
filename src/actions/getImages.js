export const getImages = () => {
    return dispatch => {
      fetch("https://moving-tiles-imgs.herokuapp.com/")
        .then(response => response.json())
        .then(payload => {
          dispatch({ type: 'GET_IMAGES', payload })
        })
        .catch(error => {
          dispatch({ type: 'FAIL', payload: undefined})
        })
    }
  }