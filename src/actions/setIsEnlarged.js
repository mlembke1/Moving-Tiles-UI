export const setIsEnlarged = (id, imageSet, imageSetNuanced) => dispatch => {
    const itemToChange = imageSet.filter(image => image.id === id)
    const i = imageSet.findIndex(image => image.id === id)
    const firstHalf = imageSet.slice(0, i).map(m => {
      m.isEnlarged = false
      return m
    })
    const secondHalf = imageSet.slice(i + 1).map(m => {
      m.isEnlarged = false
      return m
    })
  

    const updatedImages = () => {
      if(!itemToChange[0].isEnlarged){
        itemToChange[0].isEnlarged = true
        return firstHalf.concat(itemToChange[0], secondHalf)
      } else {
        return imageSet
      }
    }
  
  
    return dispatch({
        type: imageSetNuanced,
        payload: updatedImages()
    })
  }