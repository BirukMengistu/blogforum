
import {BUY_CAKE , ADD_CAKE} from './index.js'

export const  buyCake = () =>{
    return{
        type: BUY_CAKE,
        info:'sale one cake from store'
    }
}

export const  addCake =() =>{
    return{
        type: ADD_CAKE,
        info:'add Cake to store '
    }
}