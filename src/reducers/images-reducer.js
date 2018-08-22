    export const images = ( state={ allImages: [] }, action) => {
    switch(action.type){
      case 'GET_IMAGES':
         return { ...state, allImages: action.payload }

        default:
          return state
    }
  }