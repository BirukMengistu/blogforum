
import {BUY_CAKE , ADD_CAKE } from './index'

const initalStateCake = {
    numOfCake:10
}


//reducer
const cakeReducer =( state = initalStateCake ,action)=>{
  switch(action.type){
      case BUY_CAKE:
        return{
            ...state,
        numOfCake: state.numOfCake -1
        }
        case ADD_CAKE:
            return{
                ...state,
            numOfCake: state.numOfCake +1
            }

      default:
          return state
      
  }
}


export default cakeReducer