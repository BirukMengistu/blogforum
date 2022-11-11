import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { buyCake } from '../store/cake/cakeActions'

function CakeContainer () {
    const numOfCake = useSelector((state) => state.cake.cake.numOfCake)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCake} </h2>
      <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}



export default CakeContainer
