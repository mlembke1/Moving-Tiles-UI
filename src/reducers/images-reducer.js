    export const images = ( state={ topImages: [], bottomImages: [] }, action) => {
      switch(action.type){
        case 'GET_IMAGES':
          const finalPayload = action.payload.map(o => {
                  o['isEnlarged'] = false
                  return o
                })
          const topImagesPay = finalPayload.slice(0, 9)
          topImagesPay[0].isEnlarged = true
          const bottomImagesPay = finalPayload.slice(9)
          bottomImagesPay[0].isEnlarged = true
          return { ...state, topImages: topImagesPay, bottomImages: bottomImagesPay }
        
        case 'SET_IS_ENLARGED_TOP':
          return { ...state, topImages: action.payload }

        case 'SET_IS_ENLARGED_BOTTOM':
          return { ...state, bottomImages: action.payload }   

        default:
          return state
      }
  }