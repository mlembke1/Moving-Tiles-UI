    export const images = ( state={ all: [] }, action) => {
    switch(action.type){
      case 'GET_IMAGES':
         return { ...state, all: action.payload }

        default:
          return state
    }
  }